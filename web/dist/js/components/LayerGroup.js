import Layer from "./Layer.js";

var LayerGroup = function LayerGroup(_ref) {
  var highlighted = _ref.highlighted,
      content = _ref.content,
      titleLayer = _ref.titleLayer,
      _ref$isLastChild = _ref.isLastChild,
      isLastChild = _ref$isLastChild === undefined ? false : _ref$isLastChild;
  var layers = content.layers;

  return React.createElement(
    "div",
    { className: "layer-group " + (!isLastChild ? "has-line-to-next" : "") },
    titleLayer && React.createElement(Layer, {
      icon: content.icon,
      content: titleLayer,
      zIndex: layers.length + 1
    }),
    content.show2D && React.createElement(
      "div",
      { className: "array" },
      React.createElement(Layer, { className: "grid", zIndex: layers.length + 1 })
    ),
    layers.map(function (content, key) {
      return React.createElement(Layer, {
        highlighted: highlighted,
        content: content,
        zIndex: layers.length - key
      });
    })
  );
};

export default LayerGroup;