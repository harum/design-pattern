import Drone from './Drone.js';

export default class SuperDrone extends Drone {
  beep() {
    console.log('Beep beep beep');
  }

  speenRotors() {
    console.log('Rotors are spinning');
  }

  takeOff() {
    console.log('Taking off');
  }
}
