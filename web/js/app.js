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
      highlighted = _React$useState6[0],
      setHighlighted = _React$useState6[1];

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
      var scrollPosition = stackRef.current.getBoundingClientRect().top;
      setFixed(scrollPosition < 30);
      setScroll(window.scrollY);
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
    };
    document.addEventListener("scroll", handleScroll);

    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "blue-bar" },
      "Placeholder box"
    ),
    React.createElement(
      "div",
      { className: "dhsc-container", ref: stackRef },
      React.createElement(
        "div",
        {
          className: "stack-container " + (fixed ? "fixed" : "")
          // style={{ top: `${scroll}px` }}
        },
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
        descriptions.map(function (description) {
          return React.createElement(
            "div",
            {
              className: "layer-description " + (highlighted !== undefined && JSON.stringify(highlighted.element) === JSON.stringify(description.element) ? "highlighted" : ""),
              ref: description.ref
            },
            description.element
          );
        })
      )
    )
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));