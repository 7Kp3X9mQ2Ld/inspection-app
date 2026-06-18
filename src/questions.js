export const sections = [
  {
    title: "Chapter 2. Construction, Watertight Integrity, and Equipment",
    subsections: [
      {
        subtitle: "Regulation 1. Construction.",
        questions: [
          {
            id: "q1",
            label:
              "Has the hull integrity, hull shell, deck, superstructures, deckhouses, machinery casings, companionways and any other structures been maintained to a marine standard.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hull integrity, hull shell, deck, superstructures, deckhouses, machinery casings, companionways and any other structures should be maintained to a marine standard."
          },
          {
            id: "q2",
            label:
              "Is the structure of the hull, weather deck, superstructure and internal structure free from damage?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The structure of the hull, weather deck, superstructure and internal structure should free from damage."
          },
          {
            id: "q3",
            label: "Has all damage or corrosion been repaired?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All damage and corrosion should be repaired."
          },
          {
            id: "q4",
            label:
              "Are all watertight bulkheads maintained watertight (collision and engine room bulkheads)?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All watertight bulkheads should be maintained watertight."
          },
          {
            id: "q5",
            label:
              "Are the engine room bulkheads extended up to the working deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engine room bulkheads should extend up to the working deck."
          },
          {
            id: "q6",
            label:
              "Have any pipes that pierce the collision bulkhead been fitted with suitable valves operable from above the working deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Any pipes that pierce the collision bulkhead should be fitted with suitable valves operable from above the working deck."
          },
          {
            id: "q7",
            label:
              "Are all openings in the collision bulkhead above the working deck and watertight?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All openings in the collision bulkhead should be above the working deck and watertight."
          },
          {
            id: "q8",
            label:
              "On vessels over 75m LOA, has a watertight double bottom been fitted between the collision bulkhead and the aft peak bulkhead?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
        ],
      },
      {
        subtitle: "Regulation 2. Watertight doors.",
        questions: [
          {
            id: "q9",
            label:
              "Are all watertight doors fully operational and watertight when closed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All watertight doors should to be fully operational and watertight when closed."
          },
          {
            id: "q10",
            label:
              "Are the watertight doors of equivalent strength to the adjacent unpierced structure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All watertight doors should to be of an equivalent strength to the surrounding structure."
          },
          {
            id: "q11",
            label: "Are KEEP CLOSED AT SEA signs fitted to the doors?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All watertight doors should to be labelled on both sides 'KEEP CLOSED AT SEA'."
          },
        ],
      },
      {
        subtitle: "Regulation 3. Hull Integrity.",
        questions: [
          {
            id: "q12",
            label:
              "Are all external opening capable of being closed watertight?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All external openings should to be capable of being closed watertight."
          },
          {
            id: "q13",
            label:
              "Are deck opening which are open during fishing operations arrange near the vessel’s centreline?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All deck openings which are open during fishing operations should be arrange near the vessel centreline."
          },
        ],
      },
      {
        subtitle: "Regulation 4. Weathertight doors.",
        questions: [
          {
            id: "q14",
            label:
              "Are the weathertight doors of an equivalent strength to the adjacent unpierced structure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All weathertight doors should be of an equivalent strength to the surrounding structure."
          },
          {
            id: "q15",
            label:
              "Are the weathertight doors weathertight when closed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All weathertight doors should be weathertight when closed."
          },
          {
            id: "q16",
            label:
              "Are the weathertight doors fitted with gaskets?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All weathertight doors should be fitted with gaskets."
          },
          {
            id: "q17",
            label:
              "Are the weathertight doors fitted with clamps which be operated for each side?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The weathertight doors should have handles fitted so that they can be operated from both sides."
          },
          {
            id: "q18",
            label:
              "Are the doorway sills 600mm above the working deck and 300mm above the superstructure deck? (The administrator may approve a reduction to 380mm and 150mm respectively).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The door sill to the wheelhouse is less than 300mm. The door sill is approved by the administrator."
          },
        ],
      },
      {
        subtitle: "Regulation 6. Hatchways.",
        questions: [
          {
            id: "q19",
            label:
              "Are the hatch coamings at least 600mm above the working deck and 300mm above the superstructure deck?(Reduced height are to be approved by the administration).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hatch coamings should be at least 600mm above the working deck and 300mm above the superstructure deck."
          },
          {
            id: "q20",
            label:
              "Are the hatch covers permanently attached to the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The deck hatches should be permanently attached to the vessel by hinges, wire or chain."
          },
          {
            id: "q21",
            label:
              "Can the hatches be rapidly closed and battened down or by equally effective arrangements?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Hatches should be able to be rapidly closed and battened down."
          },
          {
            id: "q22",
            label:
              "Do the hatchway covers comply with the requirement for structural strength?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hatchway covers should comply with the requirement for structural strength."
          },
          {
            id: "q23",
            label:
              "Are the hatchway covers fitted with gaskets?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All hatchway covers should be fitted with gaskets."
          },
          {
            id: "q24",
            label:
              "Are the hatchway covers fitted with clamping devices to ensure a watertight seal?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All hatchway cover should be fitted with clamping devices to ensure a watertight seal."
          },
          {
            id: "q25",
            label:
              "Are the hatch clamping arrangements full working and operational and made so the clamp cannot be lost?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hatch clamps should be fully working and made so the wing nuts cannot be lost."
          },
        ],
      },
      {
        subtitle: "Regulation 7. Machinery Space Openings.",
        questions: [
          {
            id: "q26",
            label:
              "Are the machinery space openings of an equivalent strength to the adjacent unpierced structure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space openings should be of an equivalent strength to the adjacent unpierced structure."
          },
          {
            id: "q27",
            label:
              "Are the machinery space openings fitted with gaskets?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All machinery way opening should be fitted with gaskets."
          },
          {
            id: "q28",
            label:
              "Are the machinery space opening fitted with clamps which can be operated for each side?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All machinery way openings should be fitted with clamps that can be operated from both sides."
          },
          {
            id: "q29",
            label:
              "Are the machinery space openings weathertight when closed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All machinery way opening should be weathertight."
          },
          {
            id: "q30",
            label:
              "Are the machinery space doors fitted with self-closing devices and all hook backs have been removed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space doors should be fitted with a mean of self-closing, and the hook backs should be removed."
          },
        ],
      },
      {
        subtitle: "Regulation 8. Other deck openings.",
        questions: [
          {
            id: "q31",
            label:
              "Are flush deck openings screwed or bayonet closed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Flush deck openings should be screwed or bayonet closed."
          },
          {
            id: "q32",
            label:
              "Are flush deck opening watertight?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Flush deck opening should be watertight."
          },
          {
            id: "q33",
            label:
              "Are opening other than hatchways, machinery space opening, manholes and flush scuttles protected by enclosed structures fitted with a weathertight door.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Opening other than hatchways, machinery space opening, manholes and flush scuttles should be protected by enclosed structures fitted with a weathertight door."
          },
        ],
      },
      {
        subtitle: "Regulation 9. Ventilators.",
        questions: [
          {
            id: "q34",
            label:
              "Are the ventilator coamings at least 900mm above the working deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All ventilator coamings should be at least 900mm above the working deck."
          },
          {
            id: "q35",
            label:
              "Are the ventilator coamings at least 760mm above the superstructure deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All ventilator coamings should be at least 700mm above the superstructure deck."
          },
          {
            id: "q36",
            label:
              "Are the ventilators coamings of equivalent strength to the adjacent structure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All ventilator coamings should be of equivalent strength as the surrounding structure."
          },
          {
            id: "q37",
            label:
              "Are the ventilators capable of being close weathertight by closing appliances permanently attached? (Not required on ventilators > 4.5m above the working deck and >2.3m above the Superstructure deck).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All vents should be fitted with a permanently attached means of closure (dampener). Including the vents on the funnel and the roof vents on the upper deck house."
          },
          {
            id: "q38",
            label:
              "Are ventilator over 900mm high adequately supported?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The ventilators over 900mm should be adequately supported."
          },
        ],
      },
      {
        subtitle: "Regulation 10. Air Pipes.",
        questions: [
          {
            id: "q39",
            label:
              "Are air pipes of equivalent strength to the adjacent structure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes should be of equivalent strength as the surrounding structure."
          },
          {
            id: "q40",
            label:
              "Are the air pipes fitted with appropriate protection where needed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes should be protected from damage where needed."
          },
          {
            id: "q41",
            label:
              "Are the air pipes fitted with a permanently attached means of closure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes should be fitted with permanently means of closure (Ball Valve)."
          },
          {
            id: "q42",
            label:
              "Are the air pipes at least 760mm above the working deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes should be at least 760mm above the working deck."
          },
          {
            id: "q43",
            label:
              "Are the air pipes at least 450mm above the superstructure deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes should be at least 450mm above the superstructure deck."
          },
          {
            id: "q44",
            label:
              "Are all air pipes fitted with save-alls?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All air pipes for fuel and oil should be fitted with save-alls to prevent the spillage of fuel or oil."
          },
        ],
      },
      {
        subtitle: "Regulation 11. Sounding Devices.",
        questions: [
          {
            id: "q45",
            label:
              "Are sounding devices fitted to bilges of compartments which are not accessible at all time during the voyage?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Sounding devices should be fitted to bilges of compartments which are not accessible at all time during the voyage."
          },
          {
            id: "q46",
            label:
              "Are sounding devices fitted to all tanks and cofferdams?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Sounding devices should be fitted to all tanks and cofferdams."
          },
          {
            id: "q47",
            label:
              "Are the sounding devices readily accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sounding devices should be readily accessible."
          },
          {
            id: "q48",
            label:
              "Are the sound devices closures permanently attached?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sound devices closures should be permanently attached."
          },
          {
            id: "q49",
            label:
              "Are sounding pipes that do not extend above the working deck, been fitted with automatic self-closing devices?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Sounding pipes that do not extend above the working deck, should be fitted with automatic self-closing devices."
          },
        ],
      },
      {
        subtitle: "Regulation 12. Portlights and windows.",
        questions: [
          {
            id: "q50",
            label:
              "Are hinged portlights which can be closed watertight fitted to portlights below the working deck or to spaces within the enclosed structure on deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All portlights should be fitted with hinged deadlights. It is recommended that watertight blanks are carried on board that can be fitted to a portlights and wheelhouse windows in the event of breakage."
          },
          {
            id: "q51",
            label:
              "Are all portlights fitted above 500mm above the deepest operational waterline?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All portlights should be fitted above 500mm above the deepest operational waterline."
          },
          {
            id: "q52",
            label:
              "Are portlights fitted between 1000mm and 500mm above the deepest loaded waterline the fixed type?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All portlights fitted between 1000mm and 500mm above the deepest loaded waterline should be the fixed type."
          },
          {
            id: "q53",
            label:
              "Are the portlights of an approved construction?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The portlights should be of an approved construction."
          },
          {
            id: "q54",
            label:
              "Are portlights which may be prone to damage from fishing gear protected?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Portlights which may be prone to damage from fishing gear should be protected."
          },
          {
            id: "q55",
            label:
              "Is toughened glass or its equivalent used for the wheelhouse windows?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Toughened glass or its equivalent should be used for the wheelhouse windows."
          },
        ],
      },
      {
        subtitle: "Regulation 13. Inlets and discharges.",
        questions: [
          {
            id: "q56",
            label:
              "Can all inlet and discharge valves be easily operated by hand, are they free and easy to turn?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All inlet and discharge valve should be easily operated by hand."
          },
          {
            id: "q57",
            label:
              "Are doors that pass through the shell from spaces below the working deck. or from superstructures or deckhouse weathertight?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hull doors on the factory deck should be watertight."
          },
          {
            id: "q58",
            label:
              "Are doors that pass through the superstructures or deckhouse weathertight?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The doors in the superstructure and deckhouse should be weathertight."
          },
          {
            id: "q59",
            label:
              "Have all dischargers been fitted with an automatic non-return valve with a positive means of closure? Such a valve is not required if the Administration considers that the entry of water into the vessel through the opening is not likely to lead to dangerous flooding and that the thickness of the piping is sufficient.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All discharges should be fitted with a non-return valve with a positive means of closure, unless approved by the Administration. "
          },
          {
            id: "q60",
            label:
              "Are main and auxiliary sea inlets and discharges valves accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All inlet and discharge valves should be accessible."
          },
          {
            id: "q61",
            label:
              "Are indicators provided to the inlet and discharge valves showing the valve open or closed position.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All inlet and discharge valves should indicate if they are open or closed. It is recommended an “open” or “close” tally (sign) is fitted to each valve to indicate the position."
          },
          {
            id: "q62",
            label:
              "Are all inlet and discharge valves steel, bronze, or other ductile material?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All inlet and discharge valves should be steel, bronze or other ductile material."
          },
          {
            id: "q63",
            label:
              "Are all pipes from the shell to valve steel in the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All pipes from the hull shell to the valves should be steel."
          },
        ],
      },
      {
        subtitle: "Regulation 14. Freeing Ports.",
        questions: [
          {
            id: "q64",
            label:
              "Does the freeing port area comply with regulation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The freeing port area should comply with regulation."
          },
          {
            id: "q65",
            label:
              "Are the freeing port position in accordance with the regulation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The freeing port position should be in accordance with the regulation."
          },
          {
            id: "q66",
            label:
              "Are the pound boards use for the stowage of fishing gear in a position as not to affect the discharge of shipped water on the deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The pound boards use for the stowage of fishing gear in should be in a position as not to affect the discharge of shipped water on the deck."
          },
          {
            id: "q67",
            label:
              "Are freeing port larger that 300mm x 230mm fitted with protection?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Freeing port larger that 300mm x 230mm should be fitted with protection."
          },
        ],
      },
      {
        subtitle: "Regulation 15. Anchoring and mooring equipment.",
        questions: [
          {
            id: "q68",
            label:
              "Is the anchoring and mooring equipment designed for quick and safe operation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The anchoring and mooring equipment should be designed for quick and safe operation."
          },
          {
            id: "q69",
            label:
              "Are there arrangements for dropping and hoisting the anchor and chain?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be arrangements for dropping and hoisting the anchor and chain."
          },
          {
            id: "q70",
            label:
              "Is the anchor adequate for safe mooring in all operational conditions?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The anchor should be adequate for safe mooring in all operational conditions."
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 3. Stability and Associated Seaworthiness",
    subsections: [
      {
        subtitle: "Findings/ Deficiencies.",
        questions: [
          {
            id: "q71",
            label:
              "The vessel has an approved stability book onboard the vessel.",
            type: "choice",
            options: ["Yes", "No"],
            deficiency:"The stability book should be checked to ensure it is accurate and that all items have been included. Stores have been add to the upper deck and should be included, along with the incinerator. All plans should be updated. The fire plan is incorrect as it does not show the fire hydrants. The incinerator is not shown on the plans."
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 4. Machinery installation",
    subsections: [
      {
        subtitle: "Regulation 3. General.",
        questions: [
          {
            id: "q72",
            label:
              "Are moving parts, hot surfaces and other dangers protected, to reduce to a minimum the danger to persons on board?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All moving parts, hot surfaces and other dangers should be protected, to reduce to a minimum the danger to persons on board."
          },
          {
            id: "q73",
            label:
              "Is there clear access to all machinery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be clear access to all machinery."
          },
          {
            id: "q74",
            label:
              "Is the machinery space adequately ventilated?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should be adequately ventilated."
          },
          {
            id: "q75",
            label:
              "Does the main engine have dual filters/separators?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main engine should have dual filters/separators."
          },
          {
            id: "q76",
            label:
              "Does the main engine have a second source of lubricating oil?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main engine should have a second source of lubricating oil."
          },
          {
            id: "q77",
            label:
              "Is there a second means of controlling the main engine?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a second means of controlling the main engine."
          },
          {
            id: "q78",
            label:
              "Does the main engine have a second supply of cooling water?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main engine should have a second supply of cooling water."
          },
          {
            id: "q79",
            label:
              "Is there a second means of starting the main engine?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a second means of starting the main engine. A diesel or hand operated emergency air compressor should be fitted to recharge the air start system."
          },
          {
            id: "q80",
            label:
              "Is there a means whereby the machinery can be brought into operation from the dead ship condition?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a means whereby the machinery can be brought into operation from the dead ship condition."
          },
          {
            id: "q81",
            label:
              "Is the main propulsive and all auxiliary machinery capable of operating within the operating condition for roll and pitch?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main propulsive and all auxiliary machinery should be capable of operating within the operating condition for roll and pitch."
          },
          {
            id: "q82",
            label:
              "Has the vibration of the propulsion machinery been kept to a minimum, as not to cause undue stress on systems?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vibration of the propulsion machinery should be kept to a minimum, as not to cause undue stress on systems."
          },
          {
            id: "q83",
            label:
              "Is the design and construction of the electrical installation adequate to maintain the vessel in normal operation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The design and construction of the electrical installation should be adequate to maintain the vessel in normal operation."
          },
          
          {
            id: "q84",
            label:
              "Are services essential for safety maintained in the event of electrical failure? (Emergency batteries).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should have emergency batteries fitted in a secure battery box on the accommodation roof which will power all the emergency services, lights and radios for the required duration."
          },
          {
            id: "q85",
            label:
              "Does the electrical installation protect the crew and vessel from electrical hazards?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The electrical installation should protect the crew from electrical hazards."
          },
        ],
      },
      {
        subtitle: "Regulation  4. Machinery.",
        questions: [
          {
            id: "q86",
            label:
              "Has the main and auxiliary machinery essential for the propulsion and safety been provided with effective means of control?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main and auxiliary machinery essential for the propulsion and safety should be provided with effective means of control."
          },
          {
            id: "q87",
            label:
              "Have crank case explosion relief valves of an approved type been fitted to internal combustion engines with a cylinder diameter greater than 200mm or a crankcase volume greater than 0.6m³?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Crank case explosion relief valves of an approved type should be fitted to internal combustion engines with a cylinder diameter greater than 200mm or a crankcase volume greater than 0.6m³."
          },
          {
            id: "q88",
            label:
              "Has a safety valve or relief valve which are in working order been provided to main or auxiliary machinery, including pressure vessels or any of such machinery subjected to internal pressures which may be subjected to dangerous overpressure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"A safety valve or relief valve which are in working order should be provided to main or auxiliary machinery, including pressure vessels or any of such machinery subjected to internal pressures which may be subjected to dangerous overpressure."
          },
          {
            id: "q89",
            label:
              "Has the main propulsion machinery and auxiliary machinery been provided with automatic shut-off arrangements in case of failure, such as lubricating oil supply failure, cooling Fresh Water, high temperature and over speed of main and auxiliary machinery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main propulsion machinery and auxiliary machinery should be provided with automatic shut-off arrangements in case of failure, such as lubricating oil supply failure, cooling Fresh Water, high temperature and over speed of main and auxiliary machinery."
          },
        ],
      },
      {
        subtitle: "Regulation  5. Means of going astern.",
        questions: [
          {
            id: "q90",
            label:
              "Has the vessel sufficient power for going astern to secure control of the vessel in all normal circumstances?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should have sufficient power for going astern to secure control of the vessel in all normal circumstances."
          },
          {
            id: "q91",
            label:
              "Has it been demonstrated at sea that the vessel has the ability to reverse the thrust of the propeller in sufficient time to bring the vessel to rest within a reasonable distance from maximum ahead service speed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"It should be demonstrated at sea that the vessel has the ability to reverse the thrust of the propeller in sufficient time to bring the vessel to rest within a reasonable distance from maximum ahead service speed."
          },
        ],
      },
      {
        subtitle: "Regulation  7. Communication between wheelhouse and machinery space.",
        questions: [
          {
            id: "q92",
            label:
              "Are there two separate means of communication between the wheelhouse and the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be two separate means of communication between the wheelhouse and the machinery space. The telephone system is to be labelled with number and location of call."
          },
        ],
      },
      {
        subtitle: "Regulation 8. Wheelhouse control of propulsion machinery.",
        questions: [
          {
            id: "q93",
            label:
              "Is the manoeuvring, speed, and direction of thrust fully controllable from the wheelhouse under all operational conditions?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The manoeuvring, speed, and direction of thrust should be fully controllable from the wheelhouse under all operational conditions."
          },
          {
            id: "q94",
            label:
              "Have the remoted controls for the manoeuvring, speed and direction of trust been provided with a means preventing overload of the propulsion machinery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The remoted controls for the manoeuvring, speed and direction of trust should be provided with a means preventing overload of the propulsion machinery."
          },
          {
            id: "q95",
            label:
              "Has the main propulsion machinery been provided with an emergency stopping device in the wheelhouse which is independent from the wheelhouse control system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main propulsion machinery should be provided with an emergency stopping device in the wheelhouse which is independent from the wheelhouse control system."
          },
          {
            id: "q96",
            label:
              "Is the remote control of the propulsion machinery only possible from one station at a time, at any control station?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The remote control of the propulsion machinery should only be possible from one station at a time, at any control station."
          },
          {
            id: "q97",
            label:
              "Is there an indicator at each control station show which is in control?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an indicator at each control station show which is in control."
          },
          {
            id: "q98",
            label:
              "Is the transfer of control between the wheelhouse and the machinery space only possible from the wheelhouse and the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The transfer of control between the wheelhouse and the machinery space should only be possible from the wheelhouse and the machinery space."
          },
          {
            id: "q99",
            label:
              "Have indicators been provided in the wheelhouse for; Propeller speed and direction?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Indicators should be provided in the wheelhouse for Propeller speed and direction."
          },
          {
            id: "q100",
            label:
              "Have indicators been provided in the wheelhouse for; Advance alarms as required in regulation 4-5. such as lubricating oil supply failure, cooling F.W, high temperature and over speed of main and auxiliary machinery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Indicators should be provided in the wheelhouse for Advance alarms. such as lubricating oil supply failure, cooling F.W, high temperature and over speed of main and auxiliary machinery."
          },
          {
            id: "q101",
            label:
              "Can the propulsion machinery be control locally in the event of failure of the remote-control system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The propulsion machinery should be able to be control locally in the event of failure of the remote-control system."
          },
          {
            id: "q102",
            label:
              "In the event of failure of the remote-control system will an alarm sound and a pre-set speed and direction of thrust be maintained until local control is in operation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"In the event of failure of the remote-control system, an alarm sound and a pre-set speed and direction of thrust should be maintained until local control is in operation."
          },
          {
            id: "q103",
            label:
              "Have arrangements been made to ensure automatic starting shall not exhaust the starting possibilities?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Arrangements should be made to ensure automatic starting shall not exhaust the starting possibilities."
          },
          {
            id: "q104",
            label:
              "Is there an alarm to indicate low starting air pressure and is it set at a level which will still permit the main engine starting operations?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an alarm to indicate low starting air pressure and is it set at a level which will still permit the main engine starting operations."
          },
          {
            id: "q105",
            label:
              "Is there means to manually override the automatic starting, operational and control systems in the event of failure of any part of the automatic and remote-control systems?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Regulation 8. Ref 3. Is there means to manually override the automatic starting, operational and control systems in the event of failure of any part of the automatic and remote-control systems? An exemption should be requested as it is not possible to modify the existing controls."
          },
        ],
      },
      {
        subtitle: "Regulation   9. Air pressure systems.",
        questions: [
          {
            id: "q106",
            label:
              "Have suitable pressure-relief arrangements been provided to prevent excess pressure in any part of the compressed air system and to wherever water jackets or casings of air compressors and coolers which might be subjected to dangerous excess pressure due to leakage into them from air pressure parts of the system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Suitable pressure-relief arrangements should be provided to prevent excess pressure in any part of the compressed air system and to wherever water jackets or casings of air compressors and coolers which might be subjected to dangerous excess pressure due to leakage into them from air pressure parts of the system."
          },
          {
            id: "q107",
            label:
              "Is there adequate protection against the effects of backfiring and internal explosion in the starting air pipes for the main propulsion internal combustion engine?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be adequate protection against the effects of backfiring and internal explosion in the starting air pipes for the main propulsion internal combustion engine."
          },
          {
            id: "q108",
            label:
              "Do all discharge pipes from the starting air compressor lead directly to the starting air receivers and are all starting pipes from the air receivers to the main and auxiliary engines entirely separate from the compressor discharge pipe system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All discharge pipes from the starting air compressor lead directly to the starting air receivers and are all starting pipes from the air receivers to the main and auxiliary engines should be entirely separate from the compressor discharge pipe system."
          },
          {
            id: "q109",
            label:
              "Have provision been made to reduce to a minimum the entry of oil into the air pressure system and is there a means of draining the system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Provision should be made to reduce to a minimum the entry of oil into the air pressure system and is there a means of draining the system."
          },
        ],
      },
      {
        subtitle: "Regulation   10. Arrangements of fuel oil.",
        questions: [
          {
            id: "q110",
            label:
              "Are fuel and oil tank breathers, fillers, sounding pipes and all associated pipe work in good working condition?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fuel and oil tank breathers, fillers, sounding pipes and all associated pipe work should be in good working condition."
          },
          {
            id: "q111",
            label:
              "Does each tank have a safe and efficient means of measuring the amount of fuel oil?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each tank should have a safe and efficient means of measuring the amount of fuel oil."
          },
          {
            id: "q112",
            label:
              "Have sound pipes been fitted with a suitable means of closure? All sounding pipes must comply with CH2 REG 11.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All sound pipes should be fitted with a suitable means of closure."
          },
          {
            id: "q113",
            label:
              "Have sight gauges been fitted with an automatic means of closure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fuel sight gauges should be fitted with automatic means of closure."
          },
          {
            id: "q114",
            label:
              "Has provision been made to prevent overpressure in any oil tank or any part of the system? All air pipes must comply with CH2 REG 10.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Provision should be made to prevent overpressure in any oil tank or any part of the system."
          },
          {
            id: "q115",
            label:
              "Are remote fuel shut off valves fitted, which are operable from outside the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All remote fuel shuts should be operable from outside the machinery space."
          },
          {
            id: "q116",
            label:
              "Are pumps used in fuel oil system separate from all other systems?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Pumps used in fuel oil system should be separate from all other systems."
          },
          {
            id: "q117",
            label:
              "Is all fuel oil protected from heated surfaces?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All fuel oil should be protected from heated surfaces."
          },
          {
            id: "q118",
            label:
              "Are all fuel lines, pipes, and fittings of the correct standards?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All fuel/oil line, pipes, hoses and fitting should be of the correct standards."
          },
          {
            id: "q119",
            label:
              "Are all fuel lines, pipes and fittings protected from heated surfaces?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All fuel lines, pipes and fittings should be protected from heated surfaces."
          },
          {
            id: "q120",
            label:
              "Can it be confirmed that fuel oil, lubricating oil or other flammable oils are NOT carried in the forepeak tanks?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Fuel oil, lubricating oil or other flammable oils should not be carried in the forepeak tanks."
          },
        ],
      },
      {
        subtitle: "Regulation   11. Bilge pump arrangements.",
        questions: [
          {
            id: "q121",
            label:
              "Is there a bilge system capable of effective draining all watertight compartments? Note: Provided the Administration is satisfied that the safety of the vessel is not impaired the bilge pumping arrangements may be dispensed with in particular compartments.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel is to be fitted with a bilge system that complies with Chapter IV, regulation 11. The bilge system must be capable of draining all watertight compartments to the satisfaction of the Administration."
          },
          {
            id: "q122",
            label:
              "Are there at least two independent power bilge pumps of sufficient capacity?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least two independent power bilge pumps of sufficient capacity."
          },
          {
            id: "q123",
            label:
              "Do the power bilge pumps comply with the capacity required by regulation 11?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The power bilge pumps should comply with the capacity required by regulation 11."
          },
          {
            id: "q124",
            label:
              "Does each bilge pump have direct bilge suction?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each bilge pump should have direct bilge suction."
          },
          {
            id: "q125",
            label:
              "Is the minimum diameter of each bilge suction =/> 50mm?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each bilge pipe should have a minimum diameter of 50mm."
          },
          {
            id: "q126",
            label:
              "Is the size of the bilge system arranged to ensure full rated capacity can be applied to each watertight compartment?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The bilge arrangement should ensure the full rated capacity can be applied to each watertight compartment."
          },
          {
            id: "q127",
            label:
              "Is there adequate drainage from the fish processing area?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be adequate drainage from the fish processing area."
          },
          {
            id: "q128",
            label:
              "On bilge systems connected to the sea, are non-return valves or cocks which cannot be opened simultaneously either to the bilges or sea fitted, to prevent back flooding?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"On bilge systems open to the sea, there should be non-return valves or cocks which cannot be opened simultaneously either to the bilges or sea fitted, to prevent back flooding?"
          },
          {
            id: "q129",
            label:
              "Are bilge pipes that pierce the collision bulkhead fitted with a valve at the bulkhead that can be operated from the working deck, indicating position of the valve?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where bilge pipes pierce the collision bulkheads, a valve should be fitted at the bulkhead, which can be operated from the working deck and should indicate the position of the valve (Open or Closed)."
          },
        ],
      },
      {
        subtitle: "Regulation  12. Protection against noise.",
        questions: [
          {
            id: "q130",
            label:
              "Have persons that enter the machinery space been issued with ear defenders?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All persons that enter the machinery space should be issued with ear defenders."
          },
        ],
      },
      {
        subtitle: "Regulation   13. Steering gear.",
        questions: [
          {
            id: "q131",
            label:
              "Is the vessel fitted with main and auxiliary steering, so that a single failure in one will not render the other one inoperative? (Emergency steering).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should be fitted with main and auxiliary steering, so that a single failure in one will not render the other one inoperative."
          },
          {
            id: "q132",
            label:
              "If two identical power units are fitted, can each unit be operated separately?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"When two identical power units are fitted, each unit should operate separately."
          },
          {
            id: "q133",
            label:
              "Is there a rudder indicator in the wheelhouse independent of steering gear control system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The rudder indicator in the wheelhouse should be independent of steering gear control system."
          },
          {
            id: "q134",
            label:
              "Is there a steering gear failure alarm in the wheelhouse?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a steering gear failure alarm in the wheelhouse."
          },
          {
            id: "q135",
            label:
              "Is there a steering gear running indicator in the wheelhouse?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a steering gear running indicator in the wheelhouse."
          },
          {
            id: "q136",
            label:
              "Is the structure of the steering gear of adequate strength and sufficient to steer the vessel at maximum service speed and will not be damage at maximum speed astern or manoeuvring during fishing operations?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The structure of the steering gear should be of adequate strength and sufficient to steer the vessel at maximum service speed and will not be damage at maximum speed astern or manoeuvring during fishing operations."
          },
          {
            id: "q137",
            label:
              "Can the rudder operate to 35° to port and starboard with the vessel running at maximum service speed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The rudder should operate to 35° to port and starboard with the vessel running at maximum service speed."
          },
          {
            id: "q138",
            label:
              "Can the rudder be operated from 35° one side to 30° the other side in under 28 second at maximum service speed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The rudder should operate from 35° one side to 30° the other side in under 28 second at maximum service speed."
          },
          {
            id: "q139",
            label:
              "Can the main steering be started either manually in the wheelhouse or automatically when the power is restored after power failure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main steering should be able to be started either manually in the wheelhouse or automatically when the power is restored after power failure."
          },
          {
            id: "q140",
            label:
              "Is the auxiliary means of actuating the rudder at navigable speeds of adequate strength, and can be brought into action quickly in an emergency?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The auxiliary means of actuating the rudder at navigable speeds should be of adequate strength and can be brought into action quickly in an emergency."
          },
          {
            id: "q141",
            label:
              "Is there clear and free access to the emergency steering?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be clear and free access to the emergency steering."
          },
          {
            id: "q142",
            label:
              "Can the auxiliary steering be operated from 15o one side to 15o the other side in under 60 second at half of the maximum service speed or 7knots whichever is greater?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The auxiliary steering should be able to operate from 15o one side to 15o the other side in under 60 second at half of the maximum service speed or 7knots whichever is greater."
          },
          {
            id: "q143",
            label:
              "On vessel over 75m LOA. Is the electric or electrohydraulic steering gear served by two circuits fed from the main switch board as widely separated as possible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
        ],
      },
      {
        subtitle: "Regulation  14. Engineers alarm",
        questions: [
          {
            id: "q144",
            label:
              "For vessels over 75m. Is there an engineer's alarm which can be operated from the engine control room or steering gear which is audible in the engineer's accommodation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
        ],
      },
      {
        subtitle: "Regulation   15. Refrigeration systems.",
        questions: [
          {
            id: "q145",
            label:
              "Has the refrigeration system been provided with an automatic safety control device to prevent a dangerous rise in temperature and pressure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration system should be provided with an automatic safety control device to prevent a dangerous rise in temperature and pressure."
          },
          {
            id: "q146",
            label:
              "Has the refrigeration system been provided with a drainage system, where refrigerant presents no danger to the vessel or to person on board?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration system should be provided with a drainage system, where refrigerant presents no danger to the vessel or to person on board."
          },
          {
            id: "q147",
            label:
              "Is the refrigeration space separated by gastight bulkheads?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration space should be separated by gastight bulkheads."
          },
          {
            id: "q148",
            label:
              "Is the refrigeration space fitted with leak detection?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration space should be with leak detection."
          },
          {
            id: "q149",
            label:
              "Is the refrigeration space fitted with independent ventilation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration space should be with independent ventilation."
          },
          {
            id: "q150",
            label:
              "Is the refrigeration space been fitted with a water spray system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration space should be fitted with a water spray system."
          },
          {
            id: "q151",
            label:
              "Is the refrigeration alarm connected to the wheelhouse or control station or an escape exits to prevent persons being trapped?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The refrigeration alarm should be connected to the wheelhouse or control station, or an escape exits to prevent persons being trapped."
          },
          {
            id: "q152",
            label:
              "Are two sets of breathing apparatus readily available with spare cylinders?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Two sets of breathing apparatus should be readily available with spare cylinders."
          },
          {
            id: "q153",
            label:
              "Are adequate notices displayed providing the safe operation and emergency procedure of the refrigeration machinery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Notices should be displayed providing the safe operation and emergency procedure of the refrigeration machinery."
          },
        ],
      },
      {
        subtitle: "Regulation   16. Main source of electrical power.",
        questions: [
          {
            id: "q154",
            label:
              "Has the vessel at least two main generator sets, which provide essential services for propulsion and safety?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should have at least two main generator sets, which provide essential services for propulsion and safety."
          },
          {
            id: "q155",
            label:
              "In the event of only one generator being operable will it provide the essential services?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"In the event of only one generator being operable it should provide the essential services."
          },
          {
            id: "q156",
            label:
              "Can the essential services be maintained regardless of revolution and direction of the main engine?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The essential services should be maintained regardless of revolution and direction of the main engine."
          },
          {
            id: "q157",
            label:
              "Is the emergency lighting so arranged so that fire to the main lighting system will not render the emergency lighting system inoperative?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency lighting should be arranged so that fire to the main lighting system will not render the emergency lighting system inoperative."
          },
          {
            id: "q158",
            label:
              "Is the main lighting so arranged so that fire to the emergency lighting system will not render the main lighting system inoperative?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The main lighting should be arranged so that fire to the emergency lighting system will not render the main lighting system inoperative."
          },
        ],
      },
      {
        subtitle: "Regulation  17. Emergency source of electrical power.",
        questions: [
          {
            id: "q159",
            label:
              "Are the batteries for the emergency source of electrical power stow outside of the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency batteries should be stored outside the machinery space."
          },
          {
            id: "q160",
            label:
              "Is the emergency source of electrical power arranged as to ensure it functioning in the event of fire or other causes of failure of the main electrical installations?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency source of electrical power should be arranged as to ensure it functions in the event of fire or other causes of failure of the main electrical installations?"
          },
          {
            id: "q161",
            label:
              "Does the emergency power source, power the emergency services for at least 3 hours? VHF radio installation, Internal communications, fire detection and signals which may be required in an emergency. Navigational lights and emergency lights.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency power source should power the VHF radio installation, internal communications, fire detection and signals which may be required in an emergency, navigational lights and emergency lights for 3 hours."
          },
          {
            id: "q162",
            label:
              "Where the emergency source of electrical power is a generator. Does the generator have an independent fuel supply and efficient starting arrangements",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency generator should have an independent fuel supply and efficient starting arrangements."
          },
          {
            id: "q163",
            label:
              "Where the emergency source of electrical power is an accumulator battery. Is the accumulator battery capable of carrying the emergency load without recharging whilst maintaining the voltage of the battery throughout the discharge period with a plus or minus 12% of its nominal voltage?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accumulator battery should be capable of carrying the emergency load without recharging whilst maintaining the voltage of the battery throughout the discharge period with a plus or minus 12% of its nominal voltage."
          },
          {
            id: "q164",
            label:
              "Where the emergency source of electrical power is an accumulator battery. In the event of a main power supply failure is the accumulator battery automatically connected to the emergency switch board. And should immediately supply the emergency service (2)(b) and (2)(c).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"In the event of a main power supply failure the accumulator battery should automatically connected to the emergency switch board. And should immediately supply the emergency service."
          },
          {
            id: "q165",
            label:
              "Where the emergency source of electrical power is an accumulator battery. Is there a manual connection of the accumulator battery to the emergency switchboard, in case of failure of the automatic connection system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a manual connection of the accumulator battery to the emergency switchboard, in case of failure of the automatic connection system."
          },
          {
            id: "q166",
            label:
              "Is the emergency switchboard located as near as practicable to the emergency source of power?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency switch board should be located as near as practicable to the emergency source of power."
          },
          {
            id: "q167",
            label:
              "Is the accumulator battery stored in a well vented space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accumulator battery should be stored in a well vented space."
          },
          {
            id: "q168",
            label:
              "Is the emergency switchboard installed in a separate space to the accumulator battery?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency switchboard should be installed in a separate space to the accumulator battery."
          },
          {
            id: "q169",
            label:
              "Is there an indicator on the main switchboard that indicates when the battery constituting the emergency source of power is being discharged?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an indicator on the main switchboard that indicates when the  emergency battery is being discharged."
          },
          {
            id: "q170",
            label:
              "Is the emergency switchboard in normal operation supplied from the main switchboard by an inter-connected feeder which is to be protected at the main switchboard against overload and short circuit?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency switchboard should be normal operation supplied from the main switchboard by an inter-connected feeder which is to be protected at the main switchboard against overload and short circuit."
          },
          {
            id: "q171",
            label:
              "When the system is arranged for feedback operation, is the inter-connector feeder protected at the emergency switchboard against short circuit?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The inter-connector feeder should be protected at the emergency switchboard against short circuit."
          },
          {
            id: "q172",
            label:
              "Is the emergency power source secured and fully functional at full power when the vessel is upright, rolling to 22.5° and pitching 10°?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency power source should be secured and fully functional at full power when the vessel is upright, rolling to 22.5° and pitching 10°."
          },
          {
            id: "q173",
            label:
              "Is the emergency source of electrical power and automatic starting systems constructed and arranged as to enable adequate testing to be carried by the crew while the vessel is in operational condition?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The emergency source of electrical power and automatic starting systems should be constructed and arranged as to enable adequate testing to be carried by the crew while the vessel is in operational condition."
          },
        ],
      },
      {
        subtitle: "Regulation  18. Precautions against shock, fire and other hazards.",
        questions: [
          {
            id: "q174",
            label:
              "Is all equipment earthed as required by the regulation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All equipment should be earth as required by the regulations."
          },
          {
            id: "q175",
            label:
              "Is there clear access around all switchboards?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be clear access around all switchboards."
          },
          {
            id: "q176",
            label:
              "Are the switchboards fully protected with guards and covers?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All switchboards should be fully protected with guards and covers."
          },
          {
            id: "q177",
            label:
              "Are non-conductive mats fitted around the switch boards?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Non-conductive mats should be fitted around the switch boards."
          },
          {
            id: "q178",
            label:
              "On vessel over 75m LOA. Can it be confirmed that a hull return system is NOT used for power, heating or lighting?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
          {
            id: "q179",
            label:
              "Where a distribution system for power, heating or lighting has been used with no connection to earth. Has a device been fitted capable of monitoring the insulation level to earth?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where a distribution system for power, heating or lighting has been used with no connection to earth. A device should be fitted capable of monitoring the insulation level to earth."
          },
          {
            id: "q180",
            label:
              "Where a distribution system is in accordance with 4a and a voltage exceeding 55V direct or 55V root mean square, between conductors, is used. Is there a device fitted capable of continuously monitoring the insulation level to earth and does it give an audible or visual indication of abnormally low insulation valves?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where a distribution system voltage exceeding 55V direct or 55V root mean square, between conductors, is used. There should be a device fitted capable of continuously monitoring the insulation level to earth and does give an audible or visual indication of abnormally low insulation valves."
          },
          {
            id: "q181",
            label:
              "Are all cables with metal sheaths and armour cables earthed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All cables with metal sheaths and armour cables should be earthed."
          },
          {
            id: "q182",
            label:
              "Are all electrical cable flame-retardant?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All electrical cable should be flame-retardant."
          },
          {
            id: "q183",
            label:
              "Are cables serving essential services or emergency power as far as practicable routed clear of galleys, machinery spaces and other high risk fire areas and areas of high moisture content?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All cables serving essential services or emergency power should be as far as practicable routed clear of galleys, machinery spaces and other high risk fire areas and areas of high moisture content."
          },
          {
            id: "q184",
            label:
              "Have precautions been taken to protect cables in high-risk areas?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Precautions should be taken to protect cables in high-risk areas."
          },
          {
            id: "q185",
            label:
              "Is the wiring well supported to avoid chaffing and other damage?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All wiring should be well supported to avoid chaffing and other damage."
          },
          {
            id: "q186",
            label:
              "Do all terminations and joints in all conductors maintain the original properties of the cable? (electrical, mechanical and fire).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All terminations and joints in all conductors should maintain the original properties of the cable."
          },
          {
            id: "q187",
            label:
              "Are all cables installed in refrigerated compartments suitable for low temperatures and high humidity?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All cable installed in refrigerated compartments should be suitable for low temperatures and high humidity."
          },
          {
            id: "q188",
            label:
              "Are all circuits protected against short circuit and overload?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All circuits should be protected against short circuit and overload."
          },
          {
            id: "q189",
            label:
              "Is the rating of the overload protection permanently indicated at the location of the protective device?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The rating of the overload protection should be permanently indicated at the location of the protective device."
          },
           {
            id: "q190",
            label:
              "Are light fittings so arranged to prevent them becoming excessively hot?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Light fittings should be arranged to prevent them becoming excessively hot."
          },
          {
            id: "q191",
            label:
              "Have isolating switches been provided outside the space for lighting and power circuits which terminate in a space of high risk of fire or explosion?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Isolating switches should be outside the space for lighting and power circuits which terminate in a space of high risk of fire or explosion."
          },
          {
            id: "q192",
            label:
              "Are the accumulator batteries housed and ventilated correctly? ",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accumulator batteries should be fitted in battery boxes, secured in position and vented to atmosphere."
          },
          {
            id: "q193",
            label:
              "Are the accumulator batteries stored separately for any other source in ignition?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accumulator batteries should be stored separately for any other source in ignition."
          },
          {
            id: "q194",
            label:
              "Are the accumulator batteries stored in a hermetically sealed container in the accommodation space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"When the accumulator batteries are stored in accommodation space, they should be in a hermetically sealed container."
          },
          {
            id: "q195",
            label:
              "Has electrical equipment NOT been stored in the compartment for the accumulator batteries?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Electrical equipment should not be stored in the accumulator battery compartment."
          },
          {
            id: "q196",
            label:
              "Has a lightning conductor been fitted to the correct standards?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"A lightning conductor should be fitted to the correct standards."
          },
        ],
      },
      {
        subtitle: "Regulation  19. Fire safety. Periodically unattended machinery spaces.",
        questions: [
          {
            id: "q197",
            label:
              "Where there are high pressure fuel pipes, is there a system in place to collect any leakage in a drain tank with a high-level alarm?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where there are high pressure fuel pipes, there should be a system in place to collect any leakage in a drain tank with a high-level alarm."
          },
          {
            id: "q198",
            label:
              "Where daily service tank is filled automatically or by remote control, is there a means to prevent overflow?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where daily service tank is filled automatically or by remote control, there should be a means to prevent overflow."
          },
          {
            id: "q199",
            label:
              "Where daily service tanks and settling tanks are fitted with heating, is there a high temperature alarm?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where daily service tanks and settling tanks are fitted with heating, there should be a high temperature alarm."
          },
          {
            id: "q200",
            label:
              "Is the machinery space fitted with an approved fire detection system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should be fitted with an approved fire detection system."
          },
          {
            id: "q201",
            label:
              "Does the fire detection system provide an audible and visual alarm in the wheelhouse and sufficient appropriate spaces?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire detection system should provide an audible and visual alarm in the wheelhouse and sufficient appropriate spaces."
          },
          {
            id: "q202",
            label:
              "Is the fire detection system powered by the emergency power supply?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire detection system should be powered by the emergency power supply."
          },
          {
            id: "q203",
            label:
              "Where internal combustion engines are over 2500kw, are crankcase oil mist detector or engine bearing temperature detectors fitted?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Where internal combustion engines are over 2500kw, crankcase oil mist detector or engine bearing temperature detectors should be fitted."
          },
          {
            id: "q204",
            label:
              "Is fixed fire-extinguishing system provided to the satisfaction of the Administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fixed fire-extinguishing system should be to the satisfaction of the Administration."
          },
          {
            id: "q205",
            label:
              "In vessel over 75m LOA, is there a fire main system with remote starting in the wheelhouse or a permanently pressurization of the fire main?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
          {
            id: "q206",
            label:
              "Is the fire integrity of the machinery space to the satisfaction of the Administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire integrity of the machinery space should be to the satisfaction of the Administration."
          },
          {
            id: "q207",
            label:
              "Is the location of the of the fire-extinguishing system controls to the satisfaction of the Administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The location of the of the fire-extinguishing system controls should be to the satisfaction of the Administration."
          },
          {
            id: "q208",
            label:
              "Are the shut-down arrangements of ventilators, fuel pumps, etc to the satisfaction of the administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The shut-down arrangements of ventilators, fuel pumps, etc should be to the satisfaction of the administration."
          },
          {
            id: "q209",
            label:
              "When the system is arranged for feedback operation, is the inter-connector feeder protected at the emergency switchboard against short circuit?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire extinguishers, firefighting equipment and breathing apparatus should be to the satisfaction of the Administration."
          },
        ],
      },
      {
        subtitle: "Regulation  20. Protection against flooding.",
        questions: [
          {
            id: "q210",
            label:
              "Is the machinery space fitted with a bilge alarm which give an audible and visual alarm in the wheelhouse?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should be fitted with a bilge alarm which give an audible and visual alarm in the wheelhouse."
          },
          {
            id: "q211",
            label:
              "Are the valves for seawater inlets and dischargers below the waterline and bilge system valves readily accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The valves for seawater inlets and dischargers below the waterline and bilge system valves should be readily accessible."
          },
        ],
      },
      {
        subtitle: "Regulation  21. Communications.",
        questions: [
          {
            id: "q212",
            label:
              "For vessel over 75m LOA, is there at least two means of verbal communication between the wheelhouse and the engineer’s accommodation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
        ],
      },
      {
        subtitle: "Regulation  22. Alarm system.",
        questions: [
          {
            id: "q213",
            label:
              "Is there an alarm system which indicates any fault requiring attention?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an alarm system which indicates any fault requiring attention."
          },
          {
            id: "q214",
            label:
              "Does the alarm system sound an audible alarm and indicate the function?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The alarm system should sound an audible alarm and indicate the function."
          },
          {
            id: "q215",
            label:
              "Does the alarm repeat in the engineer's accommodation and/or the engineer's public room?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The alarm should repeat in the engineer's accommodation and/or the engineer's public room."
          },
          {
            id: "q216",
            label:
              "Does the engineer's alarm repeat in the wheelhouse if no action is taken within a given time?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engineer's alarm should repeat in the wheelhouse if no action is taken within a given time."
          },
          {
            id: "q217",
            label:
              "Does the engineer's alarm repeat in the wheelhouse where action is required by a responsible person?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engineer's alarm should repeat in the wheelhouse where action is required by a responsible person."
          },
          {
            id: "q218",
            label:
              "Does the alarm system have an automatic change over to emergency power when required?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The alarm system should have an automatic change over to emergency power when required."
          },
          {
            id: "q219",
            label:
              "Does the alarm system indicate more than one alarm if multiple alarms are activated?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The alarm system should indicate more than one alarm if multiple alarms are activated."
          },
        ],
      },
      {
        subtitle: "Regulation  24. Safety System",
        questions: [
          {
            id: "q220",
            label:
              "Does the vessel have a safety system which automatically shuts down machinery in immediate danger and give an audible alarm, excluding the main propulsive engine, except in which case it could lead to serious damage, breakdown, or explosion?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should have a safety system which automatically shuts down machinery in immediate danger and gives an audible alarm, excluding the main propulsive engine, except in which case it could lead to serious damage, breakdown, or explosion."
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 5. Fire protection, detection, extinction, and fighting.",
    subsections: [
      {
        subtitle: "Regulation  1. General.",
        questions: [
          {
            id: "q221",
            label:
              "Has one of the methods IF, IIF or IIIF been used to protect the accommodation and service spaces?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"One of the methods IF, IIF or IIIF should be used to protect the accommodation and service spaces."
          },
            {
            id: "q222",
            label:
              "Have non-combustible materials been used on the boundary bulkhead to the machinery space, wheelhouse, corridors, stairs, and doors? B-15 Class.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Non-combustible materials should be used on the boundary bulkhead to the machinery space, wheelhouse, corridors, stairs, and doors? B-15 Class"
          },
        ],
      },
      {
        subtitle: "Regulation  3. Structure.",
        questions: [
          {
            id: "q223",
            label:
              "Are the hull, superstructure, structural bulkheads, deck, and deckhouse constructed of steel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The hull, superstructure, structural bulkheads, deck, and deckhouse should be constructed of steel."
          },
          {
            id: "q224",
            label:
              "Is the engine room casing constructed of steel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engine room casing should be constructed of steel."
          },
          {
            id: "q225",
            label:
              "Can openings the machinery space casing be closed off to prevent the spread of fire?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Openings the machinery space casing should be able to be closed off to prevent the spread of fire."
          },
        ],
      },
      {
        subtitle: "Regulation  4. Bulkhead within accommodation and service spaces",
        questions: [
          {
            id: "q226",
            label:
              "Are all accommodation and service space bulkheads “B” class?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All accommodation and service space bulkheads should be “B” class."
          },
          {
            id: "q227",
            label:
              "Do all accommodation and service bulkheads extend from deck to deck.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All accommodation and service bulkheads should extend from deck to deck."
          },
          {
            id: "q228",
            label:
              "Do the bulkheads comply with the method employed, IF, IIF and IIIF?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All bulkheads should comply with the method employed, IF, IIF and IIIF."
          },
        ],
      },
      {
        subtitle: "Regulation  5. Protection of stairways, etc.",
        questions: [
          {
            id: "q228",
            label:
              "Are stairways that penetrate one level protected by “B-O” class division and a self-closing door?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All stairways that penetrate one level should be protected by “B-O” class division and a self-closing door."
          },
          {
            id: "q229",
            label:
              "Are all stairways of a steel frame construction?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All stairways should be of a steel frame construction."
          },
        ],
      },
      {
        subtitle: "Regulation  6. Doors in fire resistant divisions.",
        questions: [
          {
            id: "q230",
            label:
              "Are doors and frames in “A” class divisions constructed of steel? ",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors and frames in “A” class divisions should be constructed of steel."
          },
          {
            id: "q231",
            label:
              "Are doors in “B” class division non-combustible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors in “B” class division should be non-combustible."
          },
          {
            id: "q232",
            label:
              "Are doors to the machinery space “A” class and self-closing?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The doors to the machinery should be self-closing."
          },
          {
            id: "q233",
            label:
              "Are self-closing doors not fitted with hold backs?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Self-closing doors should not be fitted with hold backs."
          },
          {
            id: "q234",
            label:
              "Where doors in corridor bulkhead are fitted with ventilation, the opening in the lower half of the door?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors in corridor bulkhead should be fitted with ventilation; the opening should be in the lower half of the door."
          },
          {
            id: "q235",
            label:
              "Where doors in corridor bulkheads are fitted with ventilation, are the opening in or under the door less than 0.05m2?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors in corridor bulkheads fitted with ventilation, the opening should be less than 0.05m2."
          },
          {
            id: "q236",
            label:
              "Where such opening have been cut in to a door, has the opening been fitted with a non-combustible grill.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors in corridor bulkheads fitted with ventilation should be fitted with a non-combustible grill."
          },
          {
            id: "q237",
            label:
              "Have doors to stairway enclosure been fitted without ventilation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Doors to stairway enclosure should be fitted without ventilation."
          },
        ],
      },
      {
        subtitle: "Regulation  7. Fire integrity of bulkheads and decks.",
        questions: [
          {
            id: "q238",
            label:
              "Does the fire integrity of the bulkheads and decks comply with table 1 and table 2 of the regulations?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire integrity of the bulkheads and decks should comply with table 1 and table 2 of the regulations."
          },
          {
            id: "q239",
            label:
              "Are skylights fitted in the machinery space capable of being closed from the outside?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Skylights fitted in the machinery space should be capable of being closed from the outside."
          },
          {
            id: "q240",
            label:
              "Are skylights fitted in the machinery space made of glass fitted with permanently attached steel blanks?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Skylights fitted in the machinery space made of glass should be fitted with permanently attached steel blanks."
          },
          {
            id: "q241",
            label:
              "Are skylights in the machinery space fitted with wire reinforced glass?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Skylights fitted in the machinery space should fitted with wire reinforced glass."
          },
          {
            id: "q242",
            label:
              "Where “A” class integrity is to be maintained in boundaries which are made of steel. Have windows or portlights NOT been fitted?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Windows and portlights should not be fitted in “A” class boundaries made of steel."
          },
        ],
      },
      {
        subtitle: "Regulation  8. Details of construction.",
        questions: [
          {
            id: "q243",
            label:
              "Method IF. Are all linings, draught stops, ceiling and grounds in the accommodation, service spaces and control stations non-combustible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Method IF. All linings, draught stops, ceiling and grounds in the accommodation, service spaces and control stations should be non-combustible."
          },
          {
            id: "q244",
            label:
              "Methods IIF and IIIF. In addition to the above, corridors and stairways serving accommodation, service spaces and control station non-combustible.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Methods IIF and IIIF. In addition to the above, corridors and stairways serving accommodation, service spaces and control station should be non-combustible."
          },
          {
            id: "q245",
            label:
              "Is the insulation in the accommodation, service spaces and control stations non-combustible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The insulation in the accommodation, service spaces and control stations should be non-combustible."
          },
          {
            id: "q246",
            label:
              "Are spaces enclosed by ceilings and lining divided by close fitting draught stops space not more than 14m apart?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Spaces enclosed by ceilings and lining should be divided by close fitting draught stops space not more than 14m apart."
          },
          {
            id: "q247",
            label:
              "Are space enclosed by ceilings and lining, including space behind stairways, etc, closed at each deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Space enclosed by ceilings and lining, including space behind stairways, etc, should be closed at each deck."
          },
        ],
      },
      {
        subtitle: "Regulation  9. Ventilation system.",
        questions: [
          {
            id: "q248",
            label:
              "Are ventilation ducts made of non-combustible material?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Ventilation ducts should be made of non-combustible material."
          },
          {
            id: "q249",
            label:
              "Do short ducts less than 2m in length and with a cross-sectional area less than 0.02m² comply with the standards? i) these ducts shall be of a material which, to the satisfaction of the Administration, has a low fire risk; (ii) they may only be used at the end of the ventilation device; and (iii) they shall not be situated less than 600 mm, measured along the duct, from an opening in an 'A' or 'B' class division including continuous 'B' class ceilings",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
          {
            id: "q250",
            label:
              "Are all ventilation ducts with a cross-sectional area greater than 0.02m² that pass through “A” class bulkhead or decks lined with a steel sleeve?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All ventilation ducts with a cross-sectional area greater than 0.02m² that pass through “A” class bulkhead or decks should be lined with a steel sleeve."
          },
          {
            id: "q251",
            label:
              "Are ventilation ducts for machinery spaces and galleys made of steel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Ventilation ducts for machinery spaces and galleys should be made of steel."
          },
          {
            id: "q252",
            label:
              "Do the ventilation duct for the machinery space and galley NOT passing through accommodation spaces, service spaces or control station stations?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Ventilation ducts for the machinery space and galley should not passing through accommodation spaces, service spaces or control station stations."
          },
          {
            id: "q253",
            label:
              "Where ventilation ducts with an area in excess of 0.02m² pass through “B” class bulkheads, are the opening lined with steel and is the sleeve at least 900mm long?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Ventilation ducts with an area in excess of 0.02m² that pass through “B” class bulkheads, the opening should be lined with steel and is the sleeve at least 900mm long."
          },
          {
            id: "q254",
            label:
              "Is the ventilation of control stations outside of the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The ventilation control stations should be outside of the machinery space and galley."
          },
          {
            id: "q255",
            label:
              "Is the galley extractor hood fitted with a filter?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The galley extractor hood should be fitted with a filter."
          },
          {
            id: "q256",
            label:
              "Is the galley ventilation fitted with a grease trap?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The galley extractor vent should be fitted with a grease trap."
          },
          {
            id: "q257",
            label:
              "Is the galley ventilation fitted with a fire damper (closure)?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The galley ventilation should be fitted with a fire damper (closure)."
          },
          {
            id: "q258",
            label:
              "Can all inlets and outlets of the ventilation systems be closed from outside the space being ventilated?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All inlets and outlets of the ventilation systems should be able to be closed from outside the space being ventilated."
          },
          {
            id: "q259",
            label:
              "Is there means of shutting down power ventilators from outside the space being served?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be means of shutting down power ventilators from outside the space being served."
          },
          {
            id: "q260",
            label:
              "Can the power ventilator for the machinery space be shut down separately?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The power ventilator for the machinery space should be shut down separately."
          },
          {
            id: "q261",
            label:
              "Are the ventilators for the machinery space independent from all other ventilators?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The ventilators for the machinery space should be independent from all other ventilators."
          },
          {
            id: "q262",
            label:
              "Are storerooms that contain flammable products ventilated with high- and low-level vents with spark arresters?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Storerooms that contain flammable products should be ventilated with high- and low-level vents fitted with spark arresters."
          },
        ],
      },
      {
        subtitle: "Regulation  10. Heating installations.",
        questions: [
          {
            id: "q263",
            label:
              "Are electric radiators fixed in position and so constructed to reduce the risk of fire?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Electric radiators should not be fitted in a position of risk of fire."
          },
          {
            id: "q264",
            label:
              "Are heating stoves and other similar appliances protected and insulated against fire beneath and around the appliance and in way of their uptakes?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Heating stoves and other similar appliances should be protected and insulated against fire."
          },
          {
            id: "q265",
            label:
              "Can it be confirmed that open fires are not used for heating?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Open fires should not be used for heating."
          },
          {
            id: "q266",
            label:
              "Are heating stoves and other similar appliances securely fitted.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Heating stoves and other similar appliances should be securely fitted."
          },
          {
            id: "q267",
            label:
              "Can it be confirmed that gas appliances are not used onboard the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Gas appliances should not be used onboard the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation  11. Miscellaneous items.",
        questions: [
          {
            id: "q268",
            label:
              "Do the lining to the accommodation have low flame-spread characteristics?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The lining to the accommodation should have low flame-spread characteristics."
          },
          {
            id: "q269",
            label:
              "Are the paints, varnishes and other finishes used on exposed interior surfaces NOT capable of producing excessive quantities of smoke or toxic gases or vapours?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The paints, varnishes and other finishes used on exposed interior surfaces should not be capable of producing excessive quantities of smoke or toxic gases or vapours."
          },
          {
            id: "q270",
            label:
              "Are the primary deck coverings in accommodation, service spaces and control stations an approved material which will not readily ignite or give rise to toxic or explosive hazards at elevated temperatures?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The primary deck coverings in accommodation, service spaces and control stations should be an approved material which will not readily ignite or give rise to toxic or explosive hazards at elevated temperatures."
          },
          {
            id: "q271",
            label:
              "Is the fire integrity of “A” and “B” class division maintained. Where the division is penetrated by cables, pipes, trunks, ducts, etc?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire integrity of “A” and “B” class division should be maintained. Where the division is penetrated by cables, pipes, trunks, ducts, etc."
          },
          {
            id: "q272",
            label:
              "Are pipes that penetrate “A” and “B” class divisions of approved material?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Pipes that penetrate “A” and “B” class divisions should be of an approved material."
          },
          {
            id: "q273",
            label:
              "Are all waste bins other than used for processing fish, constructed of non-combustible materials with no opening on the sides or bottom?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All waste bins should be constructed of non-combustible materials."
          },
          {
            id: "q274",
            label:
              "Are the fuel transfer pumps operable from outside the machinery space, so that they can be shut down in the event of a fire?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Fuel transfer pumps should be operable from outside the machinery space."
          },
          {
            id: "q275",
            label:
              "Are drip trays fitted to all components to prevent oil leaking to the bilge?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Drip trays should be fitted to all components to prevent oil leaking to the bilge."
          },
        ],
      },
      {
        subtitle: "Regulation  12. Storage of gas cylinder and dangerous materials.",
        questions: [
          {
            id: "q276",
            label:
              "Are gas cylinders clearly marked by means of prescribed identifying colour, name and chemical formular?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The gas cylinders should be clearly marked by means of prescribed identifying colour, name and chemical formular."
          },
          {
            id: "q277",
            label:
              "Are the gas cylinders properly secured?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The gas cylinders should be properly secured."
          },
          {
            id: "q278",
            label:
              "Are the gas cylinder store on the open deck with their valves, etc protected from damage?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The gas cylinder store on the open deck should have the valves protected from damage."
          },
          {
            id: "q279",
            label:
              "Are the gas cylinders protected from direct rays of the sun?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The gas cylinders should be protected from direct rays of the sun."
          },
          {
            id: "q280",
            label:
              "Are highly flammable liquids stored with direct access to the open deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Highly flammable liquids should be stored with direct access to the open deck."
          },
          {
            id: "q281",
            label:
              "Is the flammable store protected against electrical spark?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The flammable store should be protected against electrical spark."
          },
          {
            id: "q282",
            label:
              "Is the flammable store signed “NO SMOKING” and “NO NAKED LIGHT”?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The flammable store should be signed “NO SMOKING” and “NO NAKED LIGHT”."
          },
          {
            id: "q283",
            label:
              "Is separate storage provided for each type of compressed gas?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Separate storage should be provided for each type of compressed gas."
          },
        ],
      },
      {
        subtitle: "Regulation  13. Means of escape.",
        questions: [
          {
            id: "q284",
            label:
              "Do all levels of the accommodation have at least two means of escape?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All levels of the accommodation should have at least two means of escape."
          },
          {
            id: "q285",
            label:
              "Are there two means of escape from below the weather deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be two means of escape from below the weather deck."
          },
          {
            id: "q286",
            label:
              "Is the maximum length of a corridor which is the only escape route < 7m in length?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The maximum length of a corridor which is the only escape route should be < 7m in length."
          },
          {
            id: "q287",
            label:
              "Does the machinery space have two means of escape?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should have two means of escape."
          },
          {
            id: "q288",
            label:
              "Does the machinery space have one means of escape with a fire shelter to outside space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should have one means of escape with a fire shelter to outside space."
          },
        ],
      },
      {
        subtitle: "Regulation  14. Automatic sprinkler and fire alarm and fire detection system (Method IIF).",
        questions: [
          {
            id: "q289",
            label:
              "Has an IIF system been fitted?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
          },
          {
            id: "q290",
            label:
              "If method IIF is used. Is there an automatic sprinkler and fire alarm system of an approved type to protect accommodation spaces and services spaces except spaces which afford no substantial fire risk?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an automatic sprinkler and fire alarm system of an approved type to protect accommodation spaces and services spaces, except spaces which afford no substantial fire risk."
          },
          {
            id: "q291",
            label:
              "Is the system capable of immediate operation at all times with no action by the crew to set it in operation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The system should always be capable of immediate operation with no action by the crew to set it in operation."
          },
          {
            id: "q292",
            label:
              "Is the automatic sprinkler system a wet pipe type?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The automatic sprinkler system should be a wet pipe type."
          },
          {
            id: "q293",
            label:
              "Is the automatic sprinkler system kept charged at the necessary pressure and have the provision for a continuous supply of water?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The automatic sprinkler system should be kept charged at the necessary pressure and have the provision for a continuous supply of water."
          },
          {
            id: "q294",
            label:
              "Does the section of sprinklers which has been activated give a visible and audible alarm signal automatically at the indicating units?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The section of sprinklers which has been activated should give a visible and audible alarm signal automatically at the indicating units."
          },
          {
            id: "q295",
            label:
              "Does the indicating unit state which section fire has occurred?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The indicating unit should state which section the fire has occurred."
          },
          {
            id: "q296",
            label:
              "Is the indicator until in the wheelhouse with second indicator visible and audible alarms in a crew space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The indicator until should be in the wheelhouse with second indicator visible and audible alarms in a crew space."
          },
          {
            id: "q297",
            label:
              "Are the maximum number of sprinklers in a one section less than 200?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The maximum number of sprinklers in a one section should be less than 200."
          },
          {
            id: "q298",
            label:
              "Can each section of sprinklers by isolated by one stop valve which is readily accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each section of sprinklers should be able to be isolated by a stop valve which is readily accessible."
          },
          {
            id: "q299",
            label:
              "Is there a pressure gauge for each section at the stop valve?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a pressure gauge for each section at the stop valve."
          },
          {
            id: "q300",
            label:
              "Are the sprinklers resistant to corrosion and have an operating temperature of 68oC to 79°C?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sprinklers should be resistant to corrosion and have an operating temperature of 68°C to 79°C."
          },
          {
            id: "q301",
            label:
              "Is there a plan at each indicator unit showing the different sprinkler section?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a plan at each indicator unit showing the different sprinkler section."
          },
          {
            id: "q302",
            label:
              "Are the sprinklers placed overhead and positioned in a suitable pattern to maintain an average application rate of not less than 5L/m²/min?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sprinklers should be placed overhead and positioned in a suitable pattern to maintain an average application rate of not less than 5L/m²/min."
          },
          {
            id: "q303",
            label:
              "Has a pressure tank been provided with at least twice that of the charge of water as required?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"A pressure tank should be provided with at least twice that of the charge of water."
          },
          {
            id: "q304",
            label:
              "Has seawater been prevented from entering the tank?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Seawater should be prevented from entering the tank."
          },
          {
            id: "q305",
            label:
              "Has an independent power pump been provided for the purpose of continuing the discharge of water from the sprinklers automatically?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"An independent power pump should be provided for the purpose of continuing the discharge of water from the sprinklers automatically."
          },
          {
            id: "q306",
            label:
              "Does the pipework and pump maintain the necessary pressure for the highest sprinkle?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The pipework and pump should maintain the necessary pressure for the highest sprinkle."
          },
          {
            id: "q307",
            label:
              "Is the sprinkler pump and tank position in a space which is not protected by the sprinkler system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sprinkler pump and tank should be position in a space which is not protected by the sprinkler system."
          },
          {
            id: "q308",
            label:
              "Are there two sources of power supply to the pump and automatic fire alarm and fire detection system?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be two sources of power supply to the pump and automatic fire alarm and fire detection system."
          },
          {
            id: "q309",
            label:
              "Does the feeder pipework avoid high risk areas, machinery spaces, galleys, etc?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The feeder pipework should avoid high risk areas, machinery spaces, galleys, etc."
          },
          {
            id: "q310",
            label:
              "Has the sprinkler system connected to the vessel fire main with a lockable screw down non-return valve?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The sprinkler system should be connected to the vessel fire main with a lockable screw down non-return valve."
          },
          {
            id: "q311",
            label:
              "Is there a test valve at each sprinkler section for testing the automatic alarms?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a test valve at each sprinkler section for testing the automatic alarms."
          },
          {
            id: "q312",
            label:
              "Is there a means of testing the automatic operation of the pump?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a means of testing the automatic operation of the pump."
          },
          {
            id: "q313",
            label:
              "On the indicator units, can the alarms be tested?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The alarms on the indicator units should be able to be tested."
          },
          {
            id: "q314",
            label:
              "Are spare sprinkler heads provided for each sprinkler section?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Spare sprinkler heads should be provided for each sprinkler section."
          },
        ],
      },
      {
        subtitle: "Regulation  15. Method IIIF.",
        questions: [
          {
            id: "q315",
            label:
              "If method IIIF is used, does the installation comply with the regulation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The installation should comply with the regulation."
          },
          {
            id: "q316",
            label:
              "Is an approved automatic fire alarm and detection system installed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"An approved automatic fire alarm and detection system should be installed."
          },
          {
            id: "q317",
            label:
              "Is the system capable of immediate operation at all times with no action from the crew?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The system should be capable of immediate operation at all times with no action from the crew."
          },
          {
            id: "q318",
            label:
              "Does the system give visual and audible alarm in the wheelhouse?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The system should give visual and audible alarm in the wheelhouse."
          },
          {
            id: "q319",
            label:
              "Are detectors installed in each space as required?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Detectors should be installed in each space as required."
          },
          {
            id: "q320",
            label:
              "Is the system connected to the emergency power in the event of power failure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The system should be connected to the emergency power in the event of power failure."
          },
          {
            id: "q321",
            label:
              "Does the system indicate which area has been activated?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The system should indicate which area has been activated."
          },
          {
            id: "q322",
            label:
              "Are spare detectors on board the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Spare detectors should be on board the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation  16. Fixed Fire-extinguishing arrangements in cargo spaces of high fire risk.",
        questions: [
          {
            id: "q323",
            label:
              "Are cargo spaces of high risk of fire, protected by a fixed gas fire extinguishing system or a fire-extinguishing system which gives equivalent protection?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"None"
          },
        ],
      },
      {
        subtitle: "Regulation  17. Fire Pumps.",
        questions: [
          {
            id: "q324",
            label:
              "Are there at least two fire pumps?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be two fire pumps."
          },
          {
            id: "q325",
            label:
              "Are the two fire pumps in separate compartments?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The portable fire pumps should be stored in separate compartments."
          },
          {
            id: "q326",
            label:
              "Do the fire pumps provided the required total capacity (Q)?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire pumps should provide the required total capacity (Q)."
          },
          {
            id: "q327",
            label:
              "Does each fire pump have a minimum capacity 40% Q?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each fire pump should have a minimum capacity 40% Q."
          },
          {
            id: "q328",
            label:
              "Are the fire pumps independently driven?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire pumps should be independently driven."
          },
          {
            id: "q329",
            label:
              "Are relief valves fitted in the fire main to prevent excessive pressure?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Relief valves should be fitted in the fire main to prevent excessive pressure."
          },
        ],
      },
      {
        subtitle: "Regulation  18. Fire mains.",
        questions: [
          {
            id: "q330",
            label:
              "Is there a fire main fitted, which can reach all areas of the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"A fire main should be fitted, which can reach all areas of the vessel."
          },
          {
            id: "q331",
            label:
              "Is the fire main made of steel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire main should be made of steel."
          },
          {
            id: "q332",
            label:
              "With two fire pumps simultaneously delivering through nozzles at the specified quantity of water, will the minimum pressure of 0.25N/mm² be maintained?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Two fire pumps simultaneously delivering through nozzles at the specified quantity of water, the minimum pressure of 0.25N/mm² should be maintained. The details of the fire pumps should be approved by the administrator. Proof of approval should be supplied."
          },
        ],
      },
      {
        subtitle: "Regulation  19. Fire hydrants, fire hoses and nozzles.",
        questions: [
          {
            id: "q333",
            label:
              "Does the number of fire hoses equal the number of fire hydrants plus one?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The number of fire hoses should equal the number of fire hydrants plus one."
          },
          {
            id: "q334",
            label:
              "Is there at least one spare hose onboard the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one spare hose onboard the vessel."
          },
          {
            id: "q335",
            label:
              "Are the fire hoses of approved material?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire hoses of approved."
          },
          {
            id: "q336",
            label:
              "Is the maximum length of the fire hoses 20m?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The maximum length of the fire hoses should be 20m."
          },
          {
            id: "q337",
            label:
              "Does every fire hose have a nozzle?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Every fire hose should have a nozzle."
          },
          {
            id: "q338",
            label:
              "Are the fire hydrants position so that a single length of hose may reach any part of the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire hydrants should be positioned so that a single length of hose may reach any part of the vessel."
          },
          {
            id: "q339",
            label:
              "Is there a fire hydrant at the entrance of the accommodation?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should a fire hydrant at the entrance of the accommodation."
          },
          {
            id: "q340",
            label:
              "Is there a fire hydrant at the entrance to the machinery space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a fire hydrant at the entrance to the machinery space."
          },
          {
            id: "q341",
            label:
              "Is each nozzle dual purpose?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each nozzle should be dual purpose."
          },
          {
            id: "q342",
            label:
              "Is the fire hydrant coupling clean, operational, and easy to use?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire hydrant coupling should be clean, operational, and easy to use."
          },
          {
            id: "q343",
            label:
              "Has each fire hydrant been fitted with a valve?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each fire hydrant should be fitted with a valve."
          },
        ],
      },
      {
        subtitle: "Regulation  20. Fire extinguishers.",
        questions: [
          {
            id: "q344",
            label:
              "Are the portable fire extinguishers not more than 13.5L and not less than 9L?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The portable fire extinguishers should be not more than 13.5L and not less than 9L."
          },
          {
            id: "q345",
            label:
              "Are spare fire extinguishers provided to the satisfaction of the Administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Spare fire extinguishers should be provided to the satisfaction of the Administration."
          },
          {
            id: "q346",
            label:
              "Have the fire extinguishers been periodically serviced?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire extinguishers should be periodically serviced."
          },
          {
            id: "q347",
            label:
              "Are fire extinguisher intending for a space stowed at the entrance to the space?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Fire extinguisher intending for a space should be stowed at the entrance to the space."
          },
        ],
      },
      {
        subtitle: "Regulation  21. Portable fire extinguishers in control stations, accommodation, and service spaces.",
        questions: [
          {
            id: "q348",
            label:
              "Are at least five approved portable fire extinguishers provided in control stations, accommodation, and service spaces?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"At least five approved portable fire extinguishers should be provided in control stations, accommodation, and service spaces."
          },
          {
            id: "q349",
            label:
              "Are spare fire extinguishers provided to the satisfaction of the Administration?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Spare fire extinguishers should be provided to the satisfaction of the Administration"
          },
        ],
      },
      {
        subtitle: "Regulation  22. Fire extinguishing appliances in machinery spaces",
        questions: [
          {
            id: "q350",
            label:
              "Is the machinery space fitted with one of the following fixed fire extinguishing systems?",
            type: "choice",
            options: ["A pressure water-spraying installation", "A fire-smothering gas installation", "A fire-extinguishing installation using vapour from a low toxicity vaporizing liquids", "A fire-extinguishing installation using high expansion foam", "No"],
            deficiency:"The machinery space should be fitted with one of the following fixed fire extinguishing systems. A pressure water-spraying installation. A fire-smothering gas installation. A fire-extinguishing installation using vapour from a low toxicity vaporizing liquids or A fire-extinguishing installation using high expansion foam."
          },
          {
            id: "q351",
            label:
              "Is there at least one approved foam type extinguisher of at least 135 / capacity or equivalent with hoses on reels suitable of reaching any part of the machinery space.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one approved foam type extinguisher of at least 135 / capacity or equivalent with hoses on reels suitable of reaching any part of the machinery space."
          },
          {
            id: "q352",
            label:
              "In each machinery space, is there a bucket of sand, sawdust impregnated with soda or other approved dry material or an approved portable fire extinguisher?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space should have a bucket of sand, sawdust impregnated with soda or other approved dry material or an approved portable fire extinguisher."
          },
          {
            id: "q353",
            label:
              "Is there at least one portable air-foam fire extinguisher 45L in the machinery space.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one portable air-foam fire extinguisher 45L in the machinery space."
          },
          {
            id: "q354",
            label:
              "Are there a minimum of two additional portable foam extinguishers in the machinery space.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a minimum of two additional portable foam extinguishers in the machinery space."
          },
          {
            id: "q355",
            label:
              "In the machinery space at a low level adjacent to the shaft tunnel, has a light steel fire-screen door been fitted on the remote side of the watertight door, which is operated from each side?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The machinery space at a low-level adjacent to the shaft tunnel, a light steel fire-screen door should be fitted on the remote side of the watertight door, which is operated from each side."
          },
        ],
      },
      {
        subtitle: "Regulation  23. International shore connection",
        questions: [
          {
            id: "q356",
            label:
              "Has at least one international shore connection been provided?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an international shore connection onboard the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation  24. Fireman's outfits.",
        questions: [
          {
            id: "q357",
            label:
              "Are there two fire outfits carried on board the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"1.	Two fire outfits should be carried on board the vessel."
          },
          {
            id: "q358",
            label:
              "Are the two fire outfits stored separately, easily accessible and ready to use?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"2.	The fire outfits should be stored separately and should be easily accessible."
          },
        ],
      },
      {
        subtitle: "Regulation  25. Fire control plan",
        questions: [
          {
            id: "q359",
            label:
              "Is there a permanently exhibited fire control plan, which is up to date?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should a permanently exhibited fire control plan, which is up to date."
          },
        ],
      },
      {
        subtitle: "Regulation  26. Ready availability of fire-extinguishing appliances.",
        questions: [
          {
            id: "q360",
            label:
              "Are the fire extinguisher in good order and ready for immediate use?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The fire extinguisher should be in good order and ready for immediate use."
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 6. Protection of the crew.",
    subsections: [
      {
        subtitle: "Regulation 1. General protection measures.",
        questions: [
          {
            id: "q361",
            label:
              "Is there a lifeline system that is effective for all needs and is all necessary equipment provided?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a lifeline system that is effective for all needs and is all necessary equipment provided."
          },
          {
            id: "q362",
            label:
              "Are deck openings with coamings <600mm provided with guards or portable railing or nets?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Deck openings with coamings <600mm should be provided with guards or portable railing or nets."
          },
          {
            id: "q363",
            label:
              "Are skylights fitted with protective bars not more than 350mm apart?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Skylights should be fitted with protective bars not more than 350mm apart."
          },
          {
            id: "q364",
            label:
              "Are the decks non-slip?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The deck should be non-slip."
          },
        ],
      },
      {
        subtitle: "Regulation 2. Deck openings.",
        questions: [
          {
            id: "q365",
            label:
              "Are hinged hatchways protected against accidental closing?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Hinged hatchways should be protected against accidental closing."
          },
          {
            id: "q366",
            label:
              "Are heavy hatchway covers on escape hatches fitted with counterweights?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Heavy hatchway covers on escape hatches should be fitted with counterweights."
          },
          {
            id: "q367",
            label:
              "Are escape hatches capable of being opened from both sides?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Escape hatches should be capable of being opened from both sides."
          },
          {
            id: "q368",
            label:
              "Are access hatches not less than 600mm x 600mm or 600mm diameter?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Access hatches should not be less than 600mm x 600mm or 600mm diameter."
          },
          {
            id: "q369",
            label:
              "Are handholds provided above the level of the deck over escape hatches?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Handholds should be provided above the level of the deck over escape hatches."
          },
        ],
      },
      {
        subtitle: "Regulation 3. Bulwark, rails, and guards.",
        questions: [
          {
            id: "q370",
            label:
              "Have efficient bulwarks or guard rails been fitted to all exposed parts of the working deck and super structure.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Efficient bulwarks or guard rails should be fitted to all exposed parts of the working deck and super structure. An exemption should be requested as the perimeter of the working deck is not protected be guard rails."
          },
          {
            id: "q371",
            label:
              "Are bulwarks and guard rails at least 1m from the deck?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Bulwarks and guard rails should be at least 1m from the deck."
          },
          {
            id: "q372",
            label:
              "Is the height of the lowest course of rail no greater than 230mm above the deck and the middle course not greater than 380mm apart?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The height of the lowest course of rail should be no greater than 230mm above the deck and the middle course should be not greater than 380mm apart."
          },
          {
            id: "q373",
            label:
              "Is the maximum distance between stanchions 1.5m?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The maximum distance between stanchions should be 1.5m."
          },
          {
            id: "q374",
            label:
              "Are the guard rails of adequate strength?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The guard rails should be of adequate strength."
          },
          {
            id: "q375",
            label:
              "Are storm rails fitted to the outside of the deckhouse casing?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Storm rails should be fitted to the outside of the deckhouse casing."
          },
        ],
      },
      {
        subtitle: "Regulation 4. Stairways and ladders.",
        questions: [
          {
            id: "q376",
            label:
              "Are stairways and ladder adequate size and strength?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Stairways and ladder should be of adequate size and strength."
          },
          {
            id: "q377",
            label:
              "Are non-slip treads fitted to stairways and ladders?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Non-slip treads should be fitted to stairways and ladders."
          },
          {
            id: "q378",
            label:
              "Are handrails fitted?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Handrails should be fitted to stairways."
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 7. Protection of the crew.",
    subsections: [
      {
        subtitle: "Regulation 5. Number and type of survival craft and rescue boats.",
        questions: [
          {
            id: "q379",
            label:
              "Are there survival craft of sufficient aggregated capacity to accommodate all onboard on each side of the vessel at least the total number of persons on board?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There, should be survival craft of sufficient aggregated capacity to accommodate all onboard on each side of the vessel at least the total number of persons on board."
          },
          {
            id: "q380",
            label:
              "Is there a rescue boat that can be recovered on board?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a rescue boat that can be recovered on board."
          },
          {
            id: "q381",
            label:
              "Can a survival craft easily be transferred across an open deck free of obstacles from one side to the other and facilitate easy deployment?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Survival craft should easily be transferred across an open deck free of obstacles from one side to the other and facilitate easy deployment."
          },
        ],
      },
      {
        subtitle: "Regulation 6. Availability and stowage of survival craft and rescue boats.",
        questions: [
          {
            id: "q382",
            label:
              "Are the survival craft readily available in case of emergency?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft should be readily available in case of emergency."
          },
          {
            id: "q383",
            label:
              "Are the survival craft capable of being launched safety and rapidly?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft should be capable of being launched safety and rapidly."
          },
          {
            id: "q384",
            label:
              "Are the survival craft stowed so the marshalling of persons at the embarkation deck is not impeded?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft should be stowed so the marshalling of persons at the embarkation deck is not impeded."
          },
          {
            id: "q385",
            label:
              "Are the survival craft stowed so their prompt handling is not impeded?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft should be stowed so their prompt handling is not impeded."
          },
          {
            id: "q386",
            label:
              "Is the distance from the embarkation deck to the waterline <4.5m?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The distance from the embarkation deck to the waterline should be <4.5m."
          },
          {
            id: "q387",
            label:
              "Are the survival craft and launching appliances in good working order?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft and launching appliances should be in good working order."
          },
          {
            id: "q388",
            label:
              "Are the survival craft stowed correctly?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The survival craft should be stowed correctly."
          },
          {
            id: "q389",
            label:
              "Is the method of launching and recovering of the rescue boat approved?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The method of launching and recovering of the rescue boat should be approved."
          },
          {
            id: "q390",
            label:
              "Are the life rafts fitted so that they can float free, inflate and break free from the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The life rafts should be fitted so that they can float free, inflate and break free from the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation 7. Embarkation in survival craft.",
        questions: [
          {
            id: "q391",
            label:
              "Is there at least one ladder to embark into the survival craft?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one ladder to embark into the survival craft."
          },
          {
            id: "q392",
            label:
              "Is there a position on each side of the vessel for embarkation into the survival craft?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a position on each side of the vessel for embarkation into the survival craft."
          },
          {
            id: "q393",
            label:
              "Is there a light at the stowage position of the survival craft?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a light at the stowage position of the survival craft."
          },
          {
            id: "q394",
            label:
              "Is there a light that illuminates the water into which the survival craft is launched?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a light that illuminates the water into which the survival craft is launched."
          },
          {
            id: "q395",
            label:
              "Are there arrangements for warning all persons on board that the vessel is about to be abandoned?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be arrangements for warning all persons on board that the vessel is about to be abandoned."
          },
          {
            id: "q396",
            label:
              "Is there means of prevent any discharge of water into the survival craft?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be means of prevent any discharge of water into the survival craft."
          },
        ],
      },
      {
        subtitle: "Regulation 8. Lifejackets.",
        questions: [
          {
            id: "q397",
            label:
              "Is there an approved lifejacket for all persons on board?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be an approved lifejacket for all persons on board."
          },
          {
            id: "q398",
            label:
              "Are lifejackets stowed in a readily accessible place, which is clearly signed?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Lifejackets should be stowed in a readily accessible place, which is clearly signed."
          },
        ],
      },
      {
        subtitle: "Regulation 9. Immersion suits and thermal protective aids.",
        questions: [
          {
            id: "q399",
            label:
              "Are approved immersion suits of appropriate size provided for every person on board the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Approved immersion suits of appropriate size should be provided for every person on board the vessel."
          },
          {
            id: "q400",
            label:
              "Are thermal protective aids on board the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Thermal protective aids should be on board the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation 10. Lifebuoys.",
        questions: [
          {
            id: "q401",
            label:
              "Are there at least eight lifebuoys for vessels over 75m in length and six lifebuoys for vessels under 75m in length?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least eight lifebuoys for vessels over 75m in length and six lifebuoys for vessels under 75m in length"
          },
          {
            id: "q402",
            label:
              "Are at least half the lifebuoys fitted with lights?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"At least half the lifebuoys should be fitted with lights."
          },
          {
            id: "q403",
            label:
              "Have two lifebuoys with lights been fitted with self-activating smoke signal and are positioned close to the navigation bridge?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Two lifebuoys with lights should be fitted with self-activating smoke signal and are positioned close to the navigation bridge."
          },
          {
            id: "q404",
            label:
              "Is there at least one lifebuoy each side of the vessel fitted with a buoyant lifeline of 30m in length? (These lifebuoys shall not have lights).",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one lifebuoy each side of the vessel fitted with a buoyant lifeline of 30m in length. (These lifebuoys shall not have lights)."
          },
          {
            id: "q405",
            label:
              "Are all lifebuoys readily accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All lifebuoys should be readily accessible."
          },
          {
            id: "q406",
            label:
              "Do the lifebuoys fitted meet the requirement of Solas Chapter 3, Regulation 7.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The life buoys are to be fitted to meet the requirement of Solas Chapter 3, Regulation 7. For a vessel with 12 lifebuoys. The vessel should have: - Two lifebuoys with self-activating smoke and light capable of quick release from the navigational bridge. Four lifebuoys with lights. Two lifebuoys with rope. The rope is to be - Encapsulated Life Buoy Rescue Line. Four lifebuoys. The lifebuoy PALCARD should be correct for the lifebuoy/attachment."
          },
        ],
      },
      {
        subtitle: "Regulation 11. Line-throwing appliances.",
        questions: [
          {
            id: "q407",
            label:
              "Is there an approved line-throwing appliance?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be approved line-throwing appliances onboard the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation 12. Distress signals",
        questions: [
          {
            id: "q408",
            label:
              "Are there flares on board to the satisfaction of the Administration including at least 12 rocket parachute flares?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be flares on board to the satisfaction of the Administration including at least 12 rocket parachute flares."
          },
          {
            id: "q409",
            label:
              "Are the distress signals of an approved type?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The distress signals should be approved type."
          },
          {
            id: "q410",
            label:
              "Are the distress signals readily accessible?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The distress signals should be readily accessible."
          },
        ],
      },
      {
        subtitle: "Regulation 13. Radio life-saving appliances.",
        questions: [
          {
            id: "q411",
            label:
              "Are there at least three two-way VHF radiotelephones?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least three two-way VHF radiotelephones onboard the vessel."
          },
        ],
      },
      {
        subtitle: "Regulation 14. Radar transponders",
        questions: [
          {
            id: "q412",
            label:
              "Is there at least one radar transponder (SART) on each side of the vessel?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be at least one radar transponder (SART) on each side of the vessel."
          },
          {
            id: "q413",
            label:
              "Are the radar transponders (SART) readily accessible so they can be rapidly placed in the survival craft?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The radar transponders (SART) should be readily accessible so they can be rapidly placed in the survival craft."
          },
          {
            id: "q414",
            label:
              "Or is there one radar transponder (SART) in each survival craft.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Or there should be one radar transponder (SART) in each survival craft."
          },
        ],
      },
      {
        subtitle: "Regulation 15. Retro-reflective materials on life-saving appliances.",
        questions: [
          {
            id: "q415",
            label:
              "Are all survival craft, rescue boats, lifejackets and lifebuoys fitted with retro-reflective material?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All survival craft, rescue boats, lifejackets and lifebuoys should be fitted with retro-reflective material."
          },
        ],
      },
      {
        subtitle: "Clean Seas.",
        questions: [
          {
            id: "q416",
            label:
              "Is the vessel complaint with the MARPOL code?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should be complaint with the MARPOL code."
          },
          {
            id: "q417",
            label:
              "Is the vessel fitted with oil water separators, so that oily water is not discharged overboard?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The vessel should be fitted with oil water separators, so that oily water is not discharged overboard."
          },
          {
            id: "q418",
            label:
              "Is the Garbage record book maintained, and correct?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Garbage record book - The garbage record book is to be maintained all year round."
          },
          {
            id: "q419",
            label:
              "Is the Oil record book maintained, and correct?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Oil record book - The Oil record book is to be maintained all year round."
          },
        ],
      },
    ],
  },
  {
    title: "ILO 188 - Accommodation.",
    subsections: [
      {
        subtitle: "ILO 188 Annex III",
        questions: [
          {
            id: "q420",
            label:
              "Does the engineer's accommodation have two means of escape?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engineers accommodation should have two means of escape."
          },
          {
            id: "q421",
            label:
              "Are the engineer’s supplied with ear defenders?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The engineers should be supplied with ear defenders."
          },
          {
            id: "q422",
            label:
              "Has the accommodation space adequate heating and Air conditioning?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accommodation space should have adequate heating and Air conditioning."
          },
          {
            id: "q423",
            label:
              "Has the accommodation space adequate lighting?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accommodation space should have adequate lighting."
          },
          {
            id: "q424",
            label:
              "Is the maximum number of crew per a sleep room not more than 4?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The maximum number of crew per a sleep room should not more than 4."
          },
          {
            id: "q425",
            label:
              "Is there a sign in each sleeping room stating a maximum of 4 people.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a sign in each sleeping room stating a maximum of 4 people."
          },
          {
            id: "q426",
            label:
              "Has each bunk been provided with an adequate mattress to provide comfort?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each bunk should be provided with an adequate mattress to provide comfort."
          },
          {
            id: "q427",
            label:
              "Is the minimum bunk size 198 x 80cm?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The minimum bunk size should be 198 x 80cm."
          },
          {
            id: "q428",
            label:
              "Does each sleeping room have lockers for each crew?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each sleeping room should have lockers for each crew."
          },
          {
            id: "q429",
            label:
              "Does each sleeping room have a table and chair?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"Each sleeping room should have a table and chair."
          },
          {
            id: "q430",
            label:
              "Is there a refrigerator of sufficient capacity available and accessible to the crew?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a refrigerator of sufficient capacity available and accessible to the crew."
          },
          {
            id: "q431",
            label:
              "Are there facilities for the crew to hot and cold drinks?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be facilities for the crew to access hot and cold drinks."
          },
          {
            id: "q432",
            label:
              "Is there reasonable privacy in the sanitary facilities?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be reasonable privacy in the sanitary facilities."
          },
          {
            id: "q433",
            label:
              "Do all showers and sink have hot and cold water",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"All showers and sink should have hot and cold water."
          },
          {
            id: "q434",
            label:
              "Are the toilet facilities provided with ventilation to the open air?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The toilet facilities should be provided with ventilation to the open air."
          },
          {
            id: "q435",
            label:
              "Is there one shower and one wash basin for every 6 crew?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be one shower and one wash basin for every 6 crew."
          },
          {
            id: "q436",
            label:
              "Is there one toilet for every 8 crew?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be one toilet for every 8 crew."
          },
          {
            id: "q437",
            label:
              "Is there adequate provision the wash and dry cloths?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be adequate provision the wash and dry cloths."
          },
          {
            id: "q438",
            label:
              "Is there a separate hospital cabin.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a separate hospital cabin."
          },
          {
            id: "q439",
            label:
              "Is there provision to store and dry foul-weather gear?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be provision to store and dry foul-weather gear."
          },
          {
            id: "q440",
            label:
              "Do the crew have access to WIFI?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The crew should have access to WIFI."
          },
          {
            id: "q441",
            label:
              "Are there adequate food and portable water?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be adequate food and portable water."
          },
          {
            id: "q442",
            label:
              "Is the accommodation clean and free from stores?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The accommodation should be clean and free from stores."
          },
          {
            id: "q443",
            label:
              "Is the galley maintained in a hygienic condition?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The galley should be maintained in a hygienic condition."
          },
          {
            id: "q444",
            label:
              "Do the officers inspect the accommodation and maintain records?",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"The officers should inspect the accommodation and maintain records."
          },
        ],
      },
    ]
  },
  {
    title: "COLREGS",
    subsections: [
      {
        subtitle: "Part C Lights",
        questions: [
          {
            id: "q445",
            label:
              "Mast head light Forward. 225°",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Mast head light Forward. 225°."
          },
           {
            id: "q446",
            label:
              "Second mast head light aft and 4.5m higher. 225°",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Second mast head light aft and 4.5m higher. 225°."
          },
           {
            id: "q447",
            label:
              "Sidelights. 112.5°",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Sidelights. 112.5°."
          },
           {
            id: "q448",
            label:
              "Stern light. 135°",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be a Stern light. 135°."
          },
           {
            id: "q449",
            label:
              "Fishing Lights. Two all-round lights in a vertical line, the upper being red and the lower white.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Fishing Lights. Two all-round lights in a vertical line, the upper being red and the lower white."
          },
           {
            id: "q450",
            label:
              "Not under command lights. Two all-round red lights in a vertical line. 2m apart.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Not under command lights. Two all-round red lights in a vertical line. 2m apart."
          },
           {
            id: "q451",
            label:
              "Anchor Lights In the fore part, an all-round white light. At or near the stern and at a lower level than the light, an all-round white light.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Anchor Lights. In the fore part, an all-round white light. At or near the stern and at a lower level than the light, an all-round white light."
          },
           {
            id: "q452",
            label:
              "Aground lights. Two all-round red lights in a vertical line.",
            type: "choice",
            options: ["Yes", "No", "N/A", "EXE"],
            deficiency:"There should be Aground lights. Two all-round red lights in a vertical line."
          },
        ],
      },
    ]
  }
];