import LayerGroup from "./components/LayerGroup.js";
import data from "./data/content.js";

const RootElement = () => {
  const [scroll, setScroll] = React.useState();
  const [fixed, setFixed] = React.useState();
  const [bottomFixed, setBottomFixed] = React.useState();
  const [highlighted, setHighlighted] = React.useState();
  const [active, setActive] = React.useState();
  const [stackOffsetTop, setStackOffsetTop] = React.useState(0);

  const dhscRef = React.useRef();
  const stackRef = React.useRef();

  const descriptions = data.stack
    .reduce((acc, layerGroup) => {
      return [
        ...acc,
        ...layerGroup.layers
          .filter((layer) => layer.description)
          .map((layer) => ({
            title: layer.main,
            description: layer.description,
          })),
      ];
    }, [])
    .map((layer) => {
      return {
        ref: React.useRef(),
        element: layer.description,
        title: layer.title,
      };
    });
  const descriptionTitles = descriptions.map(
    (description) => description.title
  );

  const activeLayer = active
    ? descriptions.find((layer) => layer.title === active)
    : undefined;

  let currentLayerIndex;
  let nextTitle;
  let previousTitle;
  if (activeLayer) {
    currentLayerIndex = descriptionTitles.indexOf(activeLayer.title);
    nextTitle =
      currentLayerIndex < descriptionTitles.length
        ? descriptionTitles[currentLayerIndex + 1]
        : undefined;
    previousTitle =
      currentLayerIndex > 0
        ? descriptionTitles[currentLayerIndex - 1]
        : undefined;
  }

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

  console.log("active", active);

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
        <div className="stack-container" ref={stackRef}>
          <div className="lenses-container">
            <div className="dragonfly-container">
              <div className="left-text">Clinician Health Manager</div>
              <div className="right-text">Patient Health Manager</div>
              <div className="lens lens-left-blue"></div>
              <div className="lens lens-right-red"></div>
              <div className="lens lens-left-gray"></div>
              <div className="lens lens-right-gray"></div>
            </div>
          </div>
          {data.stack.map((content, key) => {
            return (
              <LayerGroup
                content={content}
                highlighted={highlighted}
                titleLayer={content.title && { title: content.title }}
                isLastChild={key === data.stack.length - 1}
                setActive={setActive}
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
                  if (layer.description) {
                    return (
                      <div key2={key2} className={`layer-description`}>
                        {layer.description}
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`showcase ${active ? `show` : ``}`}>
        <div
          className="showcase-close no-highlight"
          onClick={() => {
            setActive(undefined);
          }}
        >
          &times;
        </div>
        <div className="showcase-heading">
          {activeLayer && activeLayer.title}
        </div>
        <div className="showcase-text">
          {activeLayer && activeLayer.element}
        </div>
        <div className="navigation">
          {previousTitle && (
            <div
              className="nav-button nav-backward"
              onClick={() => {
                setActive(previousTitle);
              }}
            >
              <div className="direction-text">Previous</div>
              <div className="layer-name">{previousTitle}</div>
            </div>
          )}
          {nextTitle && (
            <div
              className="nav-button nav-forward"
              onClick={() => {
                setActive(nextTitle);
              }}
            >
              <div className="direction-text">Next</div>
              <div className="layer-name">{nextTitle}</div>
            </div>
          )}
        </div>
      </div>
      <div className="blue-bar" />
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
