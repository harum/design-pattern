import CondimentDecorator from './CondimentDecorator.js';

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ", Whip";
  }

  cost() {
    return this._beverage.cost() + .10;
  }
}

export default Whip;
