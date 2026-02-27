import javaImg from "../assets/beans/java-coffee.webp";
import kalimantanImg from "../assets/beans/kalimantan-coffee.webp";
import papuaImg from "../assets/beans/papua-coffee.webp";
import sulawesiImg from "../assets/beans/sulawesi-coffee.webp";
import sumatraImg from "../assets/beans/sumatra-coffee.webp";

const beansData = [
  {
    id: "kalimantan",
    nameJP: "カリマンタン\nブレンド",
    price: 1400,
    img: kalimantanImg,
    desc: "やわらかな苦味と、ほのかに広がるナッツのような香ばしさ。落ち着いた味わいのブレンド。"
  },
  {
    id: "sumatra",
    nameJP: "スマトラ\nブレンド",
    price: 1400,
    img: sumatraImg,
    desc: "深みのあるコクと、しっとりとした口あたり。ゆっくりと余韻を楽しめる一杯。"
  },
  {
    id: "java",
    nameJP: "ジャワ\nブレンド",
    price: 1400,
    img: javaImg,
    desc: "バランスのとれた味わいと、やさしい酸味。毎日のコーヒーとして飲みやすいブレンド。"
  },
  {
    id: "sulawesi",
    nameJP: "スラウェシ\nブレンド",
    price: 1400,
    img: sulawesiImg,
    desc: "なめらかなコクの中に、ほんのりとした甘さ。穏やかで上品な印象の味わい。"
  },
  {
    id: "papua",
    nameJP: "パプア\nブレンド",
    price: 1400,
    img: papuaImg,
    desc: "みずみずしい香りと、軽やかな後味。すっきりとした飲み心地のブレンド。"
  }
];

export default beansData;
