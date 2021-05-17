import Beverage from './Beverage.js';
import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class CondimentDecorator extends Beverage {
  _beverage = undefined;

  getDescription() {
    throw new RequiredImplementationMissingError();
  }

  getSize() {
    return this._beverage.getSize();
  }

  setSize(size) {
    this._beverage.setSize(size);
  }
}

export default CondimentDecorator;
