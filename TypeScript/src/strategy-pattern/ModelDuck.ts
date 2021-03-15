import Duck from './Duck';
import Quack from './Quack';
import FlyNoWay from './FlyNoWay';

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
