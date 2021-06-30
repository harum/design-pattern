export default class TheaterLight {
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

  dim(level) {
    console.log(`${this.description} dimming to ${level}%`);
  }

  toString() {
    return this.description;
  }
}
