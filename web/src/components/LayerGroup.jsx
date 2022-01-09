import Layer from "./Layer.js";

const LayerGroup = ({
  highlighted,
  content,
  titleLayer,
  isLastChild = false,
}) => {
  const { layers } = content;
  return (
    <div className={`layer-group ${!isLastChild ? "has-line-to-next" : ""}`}>
      {titleLayer && (
        <Layer
          icon={content.icon}
          content={titleLayer}
          zIndex={layers.length + 1}
        />
      )}
      {layers.map((content, key) => {
        return (
          <Layer
            highlighted={highlighted}
            content={content}
            zIndex={layers.length - key}
          />
        );
      })}
    </div>
  );
};

export default LayerGroup;
