import Layer from "./components/Layer.js";

const RootElement = () => {
  return (
    <div className="dhsc-container">
      <div className="stack-container">
        <Layer zIndex={4} />
        <Layer zIndex={3} />
      </div>
    </div>
  );
};

ReactDOM.render(<RootElement />, document.getElementById("root"));
