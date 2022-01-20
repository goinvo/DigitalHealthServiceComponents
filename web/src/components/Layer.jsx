const Layer = ({ highlighted, content, zIndex, icon, className }) => {
  return (
    <div
      className={`layer-container ${className} ${
        content &&
        highlighted &&
        JSON.stringify(content.description) ===
          JSON.stringify(highlighted.element)
          ? "highlighted"
          : ""
      }`}
      style={{ zIndex }}
    >
      {
        <div className="layer">
          {className === "grid" && (
            <div className="grid-container">
              <div className="cell" style={{ opacity: 0.05 }} />
              <div className="cell" style={{ opacity: 0.05 }} />
              <div className="cell" style={{ opacity: 0.1 }} />
              <div className="cell" style={{ opacity: 0.1 }} />
              <div className="cell" style={{ opacity: 0 }} />
              <div className="cell" style={{ opacity: 0.3 }} />
              <div className="cell" style={{ opacity: 0.05 }} />
              <div className="cell" style={{ opacity: 0.05 }} />
              <div className="cell" style={{ opacity: 0.1 }} />
            </div>
          )}
        </div>
      }

      {className && className === "grid" && (
        <div>
          <div className="grid-label-shm">Stakeholder Health Manager</div>
          <div className="grid-label">Health Summary</div>
        </div>
      )}

      {icon && (
        <div className="icon-container">
          <img className="icon" src={`./dist${icon}`} />
        </div>
      )}

      {content && content.title && (
        <div className="layer-title">{content.title}</div>
      )}

      {content && content.main && (
        <div className="layer-text-container">
          <div className="main">{content.main}</div>
          <div className="subtext">{content.subtext}</div>
        </div>
      )}
    </div>
  );
};

export default Layer;
