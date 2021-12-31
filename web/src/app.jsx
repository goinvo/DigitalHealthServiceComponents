import LayerGroup from "./components/LayerGroup.js";
import data from "../data/content.js";

const RootElement = () => {
  return (
    <div className="dhsc-container">
      <div className="stack-container">
        {data.stack.map((content, key) => {
          return (
            <LayerGroup
              layers={content.layers}
              isLastChild={key === data.stack.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
