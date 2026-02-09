export default function BeanDetailModal({ bean, onClose, onAdd }) {
  if (!bean) return null;

  return (
  <div className="modalOverlay modalOverlay--item" onClick={onClose}>
  <div className="modalPanel" onClick={(e) => e.stopPropagation()}>

    {/* content */}
    <div className="beanDetail">
      <div className="beanDetail-media">
        <img src={bean.img} alt={bean.nameJP} />
      </div>

      <div className="beanDetail-body">
        <h2 className="beanDetail-title">{bean.nameJP}</h2>

        <p className="beanDetail-desc">
          {bean.desc ??
            "インドネシア各地の個性を活かした、やさしい味わいのブレンド。"}
        </p>

        <div className="beanDetail-price">
          ¥{bean.price.toLocaleString()}
        </div>
      </div>
    </div>

    {/* bottom bar button */}
    <button
      className="beanDetail-submit"
      onClick={() => onAdd(bean)}
    >
      カートに追加
    </button>

  </div>
</div>
  );
}
