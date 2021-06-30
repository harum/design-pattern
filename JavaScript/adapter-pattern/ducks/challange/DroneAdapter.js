import Duck from '../Duck.js';

export default class DroneAdapter extends Duck {
  drone;

  constructor(drone) {
    super();
    this.drone = drone;
  }

  quack() {
    this.drone.beep();
  }

  fly() {
    this.drone.speenRotors();
    this.drone.takeOff();
  }
}
