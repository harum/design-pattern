export default class Hottub {
  on;

  temperature;

  on() {
    this.on = true;
  }

  off() {
    this.on = false;
  }

  bubblesOn() {
    if (this.on) {
      console.log('Hottub is bubbling!');
    }
  }

  bubblesOff() {
    if (this.on) {
      console.log('Hottub is not bubbling');
    }
  }

  jetsOn() {
    if (this.on) {
      console.log('Hottub jets are on');
    }
  }

  jetsOff() {
    if (this.on) {
      console.log('Hottub jets are off');
    }
  }

  setTemperature(temperature) {
    this.temperature = temperature;
  }

  heat() {
    this.temperature = 105;
    console.log('Hottub is heating to a steaming 105 degrees');
  }

  cool() {
    this.temperature = 98;
    console.log('Hottub is cooling to 98 degrees');
  }
}
