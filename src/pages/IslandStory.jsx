// src/pages/IslandStory.jsx
import islands from "../data/islandsData";
import storyIcon from "../assets/icons/story-icon.svg";
import logo from "../assets/logo/logo-icon.svg";
import useReveal from "../hooks/useReveal";
import "../styles/Islands.css";

import sumatraPattern from "../assets/patterns/pattern-sumatra.png";
import jawaPattern from "../assets/patterns/pattern-jawa.png";
import kalimantanPattern from "../assets/patterns/pattern-kalimantan.png";
import sulawesiPattern from "../assets/patterns/pattern-sulawesi.png";
import papuaPattern from "../assets/patterns/pattern-papua.png";

export default function IslandStory() {
  useReveal();

  // ✅ ONLY these words get accent color
  const ACCENT = {
    SAMUDRA: "#B0683C",
    パフェ: "#C18940",
    "５つの島": "#466F78",
    読み方: "#787849",
  };

  const Accent = ({ word, children }) => (
    <span className="accent" style={{ color: ACCENT[word], fontWeight: 700 }}>
      {children}
    </span>
  );

  // ✅ Pattern swatches for Section 04 (packaging logic)
  const PATTERNS = [
    { key: "火", name: "スマトラ", img: sumatraPattern, desc: "火山のエネルギーを感じるリズム。" },
    { key: "土", name: "ジャワ", img: jawaPattern, desc: "暮らしが積み重なる、安定した構造。" },
    { key: "原", name: "カリマンタン", img: kalimantanPattern, desc: "原生の気配を残す、削ぎ落とした模様。" },
    { key: "森", name: "スラウェシ", img: sulawesiPattern, desc: "奥行きと重なりを感じる、有機的な流れ。" },
    { key: "海", name: "パプア", img: papuaPattern, desc: "海の広がりをイメージした、ひらかれた構成。" },
  ];

  return (
    <main className="island-story">
      {/* ========= Page Header ========= */}
      <header className="pageHeader reveal pop" aria-label="Island story header">
        <div className="pageHeader-icon" aria-hidden="true">
          <img src={storyIcon} alt="" />
        </div>

        <div className="pageHeader-text">
          <h1 className="pageHeader-title">ストーリー</h1>
          <p className="pageHeader-sub">
            <Accent word="SAMUDRA">SAMUDRA</Accent>の背景と考え方
          </p>
        </div>
      </header>

      {/* ========= 01 ========= */}
      <section className="section reveal">
        <h2 className="kicker">01</h2>
        <h3 className="h3">
          <Accent word="SAMUDRA">SAMUDRA</Accent>とは
        </h3>

        <p className="p">
          <Accent word="SAMUDRA">SAMUDRA</Accent>は、インドネシアの島々を
          <br />
          味覚と空間で「静かに旅する」ためのカフェです。
        </p>

        <p className="p">
          知識を教える場所ではありません。
          <br />
          まず出会い、感じ、気になったところだけを
          <br />
          自分のペースで知っていく。
          <br />
          そんな、やさしい入口を目指しています。
        </p>
      </section>

      {/* ========= 02 ========= */}
      <section className="section reveal">
        <h2 className="kicker">02</h2>
        <h3 className="h2">
          なぜ<Accent word="パフェ">パフェ</Accent>なのか
        </h3>

        <p className="p">
          <Accent word="パフェ">パフェ</Accent>は、上から下へと順に味わう食べものです。
          <br />
          そのリズムは、島をめぐる旅の感覚とよく似ています。
        </p>

        <p className="p">
          フルーツ、香り、食感、余韻。
          <br />
          レイヤーを重ねることで、
          <br />
          一皿の中に「島の物語」が静かに立ち上がります。
        </p>

        <p className="p">
          ココナッツ、パームシュガー、パンダンなど、
          <br />
          インドネシアのデザートに着想を得た素材を、
          <br />
          日本の味覚に寄り添うかたちでやさしく再構成しています。
        </p>
      </section>

      {/* ========= 03 ========= */}
      <section className="section reveal">
        <h2 className="kicker">03</h2>
        <h3 className="h2">
          なぜ<Accent word="５つの島">５つの島</Accent>なのか
        </h3>

        <p className="p">インドネシアには、数えきれないほどの島があります。</p>

        <p className="p">
          <Accent word="SAMUDRA">SAMUDRA</Accent>では、その中から主要な
          <Accent word="５つの島">５つの島</Accent>を選びました。
          <br />
          すべてを伝えるのではなく、“入口になる地図”をつくるためです。
        </p>

        <div className="visualSlot reveal" style={{ "--d": "60ms" }}>
          {/* map image here */}
        </div>
      </section>

      {/* ========= 04 / Packaging pattern logic ========= */}
      <section className="section reveal">
        <h2 className="kicker">04</h2>
        <h3 className="h2">コーヒー豆パッケージの<br/>模様について</h3>

        <p className="p">
          ５つのコーヒー豆は、それぞれの島の空気感を「模様」で表現しています。
          <br />
          ここでは、模様に込めた考え方を紹介します。
        </p>

        <ul className="patternGuide" aria-label="Packaging patterns guide">
          {PATTERNS.map((it) => (
            <li key={it.key} className="patternGuide-item">
              <div className="patternCircle" aria-hidden="true">
                <img src={it.img} alt="" className="patternCircle-img" />
              </div>

              <div className="patternGuide-text">
                <div className="patternGuide-top">
                  <span className="patternGuide-kanji">{it.key}</span>
                  <span className="patternGuide-name">{it.name}</span>
                </div>
                <p className="p p-theme">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ========= 05 / Island mini facts (cards) ========= */}
      <section className="section reveal">
        <h2 className="kicker">05</h2>
        <h3 className="h2">代表的な島の豆知識</h3>

        <p className="p">
          インドネシアの島々には、それぞれ異なるスケールや風土があります。
          <br />
          ここでは、代表的な島を豆知識とともに紹介します。
        </p>

        <div className="islandCards" aria-label="Islands mini facts">
          {islands.map((it, idx) => (
            <article
              key={it.id ?? idx}
              className="islandCard reveal"
              style={{ "--d": `${80 + idx * 100}ms` }}
            >
              <div className="islandCard-top">
                <img
                  className="islandCard-figure"
                  src={it.shapeSrc}
                  alt={`${it.nameJP}のシルエット`}
                />

                <div className="islandCard-head">
                  <h4 className="islandCard-name">{it.nameJP}</h4>
                </div>
              </div>

              <p className="islandCard-fact">{it.factJP}</p>

              {/* extra (Sumatra only because only it has mapSrc/japanmapSrc) */}
              {it.mapSrc && it.japanmapSrc && (
                <div className="islandCard-extra">
                  <div className="islandCard-extraTitle">島のスケール比較</div>

                  <div className="islandCard-maps">
                    <figure>
                      <div className="mapFrame">
                        <img
                          src={it.mapSrc}
                          alt={`${it.nameJP}のシルエット`}
                          className="sumatra-map"
                        />
                      </div>
                      <figcaption>{it.nameJP}</figcaption>
                    </figure>

                    <figure>
                      <div className="mapFrame">
                        <img
                          src={it.japanmapSrc}
                          alt="日本本州のシルエット"
                          className="japan-map"
                        />
                      </div>
                      <figcaption>日本・本州</figcaption>
                    </figure>
                  </div>

                  {it.mapCaptionJP && (
                    <p className="map-caption">{it.mapCaptionJP}</p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ========= Footer ========= */}
      <footer className="menu-footer">
        <img className="menu-footer-logo" src={logo} alt="SAMUDRA logo" />
      </footer>
    </main>
  );
}
