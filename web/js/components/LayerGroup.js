import Layer from "./Layer.js";

var LayerGroup = function LayerGroup() {
  return React.createElement(
    "div",
    { className: "layer-group" },
    React.createElement(Layer, { zIndex: 4 }),
    React.createElement(Layer, { zIndex: 3 })
  );
};

export default LayerGroup;