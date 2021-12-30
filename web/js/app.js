import LayerGroup from "./components/LayerGroup.js";

var RootElement = function RootElement() {
  return React.createElement(
    "div",
    { className: "dhsc-container" },
    React.createElement(
      "div",
      { className: "stack-container" },
      React.createElement(LayerGroup, null),
      React.createElement(LayerGroup, null)
    )
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));