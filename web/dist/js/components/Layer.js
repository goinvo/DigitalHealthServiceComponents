var Layer = function Layer(_ref) {
  var highlighted = _ref.highlighted,
      content = _ref.content,
      zIndex = _ref.zIndex,
      icon = _ref.icon,
      className = _ref.className,
      setActive = _ref.setActive;

  return React.createElement(
    "div",
    {
      className: "layer-container no-highlights " + className + " " + (content && highlighted && JSON.stringify(content.description) === JSON.stringify(highlighted.element) ? "highlighted" : ""),
      style: { zIndex: zIndex },
      onClick: function onClick() {
        if (content && content.description) {
          setActive(content.main);
        } else {
          setActive(undefined);
        }
      }
    },
    React.createElement(
      "div",
      { className: "layer" },
      className === "grid" && React.createElement(
        "div",
        { className: "grid-container" },
        React.createElement("div", { className: "cell", style: { opacity: 0.05 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.05 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.1 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.1 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.3 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.05 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.05 } }),
        React.createElement("div", { className: "cell", style: { opacity: 0.1 } })
      )
    ),
    className && className === "grid" && React.createElement(
      "div",
      { className: "grid-label" },
      "Health Summary"
    ),
    icon && React.createElement(
      "div",
      { className: "icon-container" },
      React.createElement("img", { className: "icon", src: "./dist" + icon })
    ),
    content && content.title && React.createElement(
      "div",
      { className: "layer-title" },
      content.title
    ),
    content && content.main && React.createElement(
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