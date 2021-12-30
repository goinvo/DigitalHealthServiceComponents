import Layer from "./Layer.js";

const LayerGroup = () => {
  return (
    <div className="layer-group">
      <Layer zIndex={4} />
      <Layer zIndex={3} />
    </div>
  );
};

export default LayerGroup;
