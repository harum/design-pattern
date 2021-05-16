import Beverage from './Beverage.js';

class Espresso extends Beverage {
  constructor() {
    super();
    this._description = 'Espresso';
  }

  cost() {
    return 1.99;
  }
}

export default Espresso;
