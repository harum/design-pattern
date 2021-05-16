import Beverage from './Beverage.js';

class DarkRoast extends Beverage {
  constructor() {
    super();
    this._description = 'Dark Roast';
  }

  cost() {
    return .99;
  }
}

export default DarkRoast;
