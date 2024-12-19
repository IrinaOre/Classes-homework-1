import { Character } from "../src/character.js";

test("checking if name less than 2 symbols", () => {
  expect(() => new Character("M", "Magician")).toThrow("Error");
});

test("checking if name more than 10 symbols", () => {
  expect(() => new Character("MyMagicianCharacter", "Magician")).toThrow(
    "Error"
  );
});

test("checking the correct amount of symbols in a name", () => {
  const result = new Character("Name", "Magician");
  expect(result.name.length > 2).toBe(true);
});

test("checking the type", () => {
  expect(() => new Character("Gwen", "Mag")).toThrow("Error");
});

test("checking the correct type", () => {
  const result = new Character("Name", "Magician");
  expect(result.type).toBe("Magician");
});
