import LayerGroup from "./components/LayerGroup.js";
import data from "../data/content.js";

const RootElement = () => {
  return (
    <div className="dhsc-container">
      <div className="stack-container">
        {data.stack.map((content, key) => {
          return (
            <LayerGroup
              layers={content.layers}
              titleLayer={content.title && { title: content.title }}
              isLastChild={key === data.stack.length - 1}
            />
          );
        })}
      </div>
      <div className="description-container">
        <div className="layer-description">
          <p>
            <strong>Patient Data Use Agreement (pDUA)</strong> is a contract
            between the patient and a service provider that states in clear,
            simple language or graphics, how data will be used and accessed. The
            pDUA is evidence for patients of how the service provider's will
            use, or not use, their information. More than just terms &
            conditions, the pDUA gives options for the terms of the agreement
            itself. It allows everyone to assess the trustworthiness and
            practices of a third party service. Options also include how data is
            transitioned, if the agreement is terminated. Patients need to be on
            the same legal altitude as healthcare services, apps, and hospitals.
            A binding data contract, governed by the patients, is critical to
            putting patients in control and protecting patients from corporate
            overreach.
          </p>
          <h2>References:</h2>
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
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
        <div className="layer-description">
          <p>
            <strong>Patient Data Manager (PDM)</strong> is a digital service
            working on behalf of a patient to continually find, retrieve, add,
            edit, correct, and normalize data and construct a person's
            longitudinal health record. Because a patient's data comes from many
            places, the PDM takes it and puts it into the same place (one,
            comprehensive health record).
          </p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
