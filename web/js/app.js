import Layer from "./components/Layer.js";

var RootElement = function RootElement() {
  return React.createElement(
    "div",
    { className: "dhsc-container" },
    React.createElement(
      "div",
      { className: "stack-container" },
      React.createElement(Layer, { zIndex: 4 }),
      React.createElement(Layer, { zIndex: 3 })
    )
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));