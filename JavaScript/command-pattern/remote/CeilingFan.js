export default class CeilingFan {
  location;

  level;

  static HIGH = 2;

  static MEDIUM = 1;

  static LOW = 0;

  constructor(location) {
    this.location = location;
  }

  high() {
    this.level = CeilingFan.HIGH;
    console.log(`${this.location} ceiling fan is on high`);
  }

  medium() {
    this.level = CeilingFan.MEDIUM;
    console.log(`${this.location} ceiling fan is on medium`);
  }

  low() {
    this.level = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is on low`);
  }

  off() {
    this.level = CeilingFan.LOW;
    console.log(`${this.location} ceiling fan is off`);
  }

  getSpeed() {
    return this.level;
  }
}
