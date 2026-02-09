// src/components/GalleryModal.jsx
import { useEffect, useMemo, useState } from "react";

export default function GalleryModal({ open, images = [], startIndex = 0, onClose }) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    if (open) setIdx(startIndex || 0);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, idx, safeImages.length]);

  if (!open) return null;
  if (!safeImages.length) return null;

  const clamp = (n) => Math.max(0, Math.min(safeImages.length - 1, n));
  const prev = () => setIdx((cur) => clamp(cur - 1));
  const next = () => setIdx((cur) => clamp(cur + 1));

  const cur = safeImages[idx];

  // basic swipe
  let startX = 0;
  const onTouchStart = (e) => {
    startX = e.touches?.[0]?.clientX ?? 0;
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX ?? 0;
    const dx = endX - startX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) prev();
    else next();
  };

  const clickBackdrop = (e) => {
    if (e.target?.dataset?.backdrop === "true") onClose?.();
  };

  return (
    <div className="gmodal" data-backdrop="true" onMouseDown={clickBackdrop}>
      <div className="gmodal-sheet" role="dialog" aria-modal="true" aria-label="Gallery">
        <header className="gmodal-header">
          <div className="gmodal-titleWrap">
            <div className="gmodal-kicker">GALLERY</div>
            <div className="gmodal-counter">
              {idx + 1} / {safeImages.length}
            </div>
          </div>

          <button type="button" className="gmodal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="gmodal-media"
             onTouchStart={onTouchStart}
             onTouchEnd={onTouchEnd}>
          <button
            type="button"
            className="gmodal-nav gmodal-prev"
            onClick={prev}
            aria-label="Previous image"
            disabled={idx === 0}
          >
            ‹
          </button>

          <figure className="gmodal-figure">
            <img className="gmodal-img" src={cur.src} alt={cur.alt || ""} />
          </figure>

          <button
            type="button"
            className="gmodal-nav gmodal-next"
            onClick={next}
            aria-label="Next image"
            disabled={idx === safeImages.length - 1}
          >
            ›
          </button>
        </div>

        {(cur.caption || cur.sub) && (
          <div className="gmodal-caption">
            {cur.caption && <div className="gmodal-capTitle">{cur.caption}</div>}
            {cur.sub && <div className="gmodal-capSub">{cur.sub}</div>}
          </div>
        )}

        {/* optional: small thumb dots (super minimal) */}
        <div className="gmodal-dots" aria-hidden="true">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={"gmodal-dot" + (i === idx ? " is-active" : "")}
              onClick={() => setIdx(i)}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
