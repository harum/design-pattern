import PizzaStore from './PizzaStore.js';
import NYCStyleCheesePizza from './NYCStyleCheesePizza.js';
import NYCStyleClamPizza from './NYCStyleClamPizza.js';
import NYCStylePepperoniPizza from './NYCStylePepperoniPizza.js';
import NYCStyleVeggiePizza from './NYCStyleVeggiePizza.js';

class NYCPizzaStore extends PizzaStore {
  createPizza(type) {
    let pizza = null;

    if (type === 'cheese') {
      pizza = new NYCStyleCheesePizza();
    } else if (type === 'clam') {
      pizza = new NYCStyleClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new NYCStylePepperoniPizza();
    } else if (type === 'veggie') {
      pizza = new NYCStyleVeggiePizza();
    }

    return pizza;
  }
};

export default NYCPizzaStore;
