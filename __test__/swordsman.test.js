import { Character } from "../src/swordsman.js";
import { Swordsman } from "../src/swordsman.js";

test("if objects match", () => {
  const heroCharacter = new Swordsman("Swo", "Swordsman");
  const result = {
    name: "Swo",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(heroCharacter).toMatchObject(result);
});
