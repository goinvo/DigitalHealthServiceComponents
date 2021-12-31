var Layer = function Layer(_ref) {
  var zIndex = _ref.zIndex;

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
        "Bioassay Explained"
      ),
      React.createElement(
        "div",
        { className: "subtext" },
        "5th grade level, labs explanation"
      )
    )
  );
};

export default Layer;