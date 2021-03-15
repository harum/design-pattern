import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class Duck {
  constructor() {
    this.flyBehavior = undefined;
    this.quackBehavior = undefined;
  }

  display() {
    throw new RequiredImplementationMissingError('display is not implemented');
  }

  setFlyBehavior(flyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior) {
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
