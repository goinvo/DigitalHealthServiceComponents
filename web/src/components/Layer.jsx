const Layer = ({ content, zIndex }) => {
  return (
    <div className="layer-container" style={{ zIndex }}>
      <div className="layer" />
      <div className="layer-text-container">
        <div className="main">{content.main}</div>
        <div className="subtext">{content.subtext}</div>
      </div>
    </div>
  );
};

export default Layer;
