import IntroContainer from "./components/IntroContainer.js";
import LayerGroup from "./components/LayerGroup.js";
import data from "./data/content.js";

const RootElement = () => {
  const [scroll, setScroll] = React.useState();
  const [highlighted, setHighlighted] = React.useState();
  const [descriptionContainerOffset, setDescriptionContainerOffset] =
    React.useState(0);
  const [active, setActive] = React.useState();
  const [initialDescriptionTops, setInitialDescriptionTops] = React.useState();
  const [isUserControlled, setIsUserControlled] = React.useState(false);
  // const [stackOffsetTop, setStackOffsetTop] = React.useState(0);

  const dhscRef = React.useRef();
  const stackRef = React.useRef();

  React.useEffect(() => {
    // If the popup is active and the window is resized to be a desktop size
    // we should go ahead and remove the popup.
    const adjustActive = () => {
      setActive(undefined);
    };
    window.addEventListener("resize", adjustActive);
    return () => {
      window.removeEventListener("resize", adjustActive);
    };
  }, []);

  let descriptions = data.stack
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
  let descriptionTitles = descriptions.map((description) => description.title);

  // Add pre-stack items
  descriptionTitles = [
    "Clinician Health Manager",
    "Patient Health Manager",
    ...descriptionTitles,
  ];
  descriptions = [
    {
      ref: React.useRef(),
      element: data.preStack[0].description,
      title: data.preStack[0].main,
    },
    {
      ref: React.useRef(),
      element: data.preStack[1].description,
      title: data.preStack[1].main,
    },
    ...descriptions,
  ];

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
    const descriptionTops = {};
    const allLayers = data.stack.reduce((acc, layerGroup) => {
      return [...acc, ...layerGroup.layers];
    }, []);
    allLayers.forEach((layer) => {
      if (layer.descriptionRef.current) {
        descriptionTops[layer.main] =
          layer.descriptionRef.current.getBoundingClientRect().top;
      }
    });
    setInitialDescriptionTops(descriptionTops);
  }, []);

  React.useEffect(() => {
    // const handleScroll = () => {
    //   const scrollPosition = dhscRef.current.getBoundingClientRect().top;
    //   const percentOfDescriptionsScrolled = Math.min(
    //     Math.max(
    //       -scrollPosition /
    //         (dhscRef.current.getBoundingClientRect().height -
    //           window.innerHeight),
    //       0
    //     ),
    //     1
    //   );
    //   const stackHeight = stackRef.current.getBoundingClientRect().height;

    //   setFixed(scrollPosition < 0);
    //   setBottomFixed(percentOfDescriptionsScrolled === 1);
    //   setScroll(window.scrollY);
    //   setStackOffsetTop(
    //     -(stackHeight - window.innerHeight) * percentOfDescriptionsScrolled
    //   );

    //   let findHighlighted;
    //   descriptions.forEach((description) => {
    //     const descriptionScroll =
    //       description.ref.current.getBoundingClientRect().top;
    //     if (descriptionScroll < 300 && descriptionScroll > 0) {
    //       findHighlighted = description;
    //     }
    //   });
    //   if (findHighlighted) {
    //     setHighlighted(findHighlighted);
    //   }

    //   window.requestAnimationFrame(handleScroll);
    // };

    const highlightPoint = 300;

    const handleScroll = () => {
      const allLayers = data.stack.reduce((acc, layerGroup) => {
        return [...acc, ...layerGroup.layers];
      }, []);
      let closestToHighlightPoint = allLayers[0];
      let currentlyClosest = 99999;
      for (let i in allLayers) {
        const layer = allLayers[i];
        const distance = Math.abs(
          layer.layerRef.current.getBoundingClientRect().top - highlightPoint
        );
        if (distance < currentlyClosest) {
          currentlyClosest = distance;
          closestToHighlightPoint = layer;
        }
      }

      if (closestToHighlightPoint.descriptionRef.current) {
        const relevantDescriptionTop =
          initialDescriptionTops[closestToHighlightPoint.main];
        const alignPoint =
          closestToHighlightPoint.layerRef.current.getBoundingClientRect().top;
        const shift = alignPoint - relevantDescriptionTop + window.scrollY;
        setDescriptionContainerOffset(-shift);
      }

      setHighlighted(closestToHighlightPoint);
      setScroll(window.scrollY);

      // window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [highlighted]);

  for (let groupId in data.stack) {
    for (let layerId in data.stack[groupId].layers) {
      const layer = data.stack[groupId].layers[layerId];
      data.stack[groupId].layers[layerId].layerRef = React.useRef();
      data.stack[groupId].layers[layerId].descriptionRef = React.useRef();
    }
  }

  const maybeSetActive = (section) => {
    setIsUserControlled(true);
    if (window.innerWidth < 960) {
      setActive(section);
    }
  };

  return (
    <div>
      <div className="mobile-intro-container">
        <IntroContainer />
      </div>
      <div className="dhsc-container" ref={dhscRef}>
        <div className="stack-container" ref={stackRef}>
          <div className="lenses-container">
            <div className="dragonfly-container">
              <div
                className="left-text"
                onClick={() => maybeSetActive("Clinician Health Manager")}
              >
                Clinician Health Manager
              </div>
              <div
                className="right-text"
                onClick={() => maybeSetActive("Patient Health Manager")}
              >
                Patient Health Manager
              </div>
              <div
                className="lens lens-left-blue"
                onClick={() => maybeSetActive("Clinician Health Manager")}
              ></div>
              <div
                className="lens lens-right-red"
                onClick={() => maybeSetActive("Patient Health Manager")}
              ></div>
              <div
                className="lens lens-left-gray"
                onClick={() => maybeSetActive("Clinician Health Manager")}
              ></div>
              <div
                className="lens lens-right-gray"
                onClick={() => maybeSetActive("Patient Health Manager")}
              ></div>
            </div>
          </div>
          <div
            className="z-dashed-line"
            style={{ ...(scroll > 200 && { width: "85px", left: "96px" }) }}
          ></div>
          <div
            className="layers-container"
            style={{ ...(scroll > 200 && { transform: "none" }) }}
          >
            {data.stack.map((content, key) => {
              return (
                <LayerGroup
                  content={content}
                  highlighted={highlighted}
                  titleLayer={content.title && { title: content.title }}
                  isLastChild={key === data.stack.length - 1}
                  setActive={(layer) => {
                    setIsUserControlled(true);
                    setActive(layer);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div
          className="description-container"
          style={{ top: `${-descriptionContainerOffset}px` }}
        >
          <IntroContainer />
          {data.preStack.map((content, key) => {
            return (
              <div key={key} className={`layer-description`}>
                {content.description}
              </div>
            );
          })}
          {data.stack.map((group, key) => {
            return (
              <div key={key}>
                {group.title && (
                  <div className="group-title">{group.title}</div>
                )}
                {group.layers.map((layer, key2) => {
                  if (layer.description) {
                    return (
                      <div
                        key={key2}
                        className={`layer-description`}
                        ref={layer.descriptionRef}
                      >
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
          {previousTitle ? (
            <div
              className="nav-button nav-backward"
              onClick={() => {
                setActive(previousTitle);
              }}
            >
              <div className="direction-text">Previous</div>
              <div className="layer-name">{previousTitle}</div>
            </div>
          ) : (
            <div></div>
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
