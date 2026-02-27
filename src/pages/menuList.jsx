import { useEffect, useMemo, useState } from "react";
import CategoryAccordion from "../components/CategoryAccordion";
import menuData from "../data/menuData";

import trayIcon from "../assets/icons/Order.svg";
import logo from "../assets/logo/logo-icon.svg";
import "../styles/Menu.css";

export default function MenuList({ onSelectItem, addToCart }) {
  const categories = useMemo(() => menuData ?? [], []);

  // Start closed, then open the first category as soon as we have data
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (openId == null && categories.length > 0) {
      setOpenId(categories[0].id);
    }
  }, [openId, categories]);

  // Always keep one open
  const handleToggle = (id) => {
    setOpenId(id);
  };

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
        {categories.map((category) => (
          <CategoryAccordion
            key={category.id}
            category={category}
            isOpen={openId === category.id}
            onToggle={() => handleToggle(category.id)}
            onSelectItem={onSelectItem}
          />
        ))}
      </section>

      <footer className="menu-footer" aria-label="Menu footer">
        <img className="menu-footer-logo" src={logo} alt="logo" />
      </footer>
    </main>
  );
}