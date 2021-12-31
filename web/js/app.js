import LayerGroup from "./components/LayerGroup.js";
import data from "../data/content.js";

var RootElement = function RootElement() {
  return React.createElement(
    "div",
    { className: "dhsc-container" },
    React.createElement(
      "div",
      { className: "stack-container" },
      data.stack.map(function (content, key) {
        return React.createElement(LayerGroup, {
          layers: content.layers,
          titleLayer: content.title && { title: content.title },
          isLastChild: key === data.stack.length - 1
        });
      })
    ),
    React.createElement(
      "div",
      { className: "description-container" },
      React.createElement(
        "div",
        { className: "layer-description" },
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "Patient Data Use Agreement (pDUA)"
          ),
          " is a contract between the patient and a service provider that states in clear, simple language or graphics, how data will be used and accessed. The pDUA is evidence for patients of how the service provider's will use, or not use, their information. More than just terms & conditions, the pDUA gives options for the terms of the agreement itself. It allows everyone to assess the trustworthiness and practices of a third party service. Options also include how data is transitioned, if the agreement is terminated. Patients need to be on the same legal altitude as healthcare services, apps, and hospitals. A binding data contract, governed by the patients, is critical to putting patients in control and protecting patients from corporate overreach."
        ),
        React.createElement(
          "h2",
          null,
          "References:"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://datauseagreement.org" },
            "https://datauseagreement.org"
          )
        ),
        React.createElement(
          "h2",
          null,
          "1 pager:"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: "https://healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement" },
            "https://www.healthcareitnews.com/news/why-patients-and-providers-need-model-patient-data-use-agreement"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
      ),
      React.createElement(
        "div",
        { className: "layer-description" },
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
    )
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));