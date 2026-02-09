// src/components/LayersModal.jsx
export default function LayersModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000, // higher than ItemDetailModal
        padding: 18,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 360,
          maxWidth: "92vw",
          background: "#F7F5EF",
          borderRadius: 22,
          padding: 18,
          position: "relative",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            border: "none",
            background: "transparent",
            fontSize: 20,
            cursor: "pointer",
            color: "#2F2E2A",
            opacity: 0.7,
          }}
        >
          ×
        </button>

        {/* Title */}
        <div style={{ textAlign: "center", paddingTop: 6 }}>
          <div style={{ fontWeight: 900, letterSpacing: 0.6, color: "#2F2E2A" }}>
            {item.nameEN}
          </div>
          <div style={{ marginTop: 6, fontSize: 12, color: "#5A5954" }}>
            {item.nameJP}
          </div>
        </div>

        {/* Image card */}
        <div
          style={{
            marginTop: 14,
            borderRadius: 18,
            background: "rgba(0,0,0,0.04)",
            padding: 14,
            minHeight: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {item.layersImage ? (
            <img
              src={item.layersImage}
              alt={`${item.nameEN} layers`}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          ) : (
            <div style={{ color: "#5A5954", fontSize: 13 }}>
              layersImage が見つかりません（menuData を確認してね）
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
