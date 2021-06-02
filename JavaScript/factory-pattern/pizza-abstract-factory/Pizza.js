import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class Pizza {
  _name;
  _dough;
  _sauce;
  _veggies;
  _cheese;
  _pepperoni;
  _clam;

  prepare() {
    throw new RequiredImplementationMissingError();
  }

  bake() {
    console.log('Bake for 25 minutes at 350');
  }

  cut() {
    console.log('Cutting the pizza into diagonal slices');
  }

  box() {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  toString() {
    let result = '';
    result += `---- ${this._name} ----\n`;

    if (this._dough) {
      result.concat(this._dough);
      result.concat("\n");
    }

    if (this._sauce) {
      result.concat(this._sauce);
      result.concat("\n");
    }

    if (this._cheese) {
      result.concat(this._cheese);
      result.concat("\n");
    }

    if (this._veggies) {
      const veggies = this._veggies
        .map(veggie => veggie.toString())
        .join(', ');
      result.concat(veggies);
      result.concat("\n");
    }

    if (this._clam) {
      result.concat(this._clam);
      result.concat("\n");
    }

    if (this._pepperoni) {
      result.concat(this._pepperoni);
      result.concat("\n");
    }

    return result.toString();
  }
}
