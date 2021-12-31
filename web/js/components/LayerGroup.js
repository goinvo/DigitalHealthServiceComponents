import Layer from "./Layer.js";

var LayerGroup = function LayerGroup(_ref) {
  var layers = _ref.layers,
      _ref$isLastChild = _ref.isLastChild,
      isLastChild = _ref$isLastChild === undefined ? false : _ref$isLastChild;

  return React.createElement(
    "div",
    { className: "layer-group " + (!isLastChild ? "has-line-to-next" : "") },
    layers.map(function (content, key) {
      return React.createElement(Layer, { content: content, zIndex: layers.length - key });
    })
  );
};

export default LayerGroup;