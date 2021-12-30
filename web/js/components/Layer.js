var Layer = function Layer(_ref) {
  var zIndex = _ref.zIndex;

  return React.createElement(
    "div",
    { className: "layer-container", style: { zIndex: zIndex } },
    React.createElement("div", { className: "layer" })
  );
};

export default Layer;