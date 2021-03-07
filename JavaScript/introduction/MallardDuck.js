import Duck from './Duck.js';
import Quack from './Quack.js';
import FlyWithWings from './FlyWithWings.js';

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log("I'am real Mallard duck");
  }
}
