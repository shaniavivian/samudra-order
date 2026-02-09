import { useEffect, useRef, useState } from "react";

export default function CategoryAccordion({
  category,
  isOpen,
  onToggle,
  onSelectItem,
}) {
  const panelRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);

  // Smooth open/close by animating measured height
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (isOpen) {
      setPanelHeight(el.scrollHeight);
    } else {
      setPanelHeight(0);
    }
  }, [isOpen, category]);

  return (
    <div className="cat">
      {/* CATEGORY HEADER */}
      <button
        type="button"
        className="cat-head"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="cat-headText">
          {/* EN */}
          <div className="cat-title">
            <span className="cat-title-main">{category.titleEN}</span>
          </div>

          {/* JP */}
          <div className="cat-jp">{category.titleJP}</div>

          {/* DESC */}
          {category.descriptionJP && (
            <div className="cat-desc">{category.descriptionJP}</div>
          )}
        </div>

        {/* Chevron */}
        <span
          className={`cat-chevron ${isOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* ITEMS (animated height) */}
      <div className="cat-panel" style={{ height: panelHeight }}>
        <div
          ref={panelRef}
          className={`cat-panelInner ${isOpen ? "is-open" : ""}`}
        >
          {(category.items ?? []).map((item) => (
            <div key={item.id} className="cat-row">
              {/* left: thumbnail */}
              {item.image ? (
                <img
                  className="cat-thumb"
                  src={item.image}
                  alt={item.nameJP ?? item.nameEN ?? ""}
                  loading="lazy"
                />
              ) : (
                <div
                  className="cat-thumb cat-thumb--empty"
                  aria-hidden="true"
                />
              )}

              {/* name (opens detail) */}
              <button
                type="button"
                className="cat-nameBtn"
                onClick={() => onSelectItem?.(item)}
                aria-label={`Open details for ${item.nameEN}`}
              >
                <span className="cat-nameEN">{item.nameEN}</span>
                {item.nameJP && (
                  <span className="cat-nameJP">{item.nameJP}</span>
                )}
              </button>

              {/* price */}
              <div className="cat-price">
                ¥{Number(item.price).toLocaleString()}
              </div>

              {/* plus (also opens detail) */}
              <button
                type="button"
                className="cat-plus"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelectItem?.(item);
                }}
                aria-label={`Open details for ${item.nameEN}`}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
