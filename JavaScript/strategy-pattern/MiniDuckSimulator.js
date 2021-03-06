import MallardDuck from './MallardDuck.js';
import ModelDuck from './ModelDuck.js';
import FlyRocketPowered from './FlyRocketPowered.js';

class MiniDuckSimulator {
  constructor() {
    this.mallard = undefined;
    this.model = undefined;
  }

  perform() {
    this.mallard = new MallardDuck();
    this.mallard.performFly();
    this.mallard.performQuack();

    this.model = new ModelDuck();
    this.model.performFly();
    this.model.performQuack();
    this.model.setFlyBehavior(new FlyRocketPowered());
    this.model.performFly();
  }
}

const simulator = new MiniDuckSimulator();
simulator.perform();
