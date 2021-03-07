import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class Duck {
  flyBehavior;
  quackBehavior;

  display() {
    throw new RequiredImplementationMissingError('display is not implemented');
  }

  setFlyBehavior(flyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  quackBehavior(quackBehavior) {
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
