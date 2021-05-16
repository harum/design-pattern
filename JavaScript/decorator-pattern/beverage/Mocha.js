import CondimentDecorator from './CondimentDecorator.js';

class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ", Mocha";
  }

  cost() {
    return this._beverage.cost() + .20;
  }
}

export default Mocha;
