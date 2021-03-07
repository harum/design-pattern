export default class Duck {
  flyBehavior;
  quackBehavior;

  constructor() {}

  display() {}

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
