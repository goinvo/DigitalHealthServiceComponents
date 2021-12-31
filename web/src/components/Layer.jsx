const Layer = ({ zIndex }) => {
  return (
    <div className="layer-container" style={{ zIndex }}>
      <div className="layer" />
      <div className="layer-text-container">
        <div className="main">Bioassay Explained</div>
        <div className="subtext">5th grade level, labs explanation</div>
      </div>
    </div>
  );
};

export default Layer;
