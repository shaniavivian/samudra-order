// src/data/islandsData.js
import sumatra from "../assets/islands/sumatra.svg";
import java from "../assets/islands/java.svg";
import kalimantan from "../assets/islands/kalimantan.svg";
import sulawesi from "../assets/islands/sulawesi.svg";
import papua from "../assets/islands/papua.svg";
import sumatraMap from "../assets/islands/maps/indonesia-map-sumatra.svg";
import japanhonshuuMap from "../assets/islands/maps/japan-map-honshuu.svg";

const islands = [
  {
    id: "sumatra",
    nameJP: "スマトラ",
    descJP: "深い森と、圧倒的なスケールをもつ島。",
    factJP: "スマトラ島一つで、日本の本州に近いスケールを持つ島です。",
    mapSrc: sumatraMap,
    japanmapSrc: japanhonshuuMap,
    mapCaptionJP: "※ 本図はスケール感を伝えるための比較図です。",
    shapeSrc: sumatra,
  },

  {
    id: "java",
    nameJP: "ジャワ",
    descJP: "人々の暮らしと歴史が、火山の大地の上に重なってきた島。",
    factJP:
      "インドネシア人口の約6割が暮らす、最も生活の密度が高い島です。火山がもたらす肥沃な土壌が、都市と田園を支えています。",
    shapeSrc: java,
  },

  {
    id: "kalimantan",
    nameJP: "カリマンタン",
    descJP: "川と森が暮らしの中心となる、静かで原生的な島。",
    factJP:
      "アマゾンより古いとも言われる熱帯雨林が広がり、川が道として使われています。ボルネオ島として、3つの国にまたがる島でもあります。",
    shapeSrc: kalimantan,
  },

  {
    id: "sulawesi",
    nameJP: "スラウェシ",
    descJP: "不思議なかたちと、独自の文化をもつ島。",
    factJP:
      "世界有数の生物多様性をもつ海に囲まれ、山や家、儀式が深く結びついた暮らしが続いています。",
    shapeSrc: sulawesi,
  },

  {
    id: "papua",
    nameJP: "パプア",
    descJP: "今もなお、人より自然の存在感が大きい島。",
    factJP:
      "アジアでも特に手つかずの自然が残り、島の中だけで数百の言語と文化が存在します。パプアの海は、世界でも高い透明度で知られています。",
    shapeSrc: papua,
  },
];

export default islands;
