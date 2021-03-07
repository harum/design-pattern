import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class FlyBehavior {
  fly() {
    throw new RequiredImplementationMissingError('fly is not implemented');
  }
}
