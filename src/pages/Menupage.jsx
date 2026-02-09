import { useState } from "react";
import menuData from "../data/menuData";
import CategoryAccordion from "../components/CategoryAccordion";

export default function MenuPage({ onSelectItem, onAdd }) {
  const [openId, setOpenId] = useState(null);

  function toggleCategory(id) {
    setOpenId((cur) => (cur === id ? null : id));
  }

  return (
    <CategoryAccordion
      categories={menuData}
      openId={openId}
      onToggle={toggleCategory}
      onAdd={onAdd}
    />
  );
}
