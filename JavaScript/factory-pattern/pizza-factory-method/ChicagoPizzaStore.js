import PizzaStore from './PizzaStore.js';
import ChicagoStyleCheesePizza from './ChicagoStyleCheesePizza.js';
import ChicagoStyleClamPizza from './ChicagoStyleClamPizza.js';
import ChicagoStylePepperoniPizza from './ChicagoStylePepperoniPizza.js';
import ChicagoStyleVeggiePizza from './ChicagoStyleVeggiePizza.js';

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type) {
    let pizza = null;

    if (type === 'cheese') {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type === 'clam') {
      pizza = new ChicagoStyleClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new ChicagoStylePepperoniPizza();
    } else if (type === 'veggie') {
      pizza = new ChicagoStyleVeggiePizza();
    }

    return pizza;
  }
};

export default ChicagoPizzaStore;
