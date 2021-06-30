export default class Screen {
  description;

  constructor(description) {
    this.description = description;
  }

  up() {
    console.log(`${this.description} going up`);
  }

  down() {
    console.log(`${this.description} going down`);
  }

  toString() {
    return this.description;
  }
}
