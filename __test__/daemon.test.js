import { Character } from "../src/daemon.js";
import { Daemon } from "../src/daemon.js";

test("if objects match", () => {
  const heroCharacter = new Daemon("Dae", "Daemon");
  const result = {
    name: "Dae",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(heroCharacter).toMatchObject(result);
});
