const Layer = ({ zIndex }) => {
  return (
    <div className="layer-container" style={{ zIndex }}>
      <div className="layer" />
    </div>
  );
};

export default Layer;
