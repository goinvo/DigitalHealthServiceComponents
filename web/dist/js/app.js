var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

  var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      stackOffsetTop = _React$useState10[0],
      setStackOffsetTop = _React$useState10[1];

  var dhscRef = React.useRef();
  var stackRef = React.useRef();

  var descriptions = data.stack.reduce(function (acc, layerGroup) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(layerGroup.layers.filter(function (layer) {
      return layer.description;
    }).map(function (layer) {
      return layer.description;
    })));
  }, []).map(function (element) {
    return {
      ref: React.useRef(),
      element: element
    };
  });

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

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "blue-bar" },
      React.createElement(
        "div",
        { className: "intro-container" },
        React.createElement(
          "h1",
          null,
          "Digital Health Connections Model"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "light-blue-bar" },
      React.createElement(
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
          ", the Digital Health Connections model is a stack of common services, functions, elements, and terms.The model partitions the information flow into 10 abstraction layers, from the common data elements to the highest level of representation of information occurs, with the Patient Health Manager."
        ),
        React.createElement(
          "h2",
          null,
          "Questions and issues:"
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "This is shown as a linear flow. However, it's not linear or completely hierarchal. Do you have any suggestions on showing non-linearity?"
          ),
          React.createElement(
            "li",
            null,
            "Trauma, surgery, and other medical disciplines may prescribe to parts of this model. We need to show those disciplines in the model."
          )
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
      )
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
              { className: "left-text" },
              "Clinician Health Manager"
            ),
            React.createElement(
              "div",
              { className: "right-text" },
              "Patient Health Manager"
            ),
            React.createElement("div", { className: "lens lens-left-blue" }),
            React.createElement("div", { className: "lens lens-right-red" }),
            React.createElement("div", { className: "lens lens-left-gray" }),
            React.createElement("div", { className: "lens lens-right-gray" })
          )
        ),
        data.stack.map(function (content, key) {
          return React.createElement(LayerGroup, {
            content: content,
            highlighted: highlighted,
            titleLayer: content.title && { title: content.title },
            isLastChild: key === data.stack.length - 1
          });
        })
      ),
      React.createElement(
        "div",
        { className: "description-container" },
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
                  { key2: key2, className: "layer-description" },
                  layer.description
                );
              }
            })
          );
        })
      )
    ),
    React.createElement("div", { className: "blue-bar" })
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));