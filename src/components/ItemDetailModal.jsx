import { useEffect, useMemo, useState } from "react";
import chevronDown from "../assets/icons/chevron-side.svg";
import chevronUp from "../assets/icons/chevron-up.svg";
import xMark from "../assets/icons/x-mark.svg";

export default function ItemDetailModal({ item, onClose, onAdd, onViewLayers }) {
  if (!item) return null;

  // Coffee if it has bean options
  const isCoffee = (item?.beanOptions?.length ?? 0) > 0;

  // Accordion
  const [openTaste, setOpenTaste] = useState(true);
  const [openAllergy, setOpenAllergy] = useState(false);

  // Options (saved to cart)
  const [beanType, setBeanType] = useState("house"); // bean option id
  const [temp, setTemp] = useState("iced"); // "iced" | "hot"
  const [sugar, setSugar] = useState("no-sugar"); // "no-sugar" | "sugar"

  // Reset when modal opens / item changes
  useEffect(() => {
    setOpenTaste(true);
    setOpenAllergy(false);
    setTemp("iced");
    setSugar("no-sugar");

    if (item?.beanOptions?.length) {
      setBeanType(item.beanOptions[0]?.id ?? "house");
    } else {
      setBeanType("house");
    }
  }, [item?.id]);

  const selectedBean = useMemo(() => {
    if (!isCoffee) return null;
    return (
      item.beanOptions?.find((b) => b.id === beanType) ??
      item.beanOptions?.[0] ??
      null
    );
  }, [isCoffee, item, beanType]);

  // This is the object App.jsx should receive in addToCart()
  const addPayload = useMemo(() => {
    const options = { temp, sugar, beanType };

    const cartKey = isCoffee
      ? `${item.id}__bean__${beanType}__temp__${temp}__sugar__${sugar}`
      : `${item.id}__temp__${temp}__sugar__${sugar}`;

    const base = {
      ...item,
      options,
      cartKey,
    };

    if (isCoffee && selectedBean) {
      return {
        ...base,
        selectedBean: {
          id: selectedBean.id,
          label: selectedBean.label,
          note: selectedBean.note,
          icon: selectedBean.icon,
        },
      };
    }

    return base;
  }, [isCoffee, item, selectedBean, beanType, temp, sugar]);

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
        zIndex: 1400,
        padding: 18,
      }}
    >
      {/* CARD */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 380,
          maxWidth: "92vw",
          maxHeight: "86vh",
          background: "var(--bg)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "18px 18px 12px",
            position: "relative",
            textAlign: "center",
            flex: "0 0 auto",
          }}
        >
          <div style={{ paddingLeft: 34, paddingRight: 34 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "var(--title)" }}>
              {item.nameEN}
            </div>

            {item.nameJP && (
              <div
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: "var(--subtext)",
                  fontWeight: 700,
                }}
              >
                {item.nameJP}
              </div>
            )}

            {!isCoffee && (
              <div
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: "var(--muted)",
                  fontWeight: 700,
                  letterSpacing: ".02em",
                }}
              >
                島の物語から生まれた一杯
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 6,
              opacity: 0.8,
            }}
          >
            <img src={xMark} alt="Close" style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* SCROLL BODY */}
        <div
          style={{
            padding: "0 18px 18px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            flex: 1,
          }}
        >
          {/* Image */}
          {item.image && (
            <div
              style={{
                width: "100%",
                borderRadius: "var(--r-md)",
                background: "var(--cardCool)",
                overflow: "hidden",
                padding: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "contain",
                  transform: "scale(1.10)",
                  transformOrigin: "center",
                  display: "block",
                }}
              />
            </div>
          )}

          {/* Description */}
          {item.descriptionJP && (
            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                fontSize: 14,
                lineHeight: 1.75,
                color: "var(--subtext)",
                whiteSpace: "normal",
                wordBreak: "keep-all",
                overflowWrap: "break-word",
                lineBreak: "strict",
              }}
            >
              {item.descriptionJP}
            </p>
          )}

          {/* COFFEE: Bean selector + Temp/Sugar */}
          {isCoffee && (
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: "var(--text)" }}>
                豆を選ぶ（島）
              </div>

              <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
                {item.beanOptions?.map((b) => {
                  const active = b.id === beanType;

                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBeanType(b.id)}
                      aria-label={`Select bean ${b.label}`}
                      style={{
                        border: active
                          ? "1px solid rgba(29,57,73,0.55)"
                          : "1px solid var(--divider)",
                        background: active ? "var(--btnGhostHover)" : "transparent",
                        borderRadius: "var(--r-sm)",
                        padding: "12px 12px",
                        cursor: "pointer",
                        display: "grid",
                        gridTemplateColumns: "28px 1fr",
                        columnGap: 10,
                        alignItems: "center",
                        textAlign: "left",
                      }}
                    >
                      {b.icon ? (
                        <img
                          src={b.icon}
                          alt=""
                          style={{ width: 24, height: 24, opacity: 0.9 }}
                        />
                      ) : (
                        <div style={{ width: 24, height: 24 }} />
                      )}

                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 900, color: "var(--text)", fontSize: 14 }}>
                          {b.label}
                        </div>

                        {b.note && (
                          <div style={{ marginTop: 3, fontSize: 12, color: "var(--muted)" }}>
                            {b.note}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div style={{ marginTop: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: "var(--text)" }}>
                  温度 / 砂糖
                </div>

                {/* Temperature */}
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 800 }}>
                    温度
                  </div>

                  <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
                    <button
                      type="button"
                      onClick={() => setTemp("iced")}
                      style={{
                        flex: 1,
                        padding: "12px 12px",
                        borderRadius: "var(--r-sm)",
                        cursor: "pointer",
                        border:
                          temp === "iced"
                            ? "1px solid rgba(29,57,73,0.55)"
                            : "1px solid var(--divider)",
                        background: temp === "iced" ? "var(--btnGhostHover)" : "transparent",
                        fontWeight: 900,
                        color: "var(--text)",
                      }}
                    >
                      ICE
                    </button>

                    <button
                      type="button"
                      onClick={() => setTemp("hot")}
                      style={{
                        flex: 1,
                        padding: "12px 12px",
                        borderRadius: "var(--r-sm)",
                        cursor: "pointer",
                        border:
                          temp === "hot"
                            ? "1px solid rgba(29,57,73,0.55)"
                            : "1px solid var(--divider)",
                        background: temp === "hot" ? "var(--btnGhostHover)" : "transparent",
                        fontWeight: 900,
                        color: "var(--text)",
                      }}
                    >
                      HOT
                    </button>
                  </div>
                </div>

                {/* Sugar */}
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 800 }}>
                    砂糖
                  </div>

                  <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
                    <button
                      type="button"
                      onClick={() => setSugar("no-sugar")}
                      style={{
                        flex: 1,
                        padding: "12px 12px",
                        borderRadius: "var(--r-sm)",
                        cursor: "pointer",
                        border:
                          sugar === "no-sugar"
                            ? "1px solid rgba(29,57,73,0.55)"
                            : "1px solid var(--divider)",
                        background:
                          sugar === "no-sugar" ? "var(--btnGhostHover)" : "transparent",
                        fontWeight: 900,
                        color: "var(--text)",
                      }}
                    >
                      なし
                    </button>

                    <button
                      type="button"
                      onClick={() => setSugar("sugar")}
                      style={{
                        flex: 1,
                        padding: "12px 12px",
                        borderRadius: "var(--r-sm)",
                        cursor: "pointer",
                        border:
                          sugar === "sugar"
                            ? "1px solid rgba(29,57,73,0.55)"
                            : "1px solid var(--divider)",
                        background: sugar === "sugar" ? "var(--btnGhostHover)" : "transparent",
                        fontWeight: 800,
                        color: "var(--text)",
                      }}
                    >
                      あり
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PARFAIT: Layers button */}
          {!isCoffee && item.layersImage && (
            <button
              type="button"
              onClick={() => onViewLayers?.(item)}
              style={{
                marginTop: 16,
                width: "100%",
                padding: 14,
                borderRadius: "var(--r-md)",
                border: "1px solid var(--divider)",
                background: "var(--btnGhostBg)",
                fontWeight: 900,
                color: "var(--btnGhostText)",
                cursor: "pointer",
              }}
            >
              パフェ層を見る
            </button>
          )}

          {/* Accordion: taste */}
          <div style={{ marginTop: 16, borderTop: "1px solid var(--line)" }}>
            <button
              type="button"
              onClick={() => setOpenTaste((v) => !v)}
              style={{
                width: "100%",
                padding: "14px 0",
                border: "none",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <div style={{ fontWeight: 900, color: "var(--text)" }}>味わいの目安</div>
              <img
                src={openTaste ? chevronUp : chevronDown}
                alt=""
                style={{ width: 18, height: 18, opacity: 0.8 }}
              />
            </button>

            {openTaste && (
              <div
                style={{
                  paddingBottom: 12,
                  fontSize: 13,
                  color: "var(--subtext)",
                  lineHeight: 1.6,
                }}
              >
                {item.tasteJP ?? "—"}

                {isCoffee && selectedBean?.note ? (
                  <div style={{ marginTop: 8, color: "var(--muted)" }}>
                    <span style={{ fontWeight: 900, color: "var(--text)" }}>
                      選択した豆：
                    </span>
                    {selectedBean.label}（{selectedBean.note}）
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Accordion: allergy */}
          <div style={{ borderTop: "1px solid var(--line)" }}>
            <button
              type="button"
              onClick={() => setOpenAllergy((v) => !v)}
              style={{
                width: "100%",
                padding: "14px 0",
                border: "none",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <div style={{ fontWeight: 900, color: "var(--text)" }}>アレルギー</div>
              <img
                src={openAllergy ? chevronUp : chevronDown}
                alt=""
                style={{ width: 18, height: 18, opacity: 0.8 }}
              />
            </button>

            {openAllergy && (
              <div
                style={{
                  paddingBottom: 12,
                  fontSize: 13,
                  color: "var(--subtext)",
                  lineHeight: 1.6,
                }}
              >
                {item.allergyJP ?? "—"}
              </div>
            )}
          </div>
        </div>

        {/* STICKY CTA */}
        <div
          style={{
            padding: 18,
            background: "var(--bg)",
            borderTop: "1px solid var(--line)",
            flex: "0 0 auto",
          }}
        >
          <button
            type="button"
            onClick={() => onAdd?.(addPayload)}
            style={{
              width: "100%",
              padding: 16,
              borderRadius: "var(--r-lg)",
              border: "none",
              background: "var(--btnBg)",
              color: "var(--btnText)",
              fontWeight: 900,
              fontSize: 16,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--btnBgHover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--btnBg)")
            }
          >
            カートに追加（¥{Number(item.price || 0).toLocaleString()}）
          </button>
        </div>
      </div>
    </div>
  );
}
