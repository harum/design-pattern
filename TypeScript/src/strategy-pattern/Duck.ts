import QuackBehavior from './QuackBehaviorInterface'
import FlyBehavior from './FlyBehaviorInterface'
import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  display() {
    throw new RequiredImplementationMissingError('display is not implemented');
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log('All ducks float, even decoys!');
  }
}
