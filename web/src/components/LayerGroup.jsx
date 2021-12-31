import Layer from "./Layer.js";

const LayerGroup = ({ layers, titleLayer, isLastChild = false }) => {
  return (
    <div className={`layer-group ${!isLastChild ? "has-line-to-next" : ""}`}>
      {titleLayer && <Layer content={titleLayer} zIndex={layers.length + 1} />}
      {layers.map((content, key) => {
        return <Layer content={content} zIndex={layers.length - key} />;
      })}
    </div>
  );
};

export default LayerGroup;
