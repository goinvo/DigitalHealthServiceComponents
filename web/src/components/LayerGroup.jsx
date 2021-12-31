import Layer from "./Layer.js";

const LayerGroup = ({ layers, isLastChild = false }) => {
  return (
    <div className={`layer-group ${!isLastChild ? "has-line-to-next" : ""}`}>
      {layers.map((content, key) => {
        return <Layer content={content} zIndex={layers.length - key} />;
      })}
    </div>
  );
};

export default LayerGroup;
