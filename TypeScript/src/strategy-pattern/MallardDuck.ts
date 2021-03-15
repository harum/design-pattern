import Duck from './Duck';
import Quack from './Quack';
import FlyWithWings from './FlyWithWings';

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
