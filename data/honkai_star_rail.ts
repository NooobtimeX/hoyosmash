const honkai_star_rail: Omit<BaseCharacter, "id">[] = [
  { name: "Acheron", img: ["acheron.webp"] },
  { name: "Argenti", img: ["argenti.webp"] },
  { name: "Arlan", img: ["arlan.webp"] },
  { name: "Asta", img: ["asta.webp"] },
  { name: "Aventurine", img: ["aventurine.webp"] },
  { name: "Bailu", img: ["bailu.webp"] },
  { name: "Black Swan", img: ["black_swan.webp"] },
  { name: "Blade", img: ["blade.webp"] },
  { name: "Boothill", img: ["boothill.webp"] },
  { name: "Bronya", img: ["bronya.webp"] },
  { name: "Clara", img: ["clara.webp"] },
  { name: "Dan Heng", img: ["dan_heng.webp"] },
  { name: "Imbibitor Lunae", img: ["imbibitor_lunae.webp"] },
  { name: "Dr. Ratio", img: ["dr._ratio.webp"] },
  { name: "Feixiao", img: ["feixiao.webp"] },
  { name: "Firefly", img: ["firefly.webp"] },
  { name: "Fu Xuan", img: ["fu_xuan.webp"] },
  { name: "Gallagher", img: ["gallagher.webp"] },
  { name: "Gepard", img: ["gepard.webp"] },
  { name: "Guinaifen", img: ["guinaifen.webp"] },
  { name: "Hanya", img: ["hanya.webp"] },
  { name: "Herta", img: ["herta.webp"] },
  { name: "Himeko", img: ["himeko.webp"] },
  { name: "Hook", img: ["hook.webp"] },
  { name: "Huohuo", img: ["huohuo.webp"] },
  { name: "Jade", img: ["jade.webp"] },
  { name: "Jiaoqiu", img: ["jiaoqiu.webp"] },
  { name: "Jing Yuan", img: ["jing_yuan.webp"] },
  { name: "Jingliu", img: ["jingliu.webp"] },
  { name: "Kafka", img: ["kafka.webp"] },
  { name: "Lingsha", img: ["lingsha.webp"] },
  { name: "Luka", img: ["luka.webp"] },
  { name: "Luocha", img: ["luocha.webp"] },
  { name: "Lynx", img: ["lynx.webp"] },
  { name: "March 7th", img: ["march_7th.webp"] },
  { name: "Better March7", img: ["better_march7.webp"] },
  { name: "Misha", img: ["misha.webp"] },
  { name: "Moze", img: ["moze.webp"] },
  { name: "Natasha", img: ["natasha.webp"] },
  { name: "Pela", img: ["pela.webp"] },
  { name: "Qingque", img: ["qingque.webp"] },
  { name: "Robin", img: ["robin.webp"] },
  { name: "Ruan Mei", img: ["ruan_mei.webp"] },
  { name: "Sampo", img: ["sampo.webp"] },
  { name: "Seele", img: ["seele.webp"] },
  { name: "Serval", img: ["serval.webp"] },
  { name: "Silver Wolf", img: ["silver_wolf.webp"] },
  { name: "Sparkle", img: ["sparkle.webp"] },
  { name: "Sushang", img: ["sushang.webp"] },
  { name: "Tingyun", img: ["tingyun.webp"] },
  { name: "Topaz", img: ["topaz.webp"] },
  { name: "Welt", img: ["welt.webp"] },
  { name: "Xueyi", img: ["xueyi.webp"] },
  { name: "Yanqing", img: ["yanqing.webp"] },
  { name: "Yukong", img: ["yukong.webp"] },
  { name: "Yunli", img: ["yunli.webp"] },
];

// Function to sort by name and assign IDs
const assignIds = (characters: Omit<BaseCharacter, "id">[]) => {
  return characters
    .sort((a, b) => a.name.localeCompare(b.name)) // Sort by name
    .map((character, index) => ({
      ...character,
      id: index + 1, // Assign ID starting from 1
    }));
};

const sortedHonkaiStarRail = assignIds(honkai_star_rail);
export default sortedHonkaiStarRail;
