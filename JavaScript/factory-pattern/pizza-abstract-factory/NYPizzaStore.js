import PizzaStore from './PizzaStore.js';
import NYPizzaIngredientFactory from './NYPizzaIngredientFactory.js';
import CheesePizza from './CheesePizza.js';
import VeggiePizza from './VeggiePizza.js';
import ClamPizza from './ClamPizza.js';
import PepperoniPizza from './PepperoniPizza.js';

export default class NYPizzaStore extends PizzaStore {
  _createPizza(item) {
    let pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('New York Style Cheese Pizza');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('New York Style Veggie Pizza');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('New York Style Clam Pizza');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('New York Style Pepperoni Pizza');
    }

    return pizza;
  }
}
