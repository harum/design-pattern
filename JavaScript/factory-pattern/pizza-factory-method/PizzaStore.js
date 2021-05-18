import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

class PizzaStore {
  createPizza(type) {
    throw new RequiredImplementationMissingError();
  }

  orderPizza(type) {
    const pizza = this.createPizza(type);

    console.log(`--- Making a ${pizza.getName()} ---`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
