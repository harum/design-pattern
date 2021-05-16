import Beverage from './Beverage.js';
import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class CondimentDecorator extends Beverage {
  _beverage = undefined;

  getDescription() {
    throw new RequiredImplementationMissingError();
  }
}

export default CondimentDecorator;
