import Layer from "./Layer.js";

const LayerGroup = ({ isLastChild = false }) => {
  return (
    <div className={`layer-group ${!isLastChild ? "has-line-to-next" : ""}`}>
      <Layer zIndex={4} />
      <Layer zIndex={3} />
    </div>
  );
};

export default LayerGroup;
