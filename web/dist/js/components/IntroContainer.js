var IntroContainer = function IntroContainer() {
  return React.createElement(
    "div",
    { className: "intro-container" },
    React.createElement(
      "p",
      null,
      "The ",
      React.createElement(
        "strong",
        null,
        "Digital Health Connections Model"
      ),
      " is a representation of the system of services that can make up digital health software."
    ),
    React.createElement(
      "p",
      null,
      "Much like the",
      " ",
      React.createElement(
        "a",
        { href: "https://en.wikipedia.org/wiki/OSI_model" },
        "OSI model"
      ),
      ", the Digital Health Connections model is a stack of common services, functions, elements, and terms. The model partitions the information flow into 11 abstraction layers, from the common data elements to the highest level of representation of information occurs, with the Patient Health Manager."
    ),
    React.createElement(
      "p",
      null,
      "This is an",
      " ",
      React.createElement(
        "a",
        { href: "https://github.com/goinvo/DigitalHealthServiceComponents" },
        "open source project"
      ),
      ", licensed under the Apache 2.0 license.",
      React.createElement("br", null),
      "Please email us feedback:",
      " ",
      React.createElement(
        "a",
        { href: "mailto:hello@goinvo.com" },
        "hello@goinvo.com"
      ),
      "."
    )
  );
};

export default IntroContainer;