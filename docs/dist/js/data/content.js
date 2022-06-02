var data = {
  preStack: [{
    main: "Clinician Health Manager",
    description: React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "strong",
          { className: "clinician-health-manager" },
          "Clinician Health Manager"
        ),
        " ",
        "is the front-end service(s) on a clinician's mobile phone (or laptop or computer-on-wheels) that strengthens primary care delivery. It does so by tracking data, supporting patient education, and connecting clinicians with patients and their families."
      )
    )
  }, {
    main: "Patient Health Manager",
    description: React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "strong",
          { className: "patient-health-manager" },
          "Patient Health Manager"
        ),
        " ",
        "is the front-end service on an individual's mobile phone (or other silicon) that guides them to take actions for their health. This guidance includes providing tailored education, involving family and clinical teams, and giving daily health ownership to the individual."
      )
    )
  }],
  stack: [{
    title: "BioMetric/results",
    icon: "/images/biometric-icon.svg",
    show2D: true,
    layers: [{
      main: "Result Summary",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Result Summary"
          ),
          " is a simple outline of what happened in a medical visit or lab result."
        )
      )
    }, {
      main: "Result Detail",
      subtext: "(labs, biometric data, etc)",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Result Detail"
          ),
          " is the complete set of information of a medical visit or lab result. All the information should be listed with access to the raw data."
        )
      )
    }]
  }, {
    layers: [{
      main: "Financial Trade-offs",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Financial Trade-offs"
          ),
          " show the possible paths to different treatments, the outcomes, and different costs to the patient and to other parties."
        )
      )
    }, {
      main: "Insurance Coverage"
    }, {
      main: "Costs",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Costs"
          ),
          " show exactly what the visit, exam, or service cost. Details include what the patient pays, what the insurance pays, discounts from hospitals/insurance, etc."
        )
      )
    }]
  }, {
    title: "Actionable Step",
    icon: "/images/actionable-step-icon.svg",
    layers: [{
      main: "Advice",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Advice"
          ),
          " is a personal recommendation on what to do next with your condition(s), based on your clinical results, overall life information, and data."
        )
      )
    }, {
      main: "Care Plan",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Care Plan"
          ),
          " is a synthesis of all plans of care produced by the patient and their providers to managea person's health day to day. It serves as a continuous, conceptual framework shared by all of the care team members to guide the patient's care."
        ),
        React.createElement(
          "p",
          null,
          "Reference:",
          " ",
          React.createElement(
            "a",
            { href: "https://www.goinvo.com/features/careplans/" },
            "https://www.goinvo.com/features/careplans/"
          )
        )
      )
    }, {
      main: "Treatment Agent",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Treatment Agent"
          ),
          " provides evidence-driven, standards of care for conditions (based on each diagnosis)."
        )
      )
    }, {
      main: "Diagnosis Agent",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Diagnosis Agent"
          ),
          " looks at health data, symptoms, and patterns to identify specific conditions and diagnosis. Working independently of the patient, or with the patient, or with the entire care team, ratchets up the quality and accuracy of the diagnosis."
        )
      )
    }]
  }, {
    title: "Health Education",
    icon: "/images/health-literacy-icon.svg",
    layers: [{
      main: "Bioassay explained",
      subtext: "5th grade level, labs explanation",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Bioassay Explained"
          ),
          " in 5th grade level, it shows and explains the bioassay results. [Note: how is this different from result summary?]"
        )
      )
    }, {
      main: "Biometric explained",
      subtext: "Device results explanation",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Biometric Explained"
          ),
          " is a summary of a patient's body measurements, physiological characteristics, and calculations, presented in an understandable story."
        )
      )
    }, {
      main: "Condition Health Edu",
      subtext: "Health education for a particular condition",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Condition Health Edu"
          ),
          " is a graphical and text-based description of a particular condition (or conditions), which often includes condition definitions, how it impacts the patient, how the patient treats the condition, etc."
        )
      )
    }, {
      main: "Population Explained",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Population Explained"
          ),
          " puts the current conditions in context of a larger population and how it impacts a neighborhood, a town, city, or country."
        )
      )
    }]
  }, {
    title: "RoS Service",
    layers: [{
      main: "Review of Systems",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Review of Systems (RoS)"
          ),
          " is a checklist and catalog of a patient's body systems, collected by a series of questions."
        ),
        React.createElement(
          "p",
          null,
          "A goal in healthcare is to have an accurate, up-to-date, and in-depth personal and family history. An always-evolving RoS aids in identifying signs and symptoms, creating care plans, and learning about a patient. Seeing a person's entire system information and dynamics help to provide the right care, at the right time, at the right dose, in the right setting."
        )
      )
    }, {
      main: "PGD",
      subtext: "Patient Generated Data",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Patient Generated Data (PGD)"
          ),
          " is any status of a patient\u2019s health coming directly from the patient, without any interpretation or interference."
        ),
        React.createElement(
          "p",
          null,
          "The patient is most under used health sensor in the entire healthcare system. Patient feelings, pain, environment, symptoms, and experiences can be captured in short, structured data through low-burden methods (such as voice, multi-second reporting, sound snippets, etc). Any life data is health data. The PGD Pump is the data collection service, which is critical for closing the learning health system loop. Data quality and provenance will be shown in the Health Manager."
        ),
        React.createElement(
          "p",
          null,
          "Previous terms: Patient Generated Health Data, Patient Reported Outcomes, Patient-Reported Health Data..."
        ),
        React.createElement(
          "p",
          null,
          "References:",
          " ",
          React.createElement(
            "a",
            { href: "https://www.goinvo.com/vision/open-pro/" },
            "Open PRO Overview"
          )
        )
      )
    }]
  }, {
    title: "Agreement",
    icon: "/images/agreement-icon.svg",
    layers: [{
      main: "pDUA",
      subtext: "Patient Data Use Agreement",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Patient Data Use Agreement (pDUA)"
          ),
          " is a contract between the patient and a service provider that states in clear, simple language or graphics, how data will be used and accessed."
        ),
        React.createElement(
          "p",
          null,
          "The pDUA is evidence for patients of how the service provider's will use, or not use, their information. More than just terms & conditions, the pDUA gives options for the terms of the agreement itself. It allows everyone to assess the trustworthiness and practices of a third party service. Options also include how data is transitioned, if the agreement is terminated. Patients need to be on the same legal altitude as healthcare services, apps, and hospitals. A binding data contract, governed by the patients, is critical to putting patients in control and protecting patients from corporate overreach."
        ),
        React.createElement(
          "p",
          null,
          "References:",
          " ",
          React.createElement(
            "a",
            { href: "https://datauseagreement.org" },
            "datauseagreement.org"
          )
        ),
        React.createElement(
          "p",
          null,
          "1\xA0pager:\xA0",
          React.createElement(
            "a",
            { href: "https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement" },
            "https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement"
          )
        )
      )
    }, {
      main: "Consent",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "A ",
          React.createElement(
            "strong",
            null,
            "Consent"
          ),
          " process shows and tells the patient about the purpose, benefits, and risks of the medical activity they're about to engage in. To proceed in using the product or completing the intervention, the patient needs to agree to participating and understands the pros and cons of participating."
        ),
        React.createElement(
          "h2",
          null,
          "Guide to Designing Consent"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://www.goinvo.com/vision/patient-centered-consent/Sage" },
            "https://www.goinvo.com/vision/patient-centered-consent/Sage"
          )
        ),
        React.createElement(
          "h2",
          null,
          "Bionetworks Consent Toolkit"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://sagebionetworks.org/tools_resources/elements-of-informed-consent/" },
            "https://sagebionetworks.org/tools_resources/elements-of-informed-consent/"
          )
        )
      )
    }, {
      main: "Access Controls",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Access Controls"
          ),
          " for a Patient Data Manager shares data with anyone, as directed by the patient. The PDM always needs a patient's permission before sharing data."
        ),
        React.createElement(
          "p",
          null,
          "Patients can share data for research, so scientists can learn more about humans and discover new treatments."
        ),
        React.createElement(
          "p",
          null,
          "One can share data automatically during an emergency. First responders would be able to see critical health information about the patient."
        ),
        React.createElement(
          "p",
          null,
          "Patients can review who has access to their data, and can stop sharing at any time."
        )
      )
    }, {
      main: "Outside health services API",
      subtext: "Integrate with Uber Health, Apple HealthKit, etc.",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Outside Health Services API"
          ),
          " integrates with third party health services [Part of PDM]"
        )
      )
    }, {
      main: "EHR, PHR API",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "EHR, PHR API"
          ),
          " forwards data to all stakeholders [Part of PDM, Patient Data Receipt]"
        )
      )
    }]
  }, {
    title: "Disclaimers",
    icon: "/images/disclaimers-icon.svg",
    layers: [{
      main: "Disclaimer"
    }]
  }, {
    title: "Using Data",
    icon: "/images/using-data-icon.svg",
    layers: [{
      main: "Intervention Engine",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "An ",
          React.createElement(
            "strong",
            null,
            "Intervention Engine"
          ),
          " uses patient health projections and relevant recommendations to care plan in near-real time. Intervention services feed digital care plans with personal health content and metrics, and behave autonomously or inconjunction with medical providers."
        ),
        React.createElement(
          "h2",
          null,
          "Poster"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://www.goinvo.com/old/images/features/careplans/part3/intervention_engine_poster_final.pdf" },
            "See GoInvo's Poster Here"
          )
        )
      )
    }, {
      main: "Behavior Model, Predictive Analytics"
    }, {
      main: "CDS",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Clinical Decision Support (CDS)"
          ),
          " services... Tools for patients and clinicians that aid in decision-making with diagnosis, treatment, and care planning. Models based on personal information and peer-reviewed evidence of many-like people, reveal options on how to diagnose or treat a condition or warn of possible futures."
        ),
        React.createElement(
          "h2",
          null,
          "An example is the Mayo Clinic Statin CDS"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://statindecisionaid.mayoclinic.org/" },
            "https://statindecisionaid.mayoclinic.org/"
          )
        )
      )
    }, {
      main: "Health Score",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "A Health Score"
          ),
          " is a data-driven summary of the determinants of health (DOH) to aid health decision making at the individual, and population level."
        ),
        React.createElement(
          "h2",
          null,
          "Draft Health Score concept and references"
        ),
        React.createElement(
          "p",
          null,
          "Reference:",
          " ",
          React.createElement(
            "a",
            { href: "https://github.com/goinvo/DeterminantsofHealthScore/blob/master/documentation/Determinants_of_Health_Score_Summary.pdf" },
            "Health Score on Github"
          )
        )
      )
    }, {
      main: "Population Insights"
    }, {
      main: "Raw R&D"
    }]
  }, {
    layers: [{
      main: "Patient Data Manager",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Patient Data Manager (PDM)"
          ),
          " is a digital service working on behalf of a patient to continually find, retrieve, add, edit, correct, and normalize data and construct a person's longitudinal health record. Because a patient's data comes from many places, the PDM takes it and puts it into the same place (one, comprehensive health record)."
        )
      )
    }, {
      main: "Manual Inputs",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Manual Inputs"
          ),
          " is required for any data in your record. Mistakes happen. This is why you can correct and comment on your data."
        )
      )
    }, {
      main: "Patient Data Receipts",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Patient Data Receipt (PDR)"
          ),
          " is a digital record, a data record, of what happened at an encounter. Every clinical visit, every reading from a wearable, and all activity is digitally captured. The transaction between the service(s) and that patient is recorded in a PDR, and sent to the patient and legally required parties."
        )
      )
    }]
  }, {
    title: "Patient Data",
    icon: "/images/patient-data-icon.svg",
    layers: [{
      main: "Standard Patient Health Record",
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Standard Patient Health Record"
          ),
          " is a digital \"twin\" of the patient in code, based on a nationally shared and consistent definition of health data (structure, terminology, content) for the US and planet. It is the gold source data for a patient's health. The standard patient health record specification contains definitions for all critical patient information such as ID, emergency care, primary care, oncology care, with future extensions for representing human biology, behavior, environment, and social circumstances in code."
        ),
        React.createElement(
          "p",
          null,
          "Reference:",
          " ",
          React.createElement(
            "a",
            { href: "http://standardhealthrecord.org/" },
            "http://standardhealthrecord.org/"
          )
        )
      )
    }, {
      main: "Financial Data"
    }, {
      main: "EHR data"
    }, {
      main: "Study data",
      subtext: "SDoH questions, questionnaires, etc."
    }, {
      main: "Wearable data"
    }, {
      main: "Bioassay data"
    }, {
      main: "Genome"
    }, {
      main: "Social, Behavioral, and Environmental data"
    }, {
      main: "Standard Primary Care Core Data"
    }, {
      main: "Life data"
    }, {
      main: "Common Data Elements",
      isCommonDataElements: true,
      description: React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Common Data Elements"
          ),
          " are human and machine-readable definitions (key terms or concepts) of health data elements used to describe human biology, activity, and scenarios. A data element is like an attribute, which then maps to a value or set of values."
        ),
        React.createElement(
          "p",
          null,
          "Reference:",
          " ",
          React.createElement(
            "a",
            { href: "http://standardhealthrecord.org/" },
            "http://standardhealthrecord.org/"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://cde.nlm.nih.gov/home" },
            "NIH Common Data Elements"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi" },
            "United States Core Data for Interoperability (USCDI)"
          )
        )
      )
    }]
  }]
};

export default data;