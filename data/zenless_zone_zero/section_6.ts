const section_6: zenless_zone_zero[] = [
  {
    name: "Tsukishiro Yanagi",
    img: ["tsukishiro_yanagi.webp"],
    specialty: "Strategy",
    attribute: "",
    faction: "",
    id: 0,
  },
  {
    name: "Hoshimi Miyabi",
    img: ["hoshimi_miyabi.webp"],
    specialty: "",
    attribute: "",
    faction: "",
    id: 0,
  },
  {
    name: "Soukaku",
    img: ["soukaku.webp"],
    specialty: "",
    attribute: "",
    faction: "",
    id: 0,
  },
];
section_6.forEach((character) => {
  character.faction = "Section 6";
});
export default section_6;
