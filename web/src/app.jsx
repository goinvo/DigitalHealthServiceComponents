import LayerGroup from "./components/LayerGroup.js";
import data from "./data/content.js";

const RootElement = () => {
  const [scroll, setScroll] = React.useState();
  const [fixed, setFixed] = React.useState();
  const [highlighted, setHighlighted] = React.useState();

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
      const scrollPosition = stackRef.current.getBoundingClientRect().top;
      setFixed(scrollPosition < 30);
      setScroll(window.scrollY);
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
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="blue-bar">Placeholder box</div>
      <div className="dhsc-container" ref={stackRef}>
        <div
          className={`stack-container ${fixed ? "fixed" : ""}`}
          // style={{ top: `${scroll}px` }}
        >
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
          {descriptions.map((description) => {
            return (
              <div
                className={`layer-description ${
                  highlighted !== undefined &&
                  JSON.stringify(highlighted.element) ===
                    JSON.stringify(description.element)
                    ? "highlighted"
                    : ""
                }`}
                ref={description.ref}
              >
                {description.element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
