var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import IntroContainer from "./components/IntroContainer.js";
import LayerGroup from "./components/LayerGroup.js";
import data from "./data/content.js";

var RootElement = function RootElement() {
  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scroll = _React$useState2[0],
      setScroll = _React$useState2[1];

  var _React$useState3 = React.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      fixed = _React$useState4[0],
      setFixed = _React$useState4[1];

  var _React$useState5 = React.useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      bottomFixed = _React$useState6[0],
      setBottomFixed = _React$useState6[1];

  var _React$useState7 = React.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      highlighted = _React$useState8[0],
      setHighlighted = _React$useState8[1];

  var _React$useState9 = React.useState(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      active = _React$useState10[0],
      setActive = _React$useState10[1];

  var _React$useState11 = React.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      stackOffsetTop = _React$useState12[0],
      setStackOffsetTop = _React$useState12[1];

  var dhscRef = React.useRef();
  var stackRef = React.useRef();

  var descriptions = data.stack.reduce(function (acc, layerGroup) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(layerGroup.layers.filter(function (layer) {
      return layer.description;
    }).map(function (layer) {
      return {
        title: layer.main,
        description: layer.description
      };
    })));
  }, []).map(function (layer) {
    return {
      ref: React.useRef(),
      element: layer.description,
      title: layer.title
    };
  });
  var descriptionTitles = descriptions.map(function (description) {
    return description.title;
  });

  // Add pre-stack items
  descriptionTitles = ["Clinician Health Manager", "Patient Health Manager"].concat(_toConsumableArray(descriptionTitles));
  descriptions = [{
    ref: React.useRef(),
    element: data.preStack[0].description,
    title: data.preStack[0].main
  }, {
    ref: React.useRef(),
    element: data.preStack[1].description,
    title: data.preStack[1].main
  }].concat(_toConsumableArray(descriptions));

  var activeLayer = active ? descriptions.find(function (layer) {
    return layer.title === active;
  }) : undefined;

  var currentLayerIndex = void 0;
  var nextTitle = void 0;
  var previousTitle = void 0;

  console.log(activeLayer);

  if (activeLayer) {
    currentLayerIndex = descriptionTitles.indexOf(activeLayer.title);
    nextTitle = currentLayerIndex < descriptionTitles.length ? descriptionTitles[currentLayerIndex + 1] : undefined;
    previousTitle = currentLayerIndex > 0 ? descriptionTitles[currentLayerIndex - 1] : undefined;
  }

  React.useEffect(function () {
    var handleScroll = function handleScroll() {
      var scrollPosition = dhscRef.current.getBoundingClientRect().top;
      var percentOfDescriptionsScrolled = Math.min(Math.max(-scrollPosition / (dhscRef.current.getBoundingClientRect().height - window.innerHeight), 0), 1);
      var stackHeight = stackRef.current.getBoundingClientRect().height;

      setFixed(scrollPosition < 0);
      setBottomFixed(percentOfDescriptionsScrolled === 1);
      setScroll(window.scrollY);
      setStackOffsetTop(-(stackHeight - window.innerHeight) * percentOfDescriptionsScrolled);

      var findHighlighted = void 0;
      descriptions.forEach(function (description) {
        var descriptionScroll = description.ref.current.getBoundingClientRect().top;
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

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("active", active);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "mobile-intro-container" },
      React.createElement(IntroContainer, null)
    ),
    React.createElement(
      "div",
      { className: "dhsc-container", ref: dhscRef },
      React.createElement(
        "div",
        { className: "stack-container", ref: stackRef },
        React.createElement(
          "div",
          { className: "lenses-container" },
          React.createElement(
            "div",
            { className: "dragonfly-container" },
            React.createElement(
              "div",
              {
                className: "left-text",
                onClick: function onClick() {
                  return setActive("Clinician Health Manager");
                }
              },
              "Clinician Health Manager"
            ),
            React.createElement(
              "div",
              {
                className: "right-text",
                onClick: function onClick() {
                  return setActive("Patient Health Manager");
                }
              },
              "Patient Health Manager"
            ),
            React.createElement("div", {
              className: "lens lens-left-blue",
              onClick: function onClick() {
                return setActive("Clinician Health Manager");
              }
            }),
            React.createElement("div", {
              className: "lens lens-right-red",
              onClick: function onClick() {
                return setActive("Patient Health Manager");
              }
            }),
            React.createElement("div", {
              className: "lens lens-left-gray",
              onClick: function onClick() {
                return setActive("Clinician Health Manager");
              }
            }),
            React.createElement("div", {
              className: "lens lens-right-gray",
              onClick: function onClick() {
                return setActive("Patient Health Manager");
              }
            })
          )
        ),
        React.createElement("div", {
          className: "z-dashed-line",
          style: Object.assign({}, scroll > 200 && { width: "89px", left: "92px" })
        }),
        React.createElement(
          "div",
          {
            className: "layers-container",
            style: Object.assign({}, scroll > 200 && { transform: "none" })
          },
          data.stack.map(function (content, key) {
            return React.createElement(LayerGroup, {
              content: content,
              highlighted: highlighted,
              titleLayer: content.title && { title: content.title },
              isLastChild: key === data.stack.length - 1,
              setActive: setActive
            });
          })
        )
      ),
      React.createElement(
        "div",
        { className: "description-container" },
        React.createElement(IntroContainer, null),
        data.preStack.map(function (content, key) {
          return React.createElement(
            "div",
            { key: key, className: "layer-description" },
            content.description
          );
        }),
        data.stack.map(function (group, key) {
          return React.createElement(
            "div",
            { key: key },
            group.title && React.createElement(
              "div",
              { className: "group-title" },
              group.title
            ),
            group.layers.map(function (layer, key2) {
              if (layer.description) {
                return React.createElement(
                  "div",
                  { key: key2, className: "layer-description" },
                  layer.description
                );
              }
            })
          );
        })
      )
    ),
    React.createElement(
      "div",
      { className: "showcase " + (active ? "show" : "") },
      React.createElement(
        "div",
        {
          className: "showcase-close no-highlight",
          onClick: function onClick() {
            setActive(undefined);
          }
        },
        "\xD7"
      ),
      React.createElement(
        "div",
        { className: "showcase-heading" },
        activeLayer && activeLayer.title
      ),
      React.createElement(
        "div",
        { className: "showcase-text" },
        activeLayer && activeLayer.element
      ),
      React.createElement(
        "div",
        { className: "navigation" },
        previousTitle ? React.createElement(
          "div",
          {
            className: "nav-button nav-backward",
            onClick: function onClick() {
              setActive(previousTitle);
            }
          },
          React.createElement(
            "div",
            { className: "direction-text" },
            "Previous"
          ),
          React.createElement(
            "div",
            { className: "layer-name" },
            previousTitle
          )
        ) : React.createElement("div", null),
        nextTitle && React.createElement(
          "div",
          {
            className: "nav-button nav-forward",
            onClick: function onClick() {
              setActive(nextTitle);
            }
          },
          React.createElement(
            "div",
            { className: "direction-text" },
            "Next"
          ),
          React.createElement(
            "div",
            { className: "layer-name" },
            nextTitle
          )
        )
      )
    ),
    React.createElement("div", { className: "blue-bar" })
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));