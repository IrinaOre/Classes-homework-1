import { Character } from "../src/undead.js";
import { Undead } from "../src/undead.js";

test("if objects match", () => {
  const heroCharacter = new Undead("Und", "Undead");
  const result = {
    name: "Und",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(heroCharacter).toMatchObject(result);
});
