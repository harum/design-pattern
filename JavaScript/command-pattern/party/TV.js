export default class TV {
  location;

  channel;

  constructor(location) {
    this.location = location;
  }

  on() {
    console.log(`${this.location} tv is on`);
  }

  off() {
    console.log(`${this.location} tv is off`);
  }

  setInputChannel() {
    this.channel = 3;
    console.log(`${this.location} tv channel is set for VCR`);
  }
}
