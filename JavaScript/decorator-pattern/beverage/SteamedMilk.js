import CondimentDecorator from './CondimentDecorator.js';

class SteamedMilk extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ", Steamed Milk";
  }

  cost() {
    return this._beverage.cost() + (.10 * this._beverage.getSize());
  }
}

export default SteamedMilk;
