import { useState } from "react";
import CategoryAccordion from "../components/CategoryAccordion";
import menuData from "../data/menuData";

import trayIcon from "../assets/icons/Order.svg";
import logo from "../assets/logo/logo-icon.svg";
import "../styles/Menu.css";

export default function MenuList({ onSelectItem, addToCart }) {
  const [openId, setOpenId] = useState(null);
  const [mode] = useState("order"); // or keep setMode if you actually toggle it

  const handleToggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  const categories = menuData ?? [];

  return (
    <main className="menu">
      <section className="pageHeader">
        <div className="pageHeader-icon">
          <img src={trayIcon} alt="" />
        </div>
        <h1 className="pageHeader-title">メーニュー</h1>
        <p className="pageHeader-sub">島ごとの味わいを、順にたどる。</p>
      </section>

      <section className="menu-categories" aria-label="Menu categories">
        {mode === "order" ? (
          categories.map((category) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() => handleToggle(category.id)}
              onSelectItem={onSelectItem}
            />
          ))
        ) : (
          <ReorderBlock
            onAddMany={(itemsWithQty) => {
              itemsWithQty.forEach(({ item, qty }) => {
                for (let i = 0; i < qty; i++) addToCart(item);
              });
            }}
            onAddOne={(item) => addToCart(item)}
          />
        )}
      </section>

      <footer className="menu-footer" aria-label="Menu footer">
        <img className="menu-footer-logo" src={logo} alt="logo" />
      </footer>
    </main>
  );
}
