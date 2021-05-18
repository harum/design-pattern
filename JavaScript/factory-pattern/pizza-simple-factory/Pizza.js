class Pizza {
  _name = '';
  _dough = '';
  _souce = '';
  _toppings = [];

  getName() {
    return this._name;
  }

  prepare() {
    console.log(`Preparing ${this._name}`);
  }

  bake() {
    console.log(`Baking ${this._name}`);
  }

  cut() {
    console.log(`Cutting ${this._name}`);
  }

  box() {
    console.log(`Boxing ${this._name}`);
  }

  toString() {
    const string = `\n---- ${this._name} ----\n` +
      `${this._dough}\n` +
      `${this._souce}\n` +
      `${this._toppings.join("\n")}\n`;

    return string;
  }
}

export default Pizza;
