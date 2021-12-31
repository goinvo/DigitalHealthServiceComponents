const Layer = ({ highlighted, content, zIndex }) => {
  return (
    <div
      className={`layer-container ${
        highlighted &&
        JSON.stringify(content.description) ===
          JSON.stringify(highlighted.element)
          ? "highlighted"
          : ""
      }`}
      style={{ zIndex }}
    >
      <div className="layer" />
      {content.title && <div className="layer-title">{content.title}</div>}
      {content.main && (
        <div className="layer-text-container">
          <div className="main">{content.main}</div>
          <div className="subtext">{content.subtext}</div>
        </div>
      )}
    </div>
  );
};

export default Layer;
