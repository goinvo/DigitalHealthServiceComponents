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
      <div className="blue-bar" />
      <div className="dhsc-container" ref={dhscRef}>
        <div
          className={`stack-container ${fixed ? "fixed" : ""} ${
            bottomFixed ? "fixed-bottom" : ""
          }`}
          ref={stackRef}
          style={
            !bottomFixed ? { transform: `translateY(${stackOffsetTop}px)` } : {}
          }
        >
          {data.stack.map((content, key) => {
            return (
              <LayerGroup
                layers={content.layers}
                highlighted={highlighted}
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
      <div className="blue-bar" />
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
