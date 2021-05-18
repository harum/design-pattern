import Pizza from './Pizza.js';
import CheesePizza from './CheesePizza.js';
import ClamPizza from './ClamPizza.js';
import PepperoniPizza from './PepperoniPizza.js';
import VeggiePizza from './VeggiePizza.js';

class SimplePizzaFactory {
  createPizza(type) {
    let pizza = null;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}

export default SimplePizzaFactory;
