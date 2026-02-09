import { useEffect, useMemo, useState } from "react";
import "../styles/Splash.css";

import logo from "../assets/logo/logo-full.svg";
import sea from "../assets/menu/parfait/parfait-animation/sea.png";
import sand from "../assets/menu/parfait/parfait-animation/sand.png";
import island from "../assets/menu/parfait/parfait-animation/island.png";
import boats from "../assets/menu/parfait/parfait-animation/boats.png";
import cream from "../assets/menu/parfait/parfait-animation/cream.png";
import outline from "../assets/menu/parfait/parfait-animation/glass-outline.png";

export default function Splash({ onDone }) {
  const [phase, setPhase] = useState("layers"); // layers -> logo
  const [exit, setExit] = useState(false);

  // back -> front (outline last!)
  const layers = useMemo(() => [ outline, sea, sand, island, boats, cream], []);

  useEffect(() => {
    const toLogo = setTimeout(() => setPhase("logo"), 2400);
    const toExit = setTimeout(() => setExit(true), 3200);
    const done = setTimeout(() => onDone?.(), 3600);

    return () => {
      clearTimeout(toLogo);
      clearTimeout(toExit);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div className={`splash ${exit ? "is-exit" : ""}`} role="presentation">
      <div className="splash-mask">
        {/* Layer stack */}
        <div className={`splash-stack ${phase === "logo" ? "hide" : ""}`}>
          {layers.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              aria-hidden="true"
              className="splash-layer"
              style={{ animationDelay: `${0.15 + i * 0.22}s` }}
            />
          ))}
        </div>

        {/* Logo reveal */}
        <div className={`splash-logoWrap ${phase === "logo" ? "show" : ""}`}>
          <img className="splash-logo" src={logo} alt="SAMUDRA" />
        </div>
      </div>
    </div>
  );
}
