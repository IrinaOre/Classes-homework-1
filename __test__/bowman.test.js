import { Character } from "../src/bowman.js";
import { Bowman } from "../src/bowman.js";

test("if objects match", () => {
  const heroCharacter = new Bowman("Bow", "Bowman");
  const result = {
    name: "Bow",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(heroCharacter).toMatchObject(result);
});
