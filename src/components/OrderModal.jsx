export default function OrderModal({
  cart,
  onClose,
  onInc,
  onDec,
  onRemove,
  total,
  onSubmit,
}) {
  // cart shape: { [cartKey]: { item, qty } }
  const rows = Object.entries(cart).map(([cartKey, row]) => ({
    cartKey,
    ...row,
  }));

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
          background: "#F7F5EF",
          borderRadius: 22,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* header */}
        <div
          style={{
            padding: "14px 16px",
            background: "rgba(47,46,42,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: 800,
            color: "#2F2E2A",
          }}
        >
          <div style={{ fontSize: 13 }}>ご注文内容の確認</div>
          <button
            onClick={onClose}
            type="button"
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 18,
              opacity: 0.7,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* items */}
        <div style={{ padding: "10px 16px" }}>
          {rows.length === 0 ? (
            <div style={{ padding: "16px 0", fontSize: 13, color: "#5A5954" }}>
              カートは空です
            </div>
          ) : (
            rows.map(({ cartKey, item, qty }) => {
              const thumb = item.img ?? item.image ?? item.photo ?? null;

              return (
                <div
                  key={cartKey}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "84px 1fr",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    alignItems: "center",
                  }}
                >
                  {/* thumb */}
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: 16,
                      background: "rgba(0,0,0,0.04)",
                      overflow: "hidden",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={item.nameJP ?? item.nameEN ?? ""}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    ) : null}
                  </div>

                  {/* right content */}
                  <div style={{ minWidth: 0 }}>
                    {/* top row: name + price */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#2F2E2A",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.nameJP ?? item.nameEN}
                      </div>

                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#2F2E2A",
                          flexShrink: 0,
                        }}
                      >
                        ¥{Number(item.price).toLocaleString()}
                      </div>
                    </div>

                    {/* qty segmented control (smaller + aligned) */}
                    <div
                      style={{
                        marginTop: 10,
                        width: 156,
                        height: 40,
                        display: "grid",
                        gridTemplateColumns: "52px 52px 52px",
                        borderRadius: 14,
                        border: "1px solid rgba(47,46,42,0.22)",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => onDec(cartKey)}
                        aria-label="decrease"
                        style={{
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 18,
                          fontWeight: 900,
                          color: "#2F2E2A",
                          lineHeight: 1,
                        }}
                      >
                        −
                      </button>

                      <div
                        style={{
                          borderLeft: "1px solid rgba(47,46,42,0.12)",
                          borderRight: "1px solid rgba(47,46,42,0.12)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 14,
                          fontWeight: 900,
                          color: "#2F2E2A",
                        }}
                      >
                        {qty}
                      </div>

                      <button
                        type="button"
                        onClick={() => onInc(item)}
                        aria-label="increase"
                        style={{
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 18,
                          fontWeight: 900,
                          color: "#2F2E2A",
                          lineHeight: 1,
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* delete */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button
                        type="button"
                        onClick={() => onRemove(cartKey)}
                        style={{
                          marginTop: 10,
                          border: "none",
                          background: "transparent",
                          color: "#8A887F",
                          fontSize: 14,
                          cursor: "pointer",
                          fontWeight: 700,
                        }}
                      >
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* total */}
        <div style={{ padding: "10px 16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              fontWeight: 800,
              color: "#2F2E2A",
              padding: "12px 12px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(47,46,42,0.06)",
              borderRadius: 12,
            }}
          >
            <div>合計</div>
            <div>
              ¥{Number(total).toLocaleString()}{" "}
              <span style={{ color: "#8A887F", fontSize: 14 }}>（税込）</span>
            </div>
          </div>

          <div style={{ fontSize: 12, color: "#8A887F", marginTop: 10 }}>
            *お支払いはレジでお願いします
          </div>

       <button
  type="button"
  style={{
    marginTop: 14,
    width: "100%",
    padding: "22px 16px",
    borderRadius: 12,
    border: "none",
    borderTop: "1px solid var(--divider)",
    background: "var(--surface)",
    color: "var(--title)",
    fontWeight: 800,
    cursor: rows.length ? "pointer" : "not-allowed",
    opacity: rows.length ? 1 : 0.5,
  }}
  disabled={!rows.length}
  onClick={() => onSubmit?.(cart)}
>
  注文を送信する
</button>

        </div>
      </div>
    </div>
  );
}
