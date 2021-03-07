import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class FlyBehavior {
  fly() {
    throw new RequiredImplementationMissingError('Fly is not implemented');
  }
}
