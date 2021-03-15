import Duck from './Duck';
import MallardDuck from './MallardDuck';
import ModelDuck from './ModelDuck';
import FlyRocketPowered from './FlyRocketPowered';

class MiniDuckSimulator {
  mallard: Duck;
  model: Duck;

  perform() {
    this.mallard = new MallardDuck();
    this.mallard.performFly();
    this.mallard.performQuack();

    this.model = new ModelDuck();
    this.model.performFly();
    this.model.setFlyBehavior(new FlyRocketPowered());
    this.model.performFly();
  }
}

const duck = new MiniDuckSimulator();
duck.perform();
