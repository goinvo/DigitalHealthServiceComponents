var Layer = function Layer(_ref) {
  var highlighted = _ref.highlighted,
      content = _ref.content,
      zIndex = _ref.zIndex,
      icon = _ref.icon;

  return React.createElement(
    "div",
    {
      className: "layer-container " + (highlighted && JSON.stringify(content.description) === JSON.stringify(highlighted.element) ? "highlighted" : ""),
      style: { zIndex: zIndex }
    },
    React.createElement("div", { className: "layer" }),
    icon && React.createElement(
      "div",
      { className: "icon-container" },
      React.createElement("img", { className: "icon", src: "/dist" + icon })
    ),
    content.title && React.createElement(
      "div",
      { className: "layer-title" },
      content.title
    ),
    content.main && React.createElement(
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