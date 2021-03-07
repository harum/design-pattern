import Duck from './Duck.js';
import Quack from './Quack.js';
import FlyNoWay from './FlyNoWay.js';

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  display() {
    console.log("I'am a model duck");
  }
}
