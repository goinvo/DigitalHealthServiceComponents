const data = {
  preStack: [
    {
      main: "Clinician Health Manager",
      description: (
        <div>
          <p>
            <strong className="clinician-health-manager">
              Clinician Health Manager
            </strong>{" "}
            is the front-end service(s) on a clinician's mobile phone (or laptop
            or computer-on-wheels) that strengthens primary care delivery. It
            does so by tracking data, supporting patient education, and
            connecting clinicians with patients and their families.
          </p>
        </div>
      ),
    },
    {
      main: "Patient Health Manager",
      description: (
        <div>
          <p>
            <strong className="patient-health-manager">
              Patient Health Manager
            </strong>{" "}
            is the front-end service on an individual's mobile phone (or other
            silicon) that guides them to take actions for their health. This
            guidance includes providing tailored education, involving family and
            clinical teams, and giving daily health ownership to the individual.
          </p>
        </div>
      ),
    },
  ],
  stack: [
    {
      title: "BioMetric/results",
      icon: "/images/biometric-icon.svg",
      show2D: true,
      layers: [
        {
          main: "Result Summary",
          description: (
            <div>
              <p>
                <strong>Result Summary</strong> is a simple outline of what
                happened in a medical visit or lab result.
              </p>
              {/*<h2>References:</h2>
              <p>
                <a href="https://datauseagreement.org">
                  https://datauseagreement.org
                </a>
              </p>
              <h2>1 pager:</h2>
              <p>
                <a href="https://healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement">
                  https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement
                </a>
              </p>*/}
            </div>
          ),
        },
        {
          main: "Result Detail",
          subtext: "(labs, biometric data, etc)",
          description: (
            <div>
              <p>
                <strong>Result Detail</strong> is the complete set of
                information of a medical visit or lab result. All the
                information should be listed with access to the raw data.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      layers: [
        {
          main: "Financial Trade-offs",
          description: (
            <div>
              <p>
                <strong>Financial Trade-offs</strong> show the possible paths to
                different treatments, the outcomes, and different costs to the
                patient and to other parties.
              </p>
            </div>
          ),
        },
        {
          main: "Insurance Coverage",
        },
        {
          main: "Costs",
          description: (
            <div>
              <p>
                <strong>Costs</strong> show exactly what the visit, exam, or
                service cost. Details include what the patient pays, what the
                insurance pays, discounts from hospitals/insurance, etc.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Actionable Step",
      icon: "/images/actionable-step-icon.svg",
      layers: [
        {
          main: "Advice",
          description: (
            <div>
              <p>
                <strong>Advice</strong> is a personal recommendation on what to
                do next with your condition(s), based on your clinical results,
                overall life information, and data.
              </p>
            </div>
          ),
        },
        {
          main: "Care Plan",
          description: (
            <div>
              <p>
                <strong>Care Plan</strong> is a synthesis of all plans of care
                produced by the patient and their providers to managea person's
                health day to day. It serves as a continuous, conceptual
                framework shared by all of the care team members to guide the
                patient's care.
              </p>
              <p>
                Reference:{" "}
                <a href="https://www.goinvo.com/features/careplans/">
                  https://www.goinvo.com/features/careplans/
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Treatment Agent",
          description: (
            <div>
              <p>
                <strong>Treatment Agent</strong> provides evidence-driven,
                standards of care for conditions (based on each diagnosis).
              </p>
            </div>
          ),
        },
        {
          main: "Diagnosis Agent",
          description: (
            <div>
              <p>
                <strong>Diagnosis Agent</strong> looks at health data, symptoms,
                and patterns to identify specific conditions and diagnosis.
                Working independently of the patient, or with the patient, or
                with the entire care team, ratchets up the quality and accuracy
                of the diagnosis.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Health Education",
      icon: "/images/health-literacy-icon.svg",
      layers: [
        {
          main: "Bioassay explained",
          subtext: "5th grade level, labs explanation",
          description: (
            <div>
              <p>
                <strong>Bioassay Explained</strong> in 5th grade level, it shows
                and explains the bioassay results. [Note: how is this different
                from result summary?]
              </p>
            </div>
          ),
        },
        {
          main: "Biometric explained",
          subtext: "Device results explanation",
          description: (
            <div>
              <p>
                <strong>Biometric Explained</strong> is a summary of a patient's
                body measurements, physiological characteristics, and
                calculations, presented in an understandable story.
              </p>
            </div>
          ),
        },
        {
          main: "Condition Health Edu",
          subtext: "Health education for a particular condition",
          description: (
            <div>
              <p>
                <strong>Condition Health Edu</strong> is a graphical and
                text-based description of a particular condition (or
                conditions), which often includes condition definitions, how it
                impacts the patient, how the patient treats the condition, etc.
              </p>
            </div>
          ),
        },
        {
          main: "Population Explained",
          description: (
            <div>
              <p>
                <strong>Population Explained</strong> puts the current
                conditions in context of a larger population and how it impacts
                a neighborhood, a town, city, or country.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "RoS Service",
      layers: [
        {
          main: "Review of Systems",
          description: (
            <div>
              <p>
                <strong>Review of Systems (RoS)</strong> is a checklist and
                catalog of a patient's body systems, collected by a series of
                questions.
              </p>
              <p>
                A goal in healthcare is to have an accurate, up-to-date, and
                in-depth personal and family history. An always-evolving RoS
                aids in identifying signs and symptoms, creating care plans, and
                learning about a patient. Seeing a person's entire system
                information and dynamics help to provide the right care, at the
                right time, at the right dose, in the right setting.
              </p>
            </div>
          ),
        },
        {
          main: "PGD",
          subtext: "Patient Generated Data",
          description: (
            <div>
              <p>
                <strong>Patient Generated Data (PGD)</strong> is any status of a
                patient’s health coming directly from the patient, without any
                interpretation or interference.
              </p>
              <p>
                The patient is most under used health sensor in the entire
                healthcare system. Patient feelings, pain, environment,
                symptoms, and experiences can be captured in short, structured
                data through low-burden methods (such as voice, multi-second
                reporting, sound snippets, etc). Any life data is health data.
                The PGD Pump is the data collection service, which is critical
                for closing the learning health system loop. Data quality and
                provenance will be shown in the Health Manager.
              </p>
              <p>
                Previous terms: Patient Generated Health Data, Patient Reported
                Outcomes, Patient-Reported Health Data...
              </p>
              <p>
                References:{" "}
                <a href="https://www.goinvo.com/vision/open-pro/">
                  Open PRO Overview
                </a>
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Agreement",
      icon: "/images/agreement-icon.svg",
      layers: [
        {
          main: "pDUA",
          subtext: "Patient Data Use Agreement",
          description: (
            <div>
              <p>
                <strong>Patient Data Use Agreement (pDUA)</strong> is a contract
                between the patient and a service provider that states in clear,
                simple language or graphics, how data will be used and accessed.
              </p>
              <p>
                The pDUA is evidence for patients of how the service provider's
                will use, or not use, their information. More than just terms
                &amp; conditions, the pDUA gives options for the terms of the
                agreement itself. It allows everyone to assess the
                trustworthiness and practices of a third party service. Options
                also include how data is transitioned, if the agreement is
                terminated. Patients need to be on the same legal altitude as
                healthcare services, apps, and hospitals. A binding data
                contract, governed by the patients, is critical to putting
                patients in control and protecting patients from corporate
                overreach.
              </p>
              <p>
                References:{" "}
                <a href="https://datauseagreement.org">datauseagreement.org</a>
              </p>
              <p>
                1&nbsp;pager:&nbsp;
                <a href="https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement">
                  https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Consent",
          description: (
            <div>
              <p>
                A <strong>Consent</strong> process shows and tells the patient
                about the purpose, benefits, and risks of the medical activity
                they're about to engage in. To proceed in using the product or
                completing the intervention, the patient needs to agree to
                participating and understands the pros and cons of
                participating.
              </p>
              <h2>Guide to Designing Consent</h2>
              <p>
                <a href="https://www.goinvo.com/vision/patient-centered-consent/Sage">
                  https://www.goinvo.com/vision/patient-centered-consent/Sage
                </a>
              </p>
              <h2>Bionetworks Consent Toolkit</h2>
              <p>
                <a href="https://sagebionetworks.org/tools_resources/elements-of-informed-consent/">
                  https://sagebionetworks.org/tools_resources/elements-of-informed-consent/
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Access Controls",
          description: (
            <div>
              <p>
                <strong>Access Controls</strong> for a Patient Data Manager
                shares data with anyone, as directed by the patient. The PDM
                always needs a patient's permission before sharing data.
              </p>
              <p>
                Patients can share data for research, so scientists can learn
                more about humans and discover new treatments.
              </p>
              <p>
                One can share data automatically during an emergency. First
                responders would be able to see critical health information
                about the patient.
              </p>
              <p>
                Patients can review who has access to their data, and can stop
                sharing at any time.
              </p>
            </div>
          ),
        },
        {
          main: "Outside health services API",
          subtext: "Integrate with Uber Health, Apple HealthKit, etc.",
          description: (
            <div>
              <p>
                <strong>Outside Health Services API</strong> integrates with
                third party health services [Part of PDM]
              </p>
            </div>
          ),
        },
        {
          main: "EHR, PHR API",
          description: (
            <div>
              <p>
                <strong>EHR, PHR API</strong> forwards data to all stakeholders
                [Part of PDM, Patient Data Receipt]
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Disclaimers",
      icon: "/images/disclaimers-icon.svg",
      layers: [
        {
          main: "Disclaimer",
        },
      ],
    },
    {
      title: "Using Data",
      icon: "/images/using-data-icon.svg",
      layers: [
        {
          main: "Intervention Engine",
          description: (
            <div>
              <p>
                An <strong>Intervention Engine</strong> uses patient health
                projections and relevant recommendations to care plan in
                near-real time. Intervention services feed digital care plans
                with personal health content and metrics, and behave
                autonomously or inconjunction with medical providers.
              </p>
              <h2>Poster</h2>
              <p>
                <a href="https://www.goinvo.com/old/images/features/careplans/part3/intervention_engine_poster_final.pdf">
                  See GoInvo's Poster Here
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Behavior Model, Predictive Analytics",
        },
        {
          main: "CDS",
          description: (
            <div>
              <p>
                <strong>Clinical Decision Support (CDS)</strong> services...
                Tools for patients and clinicians that aid in decision-making
                with diagnosis, treatment, and care planning. Models based on
                personal information and peer-reviewed evidence of many-like
                people, reveal options on how to diagnose or treat a condition
                or warn of possible futures.
              </p>
              <h2>An example is the Mayo Clinic Statin CDS</h2>
              <p>
                <a href="https://statindecisionaid.mayoclinic.org/">
                  https://statindecisionaid.mayoclinic.org/
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Health Score",
          description: (
            <div>
              <p>
                <strong>A Health Score</strong> is a data-driven summary of the
                determinants of health (DOH) to aid health decision making at
                the individual, and population level.
              </p>
              <h2>Draft Health Score concept and references</h2>
              <p>
                Reference:{" "}
                <a href="https://github.com/goinvo/DeterminantsofHealthScore/blob/master/documentation/Determinants_of_Health_Score_Summary.pdf">
                  Health Score on Github
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Population Insights",
        },
        {
          main: "Raw R&D",
        },
      ],
    },
    {
      layers: [
        {
          main: "Patient Data Manager",
          description: (
            <div>
              <p>
                <strong>Patient Data Manager (PDM)</strong> is a digital service
                working on behalf of a patient to continually find, retrieve,
                add, edit, correct, and normalize data and construct a person's
                longitudinal health record. Because a patient's data comes from
                many places, the PDM takes it and puts it into the same place
                (one, comprehensive health record).
              </p>
            </div>
          ),
        },
        {
          main: "Manual Inputs",
          description: (
            <div>
              <p>
                <strong>Manual Inputs</strong> is required for any data in your
                record. Mistakes happen. This is why you can correct and comment
                on your data.
              </p>
            </div>
          ),
        },
        {
          main: "Patient Data Receipts",
          description: (
            <div>
              <p>
                <strong>Patient Data Receipt (PDR)</strong> is a digital record,
                a data record, of what happened at an encounter. Every clinical
                visit, every reading from a wearable, and all activity is
                digitally captured. The transaction between the service(s) and
                that patient is recorded in a PDR, and sent to the patient and
                legally required parties.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Patient Data",
      icon: "/images/patient-data-icon.svg",
      layers: [
        {
          main: "Standard Patient Health Record",
          description: (
            <div>
              <p>
                <strong>Standard Patient Health Record</strong> is a digital
                "twin" of the patient in code, based on a nationally shared and
                consistent definition of health data (structure, terminology,
                content) for the US and planet. It is the gold source data for a
                patient's health. The standard patient health record
                specification contains definitions for all critical patient
                information such as ID, emergency care, primary care, oncology
                care, with future extensions for representing human biology,
                behavior, environment, and social circumstances in code.
              </p>
              <p>
                Reference:{" "}
                <a href="http://standardhealthrecord.org/">
                  http://standardhealthrecord.org/
                </a>
              </p>
            </div>
          ),
        },
        {
          main: "Financial Data",
        },
        {
          main: "EHR data",
        },
        {
          main: "Study data",
          subtext: "SDoH questions, questionnaires, etc.",
        },
        {
          main: "Wearable data",
        },
        {
          main: "Bioassay data",
        },
        {
          main: "Genome",
        },
        {
          main: "Social, Behavioral, and Environmental data",
        },
        {
          main: "Standard Primary Care Core Data",
        },
        {
          main: "Life data",
        },
        {
          main: "Common Data Elements",
          isCommonDataElements: true,
          description: (
            <div>
              <p>
                <strong>Common Data Elements</strong> are human and
                machine-readable definitions (key terms or concepts) of health
                data elements used to describe human biology, activity, and
                scenarios. A data element is like an attribute, which then maps
                to a value or set of values.
              </p>
              <p>
                Reference:{" "}
                <a href="http://standardhealthrecord.org/">
                  http://standardhealthrecord.org/
                </a>
              </p>
              <p>
                <a href="https://cde.nlm.nih.gov/home">
                  NIH Common Data Elements
                </a>
              </p>
              <p>
                <a href="https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi">
                  United States Core Data for Interoperability (USCDI)
                </a>
              </p>
            </div>
          ),
        },
      ],
    },
  ],
};

export default data;
