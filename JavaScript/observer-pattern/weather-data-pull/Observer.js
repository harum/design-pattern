import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

const Observer = {
  update() {
    throw new RequiredImplementationMissingError();
  }
}

export default Observer;
