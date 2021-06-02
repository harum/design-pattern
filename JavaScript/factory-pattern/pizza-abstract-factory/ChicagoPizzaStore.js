import PizzaStore from './PizzaStore.js';
import ChicagoPizzaIngredientFactory from './ChicagoPizzaIngredientFactory.js';
import CheesePizza from './CheesePizza.js';
import VeggiePizza from './VeggiePizza.js';
import ClamPizza from './ClamPizza.js';
import PepperoniPizza from './PepperoniPizza.js';

export default class ChicagoPizzaStore extends PizzaStore {
  _createPizza(item) {
    let pizza;
    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('Chicago Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('Chicago Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    }

    return pizza;
  }
}
