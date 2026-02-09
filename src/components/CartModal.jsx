export default function CartModal({ cart, total, onClose, onInc, onDec }) {
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
        zIndex: 1300,
        padding: 18,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 360,
          maxWidth: "92vw",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#F7F5EF",
          borderRadius: 22,
          padding: 18,
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={onClose}
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

        <div style={{ fontWeight: 800, fontSize: 18, color: "#2F2E2A" }}>
          ご注文内容の確認
        </div>

        {cart.length === 0 ? (
          <p style={{ marginTop: 14, color: "#5A5954" }}>カートは空です</p>
        ) : (
          <div style={{ marginTop: 14 }}>
            {cart.map((x) => (
              <div
                key={x.id}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {x.image && (
                  <img
                    src={x.image}
                    alt=""
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 14,
                      objectFit: "cover",
                      background: "rgba(0,0,0,0.03)",
                    }}
                  />
                )}

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, color: "#2F2E2A" }}>{x.nameJP}</div>
                  <div style={{ fontSize: 12, color: "#5A5954" }}>{x.nameEN}</div>
                  <div style={{ fontWeight: 800, marginTop: 6, color: "#2F2E2A" }}>
                    ¥{Number(x.price).toLocaleString()}
                  </div>
                </div>

                {/* qty controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => onDec(x.id)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.18)",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 16,
                      color: "#2F2E2A",
                    }}
                  >
                    −
                  </button>

                  <div style={{ width: 18, textAlign: "center", fontWeight: 800, color: "#2F2E2A" }}>
                    {x.qty}
                  </div>

                  <button
                    type="button"
                    onClick={() => onInc(x.id)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.18)",
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 16,
                      color: "#2F2E2A",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 14,
                fontWeight: 900,
                color: "#2F2E2A",
              }}
            >
              <span>合計</span>
              <span>¥{Number(total).toLocaleString()}</span>
            </div>

            <button
  type="button"
  style={{
    marginTop: 14,
    width: "100%",
    padding: "22px 16px",
    borderRadius: "0 0 var(--r-lg) var(--r-lg)", // matches the modal bottom corners
    border: "none",
    borderTop: "1px solid var(--divider)",      // the thin line like your screenshot
    background: "var(--surface)",               // same as modal surface
    color: "var(--title)",                      // bold dark ink
    fontWeight: 900,
    fontSize: 18,
    letterSpacing: "0.02em",
    cursor: "pointer",
  }}
>
  注文を送信する
</button>

          </div>
        )}
      </div>
    </div>
  );
}
