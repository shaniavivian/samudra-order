import { useState } from "react";
import beansData from "../data/beanData";
import CoffeeBeanIcon from "../assets/icons/coffee-bean.svg";
import BeanDetailModal from "../components/BeanDetailModal";
import logo from "../assets/logo/logo-icon.svg";
import "../styles/Beans.css";

export default function BeansPage({ onBack, onAdd }) {
  const [selectedBean, setSelectedBean] = useState(null);

  return (
    <main className="beans">
      <section className="pageHeader">
        <div className="pageHeader-icon">
          <img src={CoffeeBeanIcon} alt="" />
        </div>

        <h1 className="pageHeader-title">コーヒー豆</h1>
        <p className="pageHeader-sub">
          島の気候と土壌が育てた、<br />それぞれ異なる個性のコーヒー豆。
        </p>
      </section>

      <div className="beans-section">セレクト商品</div>

      <section className="beans-grid">
        {beansData.map((bean) => (
          <div
            key={bean.id}
            className="bean-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedBean(bean)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedBean(bean);
              if (e.key === " ") {
                e.preventDefault();
                setSelectedBean(bean);
              }
            }}
          >
            <div className="bean-media">
              <img src={bean.img} alt={bean.nameJP} className="bean-img" />
            </div>

            <div className="bean-info">
              <div className="bean-titleRow">
                <span className="bean-name">{bean.nameJP}</span>

                <button
                  className="cat-plus bean-plus"
                  type="button"
                  aria-label="詳細を見る"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBean(bean);
                  }}
                >
                  ＋
                </button>
              </div>

              <span className="bean-price">
                ¥{bean.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}

        <div className="bean-card bean-card--empty" aria-hidden="true">
          <div className="bean-media" />
          <div className="bean-info" />
        </div>
      </section>

      <BeanDetailModal
        bean={selectedBean}
        onClose={() => setSelectedBean(null)}
        onAdd={(bean) => {
          onAdd?.(bean);
          setSelectedBean(null);
        }}
      />

      <footer className="menu-footer" aria-label="Menu footer">
        <img className="menu-footer-logo" src={logo} alt="logo" />
      </footer>
    </main>
  );
}
