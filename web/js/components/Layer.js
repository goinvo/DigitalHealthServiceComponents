var Layer = function Layer(_ref) {
  var content = _ref.content,
      zIndex = _ref.zIndex;

  return React.createElement(
    "div",
    { className: "layer-container", style: { zIndex: zIndex } },
    React.createElement("div", { className: "layer" }),
    React.createElement(
      "div",
      { className: "layer-text-container" },
      React.createElement(
        "div",
        { className: "main" },
        content.main
      ),
      React.createElement(
        "div",
        { className: "subtext" },
        content.subtext
      )
    )
  );
};

export default Layer;