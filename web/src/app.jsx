import LayerGroup from "./components/LayerGroup.js";

const RootElement = () => {
  return (
    <div className="dhsc-container">
      <div className="stack-container">
        <LayerGroup />
        <LayerGroup />
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
