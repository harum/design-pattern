import Beverage from './Beverage.js';

class HouseBlend extends Beverage {
  constructor() {
    super();
    this._description = 'House Blend Coffee';
  }

  cost() {
    return .89;
  }
}

export default HouseBlend;
