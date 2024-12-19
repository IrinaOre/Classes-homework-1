export class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Error");
    }
    this.name = name;
    this.type = type;
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Error");
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
