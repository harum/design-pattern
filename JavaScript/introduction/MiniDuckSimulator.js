import MallardDuck from './MallardDuck.js';
import ModelDuck from './ModelDuck.js';
import FlyRocketPowered from './FlyRocketPowered.js';

class MiniDuckSimulator {
  mallard;
  model;

  perform() {
    this.mallard = new MallardDuck();
    this.mallard.performFly();
    this.mallard.performQuack();

    this.model = new ModelDuck();
    this.model.performFly();
    this.model.setFlyBehavior(new FlyRocketPowered())
    this.model.performFly();
  }
}

const duck = new MiniDuckSimulator();
duck.perform();
