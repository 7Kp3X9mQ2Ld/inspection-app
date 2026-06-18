import { useEffect, useState } from "react";
import { sections } from "./questions";
import { generatePDF } from "./pdf";

// safe UUID replacement (fixes iPad / Safari crash)
const createId = () =>
  Date.now().toString() +
  Math.random().toString(36).slice(2);

export default function App() {

  // ================= FORM STATE (MOVED UP) =================
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem(`form-${localStorage.getItem("activeForm")}`);
    return saved ? JSON.parse(saved) : {};
  });

  const [currentFormId, setCurrentFormId] = useState(() => {
    return localStorage.getItem("activeForm") || createId();
  });

  const [inspections, setInspections] = useState(() => {
    const saved = localStorage.getItem("inspections");
    return saved ? JSON.parse(saved) : [];
  });

  // ================= UPDATE =================
  const update = (id, value) => {
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // ================= LOAD INSPECTION (MOVED BELOW form) =================
  const loadInspection = (id) => {
    const saved = localStorage.getItem(`form-${id}`);

    setCurrentFormId(id);

    setForm(saved ? JSON.parse(saved) : {});
  };

  // ================= SAVE FORM =================
  useEffect(() => {
    localStorage.setItem(
      `form-${currentFormId}`,
      JSON.stringify(form)
    );

    localStorage.setItem(
      "activeForm",
      currentFormId
    );
  }, [form, currentFormId]);

  // ================= INSPECTIONS LIST =================
  useEffect(() => {
    const vesselName = form.vesselName || "Untitled";
    const date = form.date || "";

    setInspections((prev) => {
      const existing = prev.find(
        (i) => i.id === currentFormId
      );

      let updated;

      if (existing) {
        updated = prev.map((i) =>
          i.id === currentFormId
            ? { ...i, vesselName, date }
            : i
        );
      } else {
        updated = [
          ...prev,
          {
            id: currentFormId,
            vesselName,
            date,
            status: "draft",
          },
        ];
      }

      localStorage.setItem(
        "inspections",
        JSON.stringify(updated)
      );

      return updated;
    });
  }, [form.vesselName, form.date, currentFormId]);

  // ================= RESET =================
  const handleResetForm = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the form? All answers will be cleared."
    );

    if (!confirmReset) return;

    setForm({});
    localStorage.removeItem(`form-${currentFormId}`);
  };

  // ================= VALIDATION =================
  const isQuestionComplete = (q) =>
    form[q.id] != null && form[q.id] !== "";

  const getMissingQuestions = () => {
    const missing = new Set();

    sections.forEach((section) => {
      section.subsections.forEach((sub) => {
        sub.questions.forEach((q) => {
          if (!isQuestionComplete(q)) {
            missing.add(q.id);
          }
        });
      });
    });

    return missing;
  };

  const missingQuestions = getMissingQuestions();

  const isFormComplete = () => {
    const hasVesselDetails =
      form.vesselName?.trim() &&
      form.callsign?.trim() &&
      form.date?.trim();

    const hasAllQuestions = missingQuestions.size === 0;

    return hasVesselDetails && hasAllQuestions;
  };

  // ================= UI (UNCHANGED) =================
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Torremolinos & ILO188 Outfit Guidance Report</h1>

      <div style={{ fontSize: 12, opacity: 0.6 }}>
        Missing questions: {missingQuestions.size} | Form complete:{" "}
        {String(isFormComplete())}
      </div>

      {/* ================= VESSEL DETAILS ================= */}
      <h2>Vessel Details</h2>

      <input
        placeholder="Name of Vessel"
        value={form.vesselName || ""}
        onChange={(e) => update("vesselName", e.target.value)}
        style={{
          width: "100%",
          marginBottom: 12,
          padding: "14px 12px",
          fontSize: 16,
          border: form.vesselName ? "1px solid #ccc" : "2px solid #d32f2f",
          borderRadius: 8,
          boxSizing: "border-box",
        }}
      />

      <input
        placeholder="Call Sign"
        value={form.callsign || ""}
        onChange={(e) => update("callsign", e.target.value)}
        style={{
          width: "100%",
          marginBottom: 12,
          padding: "14px 12px",
          fontSize: 16,
          border: form.callsign ? "1px solid #ccc" : "2px solid #d32f2f",
          borderRadius: 8,
          boxSizing: "border-box",
        }}
      />

      <input
        type="date"
        value={form.date || ""}
        onChange={(e) => update("date", e.target.value)}
        style={{
          width: "100%",
          marginBottom: 12,
          padding: "14px 12px",
          fontSize: 16,
          border: form.date ? "1px solid #ccc" : "2px solid #d32f2f",
          borderRadius: 8,
          boxSizing: "border-box",
        }}
      />

      {/* ================= QUESTIONS ================= */}
      {sections.map((section) => (
        <div key={section.title}>
          <h2 style={{ marginTop: 30 }}>{section.title}</h2>

          {section.subsections.map((sub) => (
            <div key={sub.subtitle}>
              <h3 style={{ marginTop: 15 }}>{sub.subtitle}</h3>

              {sub.questions.map((q) => (
                <div
                  key={q.id}
                  style={{
                    marginBottom: 15,
                    padding: 10,
                    borderRadius: 8,
                    border: missingQuestions.has(q.id)
                      ? "2px solid #d32f2f"
                      : "2px solid transparent",
                    background: missingQuestions.has(q.id)
                      ? "rgba(211, 47, 47, 0.08)"
                      : "transparent",
                    transition: "0.2s ease",
                  }}
                >
                  <p style={{ margin: 0, textAlign: "left", width: "100%" }}>
                    {q.label}
                  </p>

                  {missingQuestions.has(q.id) && (
                    <div
                      style={{
                        color: "#d32f2f",
                        fontSize: 12,
                        marginTop: 4,
                        fontWeight: 600,
                      }}
                    >
                      This question is required
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => update(q.id, opt)}
                        style={{
                          padding: 10,
                          border: "1px solid #ccc",
                          borderRadius: 6,
                          background:
                            form[q.id] === opt ? "#4caf50" : "#f2f2f2",
                          color: "#000",
                          cursor: "pointer",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* ================= EXPORT + BUTTONS (UNCHANGED) ================= */}
      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 15 }}>

        {/* FULL REPORT */}
        <button
  onClick={async () => {
    if (!isFormComplete()) {
      alert("Please answer all questions before exporting the report.");
      return;
    }

    const pdfBytes = await generatePDF(form, sections, "full");

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const vesselName = (form.vesselName || "vessel")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

    const fileName = `${vesselName}-full-report.pdf`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  }}
  style={{
    padding: "18px 20px",
    fontSize: 18,
    fontWeight: 600,
    background: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: 10,
    width: "100%",
    cursor: "pointer",
  }}
>
  Export Full Report
</button>

        {/* DEFICIENCIES REPORT */}
        <button
  onClick={async () => {
    if (!isFormComplete()) {
      alert("Please answer all questions before exporting the report.");
      return;
    }

    const pdfBytes = await generatePDF(form, sections, "deficiencies");

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const vesselName = (form.vesselName || "vessel")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

    const fileName = `${vesselName}-deficiencies.pdf`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  }}
  style={{
    padding: "18px 20px",
    fontSize: 18,
    fontWeight: 600,
    background: "#d32f2f",
    color: "white",
    border: "none",
    borderRadius: 10,
    width: "100%",
    cursor: "pointer",
  }}
>
  Export Deficiencies Report
</button>

        {/* NEW INSPECTION */}
        <button
  onClick={() => {
    const id = createId();
    setCurrentFormId(id);
    setForm({});
  }}
  style={{
    padding: "18px 20px",
    fontSize: 18,
    fontWeight: 600,
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: 10,
    width: "100%",
    cursor: "pointer",
  }}
>
  + New Inspection
</button>

        <h2>Saved Inspections</h2>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 30,
  }}
>
  {inspections.map((inspection) => (
    <div
      key={inspection.id}
      style={{ display: "flex", gap: 10, alignItems: "center" }}
    >
      <button
        onClick={() => loadInspection(inspection.id)}
        style={{ padding: 15, textAlign: "left", flex: 1 }}
      >
        <strong>{inspection.vesselName}</strong>
        <br />
        {inspection.date || "No date"}
        {inspection.id === currentFormId && " (Open)"}
      </button>

      <button
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this inspection? This cannot be undone."
          );

          if (!confirmDelete) return;
          const id = inspection.id;
          localStorage.removeItem(`form-${id}`);
          const updated = inspections.filter((i) => i.id !== id);
          setInspections(updated);
          localStorage.setItem(
            "inspections",
            JSON.stringify(updated)
          );

          if (currentFormId === id) {
            const newId = createId();
            setCurrentFormId(newId);
            setForm({});
          }
        }}
        style={{
          padding: "10px 12px",
          background: "#d32f2f",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Delete
      </button>
    </div>
  ))}
</div>

        <button onClick={handleResetForm}>
          Reset Form
        </button>
        <button
  onClick={() => {
    const updated = { ...form };

    sections.forEach((section) => {
      section.subsections.forEach((sub) => {
        sub.questions.forEach((q) => {
          if (q.options?.includes("No")) {
            updated[q.id] = "No";
          } else if (q.options?.length) {
            updated[q.id] = q.options[0];
          }
        });
      });
    });

    setForm(updated);
  }}
  style={{
    padding: "18px 20px",
    fontSize: 16,
    fontWeight: 600,
    background: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: 10,
    width: "100%",
    cursor: "pointer",
    marginTop: 10,
  }}
>
  DEV: Fill All Answers (No)
</button>

      </div>
    </div>
  );
}