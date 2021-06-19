export default class GarageDoor {
  location;

  constructor(location) {
    this.location = location;
  }

  up() {
    console.log(`${this.location} garage door is up`);
  }

  down() {
    console.log(`${this.location} garage door is down`);
  }

  stop() {
    console.log(`${this.location} garage door stop`);
  }

  lightOn() {
    console.log(`${this.location} garage light is on`);
  }

  lightOff() {
    console.log(`${this.location} garage light is off`);
  }
}
