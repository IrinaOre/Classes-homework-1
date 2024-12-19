import { Character } from "../src/zombie.js";
import { Zombie } from "../src/zombie.js";

test("if objects match", () => {
  const heroCharacter = new Zombie("Zom", "Zombie");
  const result = {
    name: "Zom",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(heroCharacter).toMatchObject(result);
});
