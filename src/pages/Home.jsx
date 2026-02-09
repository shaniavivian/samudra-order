// src/pages/Home.jsx
import orderIcon from "../assets/icons/Order.svg";
import coffeeBeanIcon from "../assets/icons/coffee-bean.svg";
import storyIcon from "../assets/icons/story-icon.svg";
import samudraLogo from "../assets/logo/logo-icon.svg";

import "../styles/Home.css";

export default function Home({ goTo }) {
  const navItems = [
    {
      id: "menu",
      title: "メニュー",
      sub: "パフェとドリンク",
      icon: orderIcon,
    },
    {
      id: "beans",
      title: "コーヒー豆",
      sub: "セレクトビーンズ",
      icon: coffeeBeanIcon,
    },
    {
      id: "islands",
      title: "ストーリー",
      sub: "豆知識と背景",
      icon: storyIcon,
    },
  ];

  return (
    <main className="home">
      <div className="home-inner">
        {/* HERO */}
        <header className="home-hero">
          <div className="home-brand">
            <img className="home-brandLogo" src={samudraLogo} alt="SAMUDRA" />
          </div>

          <p className="home-tagline">
            インドネシアの群島を、<br />
            味覚と空間で“静かに旅する”カフェ。
          </p>
        </header>

        {/* NAV */}
        <nav className="home-list" aria-label="Home Navigation">
          {navItems.map((it) => (
            <button
              key={it.id}
              type="button"
              className="home-row"
              onClick={() => goTo(it.id)}
            >
              <span className="home-row-icon" aria-hidden="true">
                <img src={it.icon} alt="" />
              </span>

              <span className="home-row-text">
                <span className="home-row-title">{it.title}</span>
                <span className="home-row-sub">{it.sub}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
