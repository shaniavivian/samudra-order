import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function CategoryAccordion({
  category,
  isOpen,
  onToggle,
  onSelectItem,
}) {
  const panelRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);

  const measure = () => {
    const el = panelRef.current;
    if (!el) return;
    setPanelHeight(isOpen ? el.scrollHeight : 0);
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, category]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
          <div className="cat-title">
            <span className="cat-title-main">{category.titleEN}</span>
          </div>

          <div className="cat-jp">{category.titleJP}</div>

          {category.descriptionJP && (
            <div className="cat-desc">{category.descriptionJP}</div>
          )}
        </div>

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
              {/* thumbnail */}
              {item.image ? (
                <img
                  className="cat-thumb"
                  src={item.image}
                  alt={item.nameJP ?? item.nameEN ?? ""}
                  loading="lazy"
                  decoding="async"
                  width="72"
                  height="72"
                  onLoad={measure}
                />
              ) : (
                <div className="cat-thumb cat-thumb--empty" aria-hidden="true" />
              )}

              {/* name (opens detail) */}
              <button
                type="button"
                className="cat-nameBtn"
                onClick={() => onSelectItem?.(item)}
                aria-label={`${item.nameEN} の詳細を開く`}
              >
                <span className="cat-nameEN">{item.nameEN}</span>
                {item.nameJP && <span className="cat-nameJP">{item.nameJP}</span>}
              </button>

              {/* price */}
              <div className="cat-price">
                ¥{Number(item.price).toLocaleString()}
              </div>

              {/* plus (also opens detail) */}
              <button
                type="button"
                className="btnPlus"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelectItem?.(item);
                }}
                aria-label={`${item.nameEN} の詳細を開く`}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}