import "./styles/App.css";

import { useMemo, useState } from "react";

import Home from "./pages/Home.jsx";
import MenuList from "./pages/menuList.jsx";
import BeansPage from "./pages/BeansPage.jsx";
import IslandStory from "./pages/IslandStory.jsx";

import Splash from "./components/Splash.jsx";

import ItemDetailModal from "./components/ItemDetailModal.jsx";
import LayersModal from "./components/LayersModal.jsx";
import OrderModal from "./components/OrderModal.jsx";

import chevronLeft from "./assets/icons/chevron-left.svg";
import shoppingCart from "./assets/icons/shopping-cart.svg";
import samudraLogo from "./assets/logo/logo-wordtype.svg";

export default function App() {
  // =========================
  // Splash (DEV vs FINAL)
  // =========================
  const ALWAYS_PLAY_SPLASH = false; // ✅ dev: true / final: false

  const [showSplash, setShowSplash] = useState(() => {
    if (ALWAYS_PLAY_SPLASH) return true;
    return !sessionStorage.getItem("samudra_splash_seen");
  });

  // =========================
  // Navigation
  // =========================
  const [page, setPage] = useState("home");

  const goTo = (nextPage) => {
    setPage(nextPage);
    setSelectedItem(null);
    setLayersItem(null);
    setIsOrderOpen(false);
  };

  const goHome = () => goTo("home");

  // =========================
  // Modals
  // =========================
  const [selectedItem, setSelectedItem] = useState(null);
  const [layersItem, setLayersItem] = useState(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  // =========================
  // Cart
  // cart shape: { [cartKey]: { item, qty } }
  // =========================
  const [cart, setCart] = useState({});
  const makeCartKey = (item) => {
    const temp = item.options?.temp ?? "ice";        // default
    const sugar = item.options?.sugar ?? "normal";   // default
    const beanType = item.options?.beanType ?? "house";
    return `${item.id}__${beanType}__${temp}__${sugar}`;
  };

    const addToCart = (item) => {
    const key = makeCartKey(item);

    setCart((prev) => {
      const cur = prev[key];

      if (cur) {
        return {
          ...prev,
          [key]: { item: cur.item, qty: cur.qty + 1 },
        };
      }

      // store the cartKey on the item so OrderModal can use it if needed
      return {
        ...prev,
        [key]: { item: { ...item, cartKey: key }, qty: 1 },
      };
    });
  };


  const decCart = (cartKey) => {
    setCart((prev) => {
      const cur = prev[cartKey];
      if (!cur) return prev;

      if (cur.qty <= 1) {
        const copy = { ...prev };
        delete copy[cartKey];
        return copy;
      }

      return { ...prev, [cartKey]: { item: cur.item, qty: cur.qty - 1 } };
    });
  };

  const removeFromCart = (cartKey) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[cartKey];
      return copy;
    });
  };

  const total = useMemo(
    () =>
      Object.values(cart).reduce(
        (sum, row) => sum + Number(row.item?.price || 0) * row.qty,
        0
      ),
    [cart]
  );

  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, row) => sum + row.qty, 0),
    [cart]
  );

  // =========================
  // Splash only (no app behind)
  // =========================
  if (showSplash) {
    return (
      <Splash
        onDone={() => {
          if (!ALWAYS_PLAY_SPLASH) {
            sessionStorage.setItem("samudra_splash_seen", "1");
          }
          setShowSplash(false);
        }}
      />
    );
  }

  // =========================
  // App UI
  // =========================
  return (
    <div className="app">
      <header className="topbar">
        {page !== "home" ? (
          <button className="back-button" onClick={goHome} aria-label="Back">
            <img src={chevronLeft} alt="" aria-hidden="true" />
          </button>
        ) : (
          <div style={{ width: 40 }} />
        )}

        <img src={samudraLogo} alt="SAMUDRA" className="topbar-logo" />

        {page !== "home" ? (
          <button
            className="cart-button"
            onClick={() => setIsOrderOpen(true)}
            aria-label="Open cart"
          >
            <img
              className="cart-icon"
              src={shoppingCart}
              alt=""
              aria-hidden="true"
              style={{ width: 22, height: 22 }}
            />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        ) : (
          <div style={{ width: 40 }} />
        )}
      </header>

      {page === "home" && <Home goTo={goTo} />}

      {page === "menu" && (
        <MenuList
          onBack={goHome}
          onSelectItem={(item) => setSelectedItem(item)}
          onReorderAdd={(item, qty) => {
            for (let i = 0; i < qty; i++) addToCart(item);
            setIsOrderOpen(true);
          }}
        />
      )}

      {page === "beans" && (
        <BeansPage
          onBack={goHome}
          onAdd={(bean) => {
            addToCart(bean);
            setIsOrderOpen(true);
          }}
        />
      )}

      {page === "islands" && <IslandStory onBack={goHome} />}

      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAdd={(item) => {
            addToCart(item);
            setSelectedItem(null);
            setIsOrderOpen(true);
          }}
          onViewLayers={(item) => setLayersItem(item)}
        />
      )}

      {layersItem && (
        <LayersModal item={layersItem} onClose={() => setLayersItem(null)} />
      )}

      {isOrderOpen && (
        <OrderModal
          cart={cart}
          total={total}
          onClose={() => setIsOrderOpen(false)}
          onInc={(item) => addToCart(item)}
          onDec={(cartKey) => decCart(cartKey)}
          onRemove={(cartKey) => removeFromCart(cartKey)}
          onSubmit={(cartObj) => {
            console.log("send order:", cartObj);
            setIsOrderOpen(false);
          }}
        />
      )}
    </div>
  );
}
