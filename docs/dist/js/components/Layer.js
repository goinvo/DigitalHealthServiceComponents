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
      ref: content && content.layerRef,
      className: "layer-container no-highlights " + (className ? className : "") + "\n      " + (content && highlighted && highlighted.main === content.main ? "highlighted" : "") + " " + (content && content.isCommonDataElements ? "dont-grow" : ""),
      style: { zIndex: zIndex },
      onClick: function onClick() {
        if (window.innerWidth < 960 && content && content.description) {
          setActive(content.main);
        } else {
          setActive(undefined);
        }
      }
    },
    content && !content.isCommonDataElements && React.createElement(
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
      null,
      React.createElement(
        "div",
        { className: "grid-label-shm" },
        "Stakeholder Health Manager"
      ),
      React.createElement(
        "div",
        { className: "grid-label" },
        "Health Summary"
      )
    ),
    icon && React.createElement(
      "div",
      { className: "icon-container" },
      React.createElement("img", { className: "icon", src: "./dist" + icon })
    ),
    content && !content.isCommonDataElements && content.title && React.createElement(
      "div",
      { className: "layer-title" },
      content.title
    ),
    content && !content.isCommonDataElements && content.main && React.createElement(
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
    ),
    content && content.isCommonDataElements && React.createElement(
      "div",
      { className: "common-data-elements" },
      React.createElement("div", { className: "has-line-to-next" }),
      React.createElement("div", { className: "layer" }),
      React.createElement("div", { className: "layer-dotted" }),
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
    )
  );
};

export default Layer;