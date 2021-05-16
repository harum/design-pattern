import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class Beverage {
  _description = 'Unknown beverage';

  getDescription() {
    return this._description;
  }

  cost() {
    throw new RequiredImplementationMissingError();
  }
}

export default Beverage;
