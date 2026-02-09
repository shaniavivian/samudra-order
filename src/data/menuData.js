// src/data/menuData.js

// ===================
// PARFAIT IMAGES
// ===================
import sumatraCitrus from "../assets/menu/parfait/sumatra-citrus.png";
import kalimantanSunset from "../assets/menu/parfait/kalimantan-sunset.png";
import javaEarth from "../assets/menu/parfait/java-earth.png";
import sulawesiGreen from "../assets/menu/parfait/sulawesi-green.png";
import papuaSago from "../assets/menu/parfait/papua-sago.png";

// ===================
// LAYERS IMAGES
// ===================
import layersSumatra from "../assets/layers/sumatra.png";
import layersKalimantan from "../assets/layers/kalimantan.png";
import layersJava from "../assets/layers/java.png";
import layersSulawesi from "../assets/layers/sulawesi.png";
import layersPapua from "../assets/layers/papua.png";



//* COFFEE IMAGES *//
import espressoImg from "../assets/menu/coffee/espresso.png";
import macchiatoImg from "../assets/menu/coffee/macchiato.png";
import latteImg from "../assets/menu/coffee/latte.png";
import americanoImg from "../assets/menu/coffee/americano.png";

// ===================
// ISLAND ICON SVGs (coffee options)
// ===================
import iconSumatra from "../assets/islands/Sumatra.svg";
// ✅ pick ONE that matches your real filename:
// If your file is Jawa.svg, keep this:
import iconJava from "../assets/islands/Java.svg";
// If your file is Java.svg, change to:
// import iconJava from "../assets/Java.svg";

import iconSulawesi from "../assets/islands/Sulawesi.svg";
import iconKalimantan from "../assets/islands/Kalimantan.svg";
import iconPapua from "../assets/islands/Papua.svg";

// ===================
// Helpers
// ===================
const beanOptions = [
  { id: "sumatra", label: "スマトラ", note: "重厚感・ビター・スパイス感", icon: iconSumatra },
  { id: "java", label: "ジャワ", note: "バランス・ナッツ・やさしいコク", icon: iconJava },
  { id: "sulawesi", label: "スラウェシ", note: "クリーン・甘み・すっきり", icon: iconSulawesi },
  { id: "kalimantan", label: "カリマンタン", note: "穏やか・土っぽさ・やさしい苦味", icon: iconKalimantan },
  { id: "papua", label: "パプア", note: "軽やか・フルーティ・透明感", icon: iconPapua },
];

const parfaitItem = ({
  id,
  nameEN,
  nameJP,
  price,
  image,
  layersImage,
  descriptionJP,
  tasteJP,
  allergyJP,
}) => ({
  id,
  cartKey: `parfait-${id}`, // ✅ stable for cart
  nameEN,
  nameJP,
  price,
  image,
  layersImage,
  descriptionJP,
  tasteJP,
  allergyJP,
});

const coffeeItem = ({
  id,
  nameEN,
  nameJP,
  price,
  image,
  descriptionJP,
  tasteJP,
  allergyJP,
}) => ({
  id,
  cartKey: `coffee-${id}`, // ✅ stable for cart
  nameEN,
  nameJP,
  price,
  image,
  descriptionJP,
  tasteJP,
  allergyJP,
  beanOptions, // ✅ reuse
});

