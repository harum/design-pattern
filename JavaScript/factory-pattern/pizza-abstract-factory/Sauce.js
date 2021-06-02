import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Sauce {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
