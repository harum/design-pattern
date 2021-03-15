import FlyBehavior from './FlyBehavior.js';

export default class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!");
  }
}

