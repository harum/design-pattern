import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class Beverage {
  _sizes = {
    small: 1,
    medium: 2,
    large: 3,
  };
  _size = 1;
  _description = 'Unknown beverage';

  constructor() {
    this._sizes = Object.freeze(this._sizes);
  }

  getDescription() {
    return this._description;
  }

  getSize() {
    return this._size;
  }

  setSize(size) {
    if (this._sizes[size]) {
      this._size = this._sizes[size];
    } else {
      throw new Error(`Size value (${size}) is not valid`);
    }
  }

  cost() {
    throw new RequiredImplementationMissingError();
  }
}

export default Beverage;
