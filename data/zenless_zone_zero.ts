import belobog_heavy_industries from "@/data/zenless_zone_zero/belobog_heavy_industries";
import criminal_investigation_special_response_team from "@/data/zenless_zone_zero/criminal_investigation_special_response_team";
import cunning_hares from "@/data/zenless_zone_zero/cunning_hares";
import obols_squad from "@/data/zenless_zone_zero/obols_squad";
import section_6 from "@/data/zenless_zone_zero/section_6";
import sons_of_claydon from "@/data/zenless_zone_zero/sons_of_claydon";
import victoria_housekeeping_co from "@/data/zenless_zone_zero/victoria_housekeeping_co";

const zenless_zone_zero: zenless_zone_zero[] = [
  ...belobog_heavy_industries,
  ...criminal_investigation_special_response_team,
  ...cunning_hares,
  ...obols_squad,
  ...section_6,
  ...sons_of_claydon,
  ...victoria_housekeeping_co,
];

zenless_zone_zero.sort((a, b) => a.name.localeCompare(b.name));
zenless_zone_zero.forEach((item, index) => {
  item.id = index + 1;
});

export default zenless_zone_zero;
