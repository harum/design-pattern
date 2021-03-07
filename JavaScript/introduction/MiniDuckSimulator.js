import MallardDuck from './MallardDuck.js';

class MiniDuckSimulator {
  constructor() {
    this.mallard = new MallardDuck();
    this.mallard.performQuack();
    this.mallard.performFly();
  }
}

const duck = new MiniDuckSimulator();
