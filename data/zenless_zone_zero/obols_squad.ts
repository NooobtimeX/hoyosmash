const obols_squad: zenless_zone_zero[] = [
  {
    name: "Solder 11",
    img: ["solder_11.webp"],
    specialty: "",
    attribute: "",
    faction: "",
    id: 0,
  },
];
obols_squad.forEach((character) => {
  character.faction = "OBOLS Squad";
});
export default obols_squad;