// ===================
// Data
// ===================
const menuData = [
  {
    id: "parfait",
    titleEN: "ISLAND PARFAIT",
    titleJP: "アイランド・パフェ",
    descriptionJP: "インドネシアのフルーツを使ったパフェ",
    items: [
      parfaitItem({
        id: "sumatra-citrus",
        nameEN: "SUMATRA CITRUS",
        nameJP: "スマトラ・シトラス",
        price: 1480,
        image: sumatraCitrus,
        layersImage: layersSumatra,
        descriptionJP:
          "柑橘の香りが広がる、軽やかで爽やかな一杯。スマトラの大地を思わせる、すっきりとした酸味が特徴です。",
        tasteJP: "爽やか / 酸味あり / 甘さ控えめ",
        allergyJP: "乳・オレンジ",
      }),

      parfaitItem({
        id: "kalimantan-sunset",
        nameEN: "KALIMANTAN SUNSET",
        nameJP: "カリマンタン・サンセット",
        price: 1480,
        image: kalimantanSunset,
        layersImage: layersKalimantan,
        descriptionJP:
          "南国フルーツのやさしい甘みと、なめらかな口当たり。夕暮れのバリを思わせる、まろやかで心地よい味わい。",
        tasteJP: "まろやか / 甘め / トロピカル",
        allergyJP: "乳・マンゴー",
      }),

      parfaitItem({
        id: "java-earth",
        nameEN: "JAVA EARTH",
        nameJP: "ジャワ・アース",
        price: 1480,
        image: javaEarth,
        layersImage: layersJava,
        descriptionJP:
          "コクのある素材感と、落ち着いた甘さ。火山の大地が広がるジャワ島をイメージした、深みのある味わい。",
        tasteJP: "コクあり / 甘さひかえめ / 大人向け",
        allergyJP: "乳",
      }),

      parfaitItem({
        id: "sulawesi-green",
        nameEN: "SULAWESI GREEN",
        nameJP: "スラウェシ・グリーン",
        price: 1480,
        image: sulawesiGreen,
        layersImage: layersSulawesi,
        descriptionJP:
          "ハーブや抹茶を思わせる、清涼感のある風味。森と水に囲まれたスラウェシ島の自然を表現しました。",
        tasteJP: "さっぱり / 清涼感 / 甘さ控えめ",
        allergyJP: "乳",
      }),

      parfaitItem({
        id: "papua-sago",
        nameEN: "PAPUA SAGO",
        nameJP: "パプア・サゴ",
        price: 1480,
        image: papuaSago,
        layersImage: layersPapua,
        descriptionJP:
          "サゴを使った、やさしく素朴な甘さ。パプアの大地と暮らしに寄り添う、穏やかな味わいのパフェ。",
        tasteJP: "やさしい甘さ / もちっと / 素朴",
        allergyJP: "乳",
      }),
    ],
  },

  {
    id: "coffee",
    titleEN: "COFFEE",
    titleJP: "コーヒー",
    descriptionJP: "インドネシア産コーヒー豆を使ったコーヒー",
    items: [
      coffeeItem({
        id: "espresso",
        nameEN: "ESPRESSO",
        nameJP: "エスプレッソ",
        price: 400,
        image: espressoImg,
        descriptionJP:
          "濃厚で香り高い一杯。豆の個性がダイレクトに感じられる、短く深い味わいです。",
        tasteJP: "濃厚 / 香ばしい / キレ",
        allergyJP: "なし",
      }),

      coffeeItem({
        id: "americano",
        nameEN: "AMERICANO",
        nameJP: "アメリカーノ",
        price: 500,
        image: americanoImg,
        descriptionJP:
          "エスプレッソをお湯で割った、軽やかな飲み心地。香りはしっかり、後味はすっきり。",
        tasteJP: "軽やか / すっきり / 香り",
        allergyJP: "なし",
      }),

      coffeeItem({
        id: "macchiato",
        nameEN: "MACCHIATO",
        nameJP: "マキアート",
        price: 550,
        image: macchiatoImg,
        descriptionJP:
          "エスプレッソにフォームミルクを少しだけ。苦味とミルクのやさしさが、ちょうどよく混ざる一杯。",
        tasteJP: "濃厚 / ほの甘 / ミルキー",
        allergyJP: "乳",
      }),

      coffeeItem({
        id: "latte",
        nameEN: "LATTE",
        nameJP: "ラテ",
        price: 600,
        image: latteImg,
        descriptionJP:
          "ミルクの甘みとコーヒーの香りを一緒に楽しめる定番。島の豆の個性で、印象が変わります。",
        tasteJP: "まろやか / 甘み / 飲みやすい",
        allergyJP: "乳",
      }),
    ],
  },
];

export default menuData;
