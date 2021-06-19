export default class Light {
  location;

  constructor(location) {
    this.location = location;
  }

  on() {
    console.log(`${this.location} light is on`);
  }

  off() {
    console.log(`${this.location} light is off`);
  }
}
