class Pizza {
  _name = '';
  _dough = '';
  _souce = '';
  _toppings = [];

  getName() {
    return this._name;
  }

  prepare() {
    console.log(`Prepare ${this._name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings: ');
    console.log(this._toppings.join(', '));
  }

  bake() {
    console.log('Bake for 25 minutes at 350');
  }

  cut() {
    console.log('Cut the pizza into diagonal slices');
  }

  box() {
    console.log('Place pizza in official PizzaStore box');
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
