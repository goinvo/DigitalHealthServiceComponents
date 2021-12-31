import Layer from "./Layer.js";

var LayerGroup = function LayerGroup(_ref) {
  var _ref$isLastChild = _ref.isLastChild,
      isLastChild = _ref$isLastChild === undefined ? false : _ref$isLastChild;

  return React.createElement(
    "div",
    { className: "layer-group " + (!isLastChild ? "has-line-to-next" : "") },
    React.createElement(Layer, { zIndex: 4 }),
    React.createElement(Layer, { zIndex: 3 })
  );
};

export default LayerGroup;