import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Clams {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
