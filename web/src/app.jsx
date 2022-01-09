import LayerGroup from "./components/LayerGroup.js";
import data from "./data/content.js";

const RootElement = () => {
  const [scroll, setScroll] = React.useState();
  const [fixed, setFixed] = React.useState();
  const [bottomFixed, setBottomFixed] = React.useState();
  const [highlighted, setHighlighted] = React.useState();
  const [stackOffsetTop, setStackOffsetTop] = React.useState(0);

  const dhscRef = React.useRef();
  const stackRef = React.useRef();

  const descriptions = data.stack
    .reduce((acc, layerGroup) => {
      return [
        ...acc,
        ...layerGroup.layers
          .filter((layer) => layer.description)
          .map((layer) => layer.description),
      ];
    }, [])
    .map((element) => {
      return {
        ref: React.useRef(),
        element,
      };
    });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = dhscRef.current.getBoundingClientRect().top;
      const percentOfDescriptionsScrolled = Math.min(
        Math.max(
          -scrollPosition /
            (dhscRef.current.getBoundingClientRect().height -
              window.innerHeight),
          0
        ),
        1
      );
      const stackHeight = stackRef.current.getBoundingClientRect().height;

      setFixed(scrollPosition < 0);
      setBottomFixed(percentOfDescriptionsScrolled === 1);
      setScroll(window.scrollY);
      setStackOffsetTop(
        -(stackHeight - window.innerHeight) * percentOfDescriptionsScrolled
      );

      let findHighlighted;
      descriptions.forEach((description) => {
        const descriptionScroll =
          description.ref.current.getBoundingClientRect().top;
        if (descriptionScroll < 300 && descriptionScroll > 0) {
          findHighlighted = description;
        }
      });
      if (findHighlighted) {
        setHighlighted(findHighlighted);
      }

      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="blue-bar">
        <div className="intro-container">
          <h1>Digital Health Connections Model</h1>
        </div>
      </div>
      <div className="light-blue-bar">
        <div className="intro-container">
          <p>
            The <strong>Digital Health Connections Model</strong> is a
            representation of the system of services that can make up digital
            health software.
          </p>
          <p>
            Much like the{" "}
            <a href="https://en.wikipedia.org/wiki/OSI_model">OSI model</a>, the
            Digital Health Connections model is a stack of common services,
            functions, elements, and terms.The model partitions the information
            flow into 10 abstraction layers, from the common data elements to
            the highest level of representation of information occurs, with the
            Patient Health Manager.
          </p>
          <h2>Questions and issues:</h2>
          <ul>
            <li>
              This is shown as a linear flow. However, it's not linear or
              completely hierarchal. Do you have any suggestions on showing
              non-linearity?
            </li>
            <li>
              Trauma, surgery, and other medical disciplines may prescribe to
              parts of this model. We need to show those disciplines in the
              model.
            </li>
          </ul>
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
      </div>
      <div className="dhsc-container" ref={dhscRef}>
        <div className={`stack-container`} ref={stackRef}>
          {data.stack.map((content, key) => {
            return (
              <LayerGroup
                content={content}
                highlighted={highlighted}
                titleLayer={content.title && { title: content.title }}
                isLastChild={key === data.stack.length - 1}
              />
            );
          })}
        </div>
        <div className="description-container">
          {data.stack.map((group, key) => {
            return (
              <div key={key}>
                {group.title && (
                  <div className="group-title">{group.title}</div>
                )}
                {group.layers.map((layer, key2) => {
                  return (
                    <div key2={key2} className={`layer-description`}>
                      {layer.description}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="blue-bar" />
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
