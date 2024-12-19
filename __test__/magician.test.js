import { Character } from "../src/magician.js";
import { Magician } from "../src/magician.js";

test("if objects match", () => {
  const heroCharacter = new Magician("Mag", "Magician");
  const result = {
    name: "Mag",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(heroCharacter).toMatchObject(result);
});
