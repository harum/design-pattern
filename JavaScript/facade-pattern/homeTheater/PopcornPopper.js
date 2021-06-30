export default class PopcornPopper {
  description;

  constructor(description) {
    this.description = description;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} on`);
  }

  pop() {
    console.log(`${this.description} popping popcorn!`);
  }

  toString() {
    return this.description;
  }
}
