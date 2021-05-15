import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class Subject {
  registerObserver() {
    throw new RequiredImplementationMissingError();
  }

  removeObserver() {
    throw new RequiredImplementationMissingError();
  }

  notifyObservers() {
    throw new RequiredImplementationMissingError();
  }
}

export default Subject;
