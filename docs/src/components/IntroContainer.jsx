const IntroContainer = () => {
  return (
    <div className="intro-container">
      <p>
        The <strong>Digital Health Connections Model</strong> is a
        representation of the system of services that can make up digital health
        software.
      </p>
      <p>
        Much like the{" "}
        <a href="https://en.wikipedia.org/wiki/OSI_model">OSI model</a>, the
        Digital Health Connections model is a stack of common services,
        functions, elements, and terms. The model partitions the information
        flow into 11 abstraction layers, from the common data elements to the
        highest level of representation of information occurs, with the Patient
        Health Manager.
      </p>
      <p>
        This is an{" "}
        <a href="https://github.com/goinvo/DigitalHealthServiceComponents">
          open source project
        </a>
        , licensed under the Apache 2.0 license.
        <br />
        Please email us feedback:{" "}
        <a href="mailto:hello@goinvo.com">hello@goinvo.com</a>.
      </p>
    </div>
  );
};

export default IntroContainer;
