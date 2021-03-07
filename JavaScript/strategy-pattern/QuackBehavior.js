import RequiredImplementationMissingError from './RequiredImplementationMissingError.js';

export default class QuackBehavior {
  quack() {
    throw new RequiredImplementationMissingError('Fly is not implemented');
  }
}
