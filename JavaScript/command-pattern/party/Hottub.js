export default class Hottub {
  isOn;

  temperature;

  on() {
    this.isOn = true;
  }

  off() {
    this.isOn = false;
  }

  bubblesOn() {
    if (this.isOn) {
      console.log('Hottub is bubbling!');
    }
  }

  bubblesOff() {
    if (this.isOn) {
      console.log('Hottub is not bubbling');
    }
  }

  jetsOn() {
    if (this.isOn) {
      console.log('Hottub jets are on');
    }
  }

  jetsOff() {
    if (this.isOn) {
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
