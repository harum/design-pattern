import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Pepperoni {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
