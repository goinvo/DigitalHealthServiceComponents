import LayerGroup from "./components/LayerGroup.js";
import data from "../data/content.js";

var RootElement = function RootElement() {
  return React.createElement(
    "div",
    { className: "dhsc-container" },
    React.createElement(
      "div",
      { className: "stack-container" },
      data.stack.map(function (content, key) {
        return React.createElement(LayerGroup, {
          layers: content.layers,
          isLastChild: key === data.stack.length - 1
        });
      })
    )
  );
};

ReactDOM.render(React.createElement(RootElement, null), document.getElementById("root"));