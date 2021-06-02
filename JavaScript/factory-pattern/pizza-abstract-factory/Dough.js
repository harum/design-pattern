import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Dough {
  toString() {
    throw new RequiredImplementationMissingError();
  }
}
