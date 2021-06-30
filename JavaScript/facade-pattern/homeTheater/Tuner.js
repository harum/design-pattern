export default class Tuner {
  description;

  frequency;

  constructor(description) {
    this.description = description;
  }

  on() {
    console.log(`${this.description} on`);
  }

  off() {
    console.log(`${this.description} on`);
  }

  setFrequency(frequency) {
    console.log(`${this.description} setting frequency to ${frequency}`);
    this.frequency = frequency;
  }

  setAm() {
    console.log(`${this.description} setting AM mode`);
  }

  setFm() {
    console.log(`${this.description} setting FM mode`);
  }

  toString() {
    return this.description;
  }
}
