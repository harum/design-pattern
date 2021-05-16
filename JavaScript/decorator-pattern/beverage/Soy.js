import CondimentDecorator from './CondimentDecorator.js';

class Soy extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ", Soy";
  }

  cost() {
    return this._beverage.cost() + .15;
  }
}

export default Soy;
