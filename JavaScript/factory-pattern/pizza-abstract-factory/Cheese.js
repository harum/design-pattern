import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Cheese {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
