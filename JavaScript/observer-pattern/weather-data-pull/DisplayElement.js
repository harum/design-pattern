import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

const DisplayElement = {
  display() {
    throw new RequiredImplementationMissingError();
  }
}

export default DisplayElement;
