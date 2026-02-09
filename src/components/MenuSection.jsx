import menuData from "../data/menuData";

export default function MenuSection() {
  return (
    <div>
      {menuData.map((category) => (
        <div key={category.id} style={{ marginBottom: 24 }}>
          <h2>{category.titleJP}</h2>
          <p style={{ opacity: 0.7 }}>{category.titleEN}</p>

          {category.items.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{item.nameJP}</strong>
              <div style={{ fontSize: 14, opacity: 0.7 }}>
                {item.nameEN} · ¥{item.price}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
