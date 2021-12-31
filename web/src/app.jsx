import LayerGroup from "./components/LayerGroup.js";

const RootElement = () => {
  return (
    <div className="dhsc-container">
      <div className="stack-container">
        <LayerGroup />
        <LayerGroup isLastChild={true} />
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
