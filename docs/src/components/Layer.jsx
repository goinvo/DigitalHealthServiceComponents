const Layer = ({
  highlighted,
  content,
  zIndex,
  icon,
  className,
  setActive,
}) => {
  return (
    <div
      ref={content && content.layerRef}
      className={`layer-container no-highlights ${className ? className : ""}
      ${
        content &&
        highlighted &&
        JSON.stringify(content.description) ===
          JSON.stringify(highlighted.element)
          ? "highlighted"
          : ""
      } ${content && content.isCommonDataElements ? "dont-grow" : ""}`}
      style={{ zIndex }}
      onClick={() => {
        if (window.innerWidth < 960 && content && content.description) {
          setActive(content.main);
        } else {
          setActive(undefined);
        }
      }}
    >
      {content && !content.isCommonDataElements && (
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
      )}

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

      {content && !content.isCommonDataElements && content.title && (
        <div className="layer-title">{content.title}</div>
      )}

      {content && !content.isCommonDataElements && content.main && (
        <div className="layer-text-container">
          <div className="main">{content.main}</div>
          <div className="subtext">{content.subtext}</div>
        </div>
      )}

      {/* Special case for common data elements */}
      {content && content.isCommonDataElements && (
        <div className="common-data-elements">
          <div className="has-line-to-next" />
          <div className="layer" />
          <div className="layer-dotted" />
          <div className="layer-text-container">
            <div className="main">{content.main}</div>
            <div className="subtext">{content.subtext}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layer;
