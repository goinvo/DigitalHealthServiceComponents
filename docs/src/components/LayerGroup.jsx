import Layer from "./Layer.js";

const LayerGroup = ({
  highlighted,
  content,
  titleLayer,
  setActive,
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
          setActive={setActive}
        />
      )}
      {content.show2D && (
        <div className="array">
          <Layer
            className={"grid"}
            zIndex={layers.length + 1}
            setActive={setActive}
          />
        </div>
      )}
      {layers.map((layerContent, key) => {
        return (
          <Layer
            highlighted={highlighted}
            content={layerContent}
            zIndex={layers.length - key}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
};

export default LayerGroup;
