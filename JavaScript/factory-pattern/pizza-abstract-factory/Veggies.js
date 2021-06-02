import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Veggies {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
