import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class PizzaStore {
  _createPizza() {
    throw new RequiredImplementationMissingError();
  }

  orderPizza(type) {
    const pizza = this._createPizza(type);
    console.log(`---- Making a ${pizza.getName()} ----\n`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
