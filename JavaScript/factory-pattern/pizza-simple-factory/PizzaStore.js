class PizzaStore {
  _factory;

  constructor(factory) {
    this._factory = factory;
  }

  orderPizza(type) {
    const pizza = this._factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
