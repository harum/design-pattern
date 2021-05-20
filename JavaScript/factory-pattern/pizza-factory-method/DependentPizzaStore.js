/*
 * Bad example for very dependent Pizza Store class
 */

import NYCStyleCheesePizza from './NYCStyleCheesePizza.js';
import NYCStyleClamPizza from './NYCStyleClamPizza.js';
import NYCStylePepperoniPizza from './NYCStylePepperoniPizza.js';
import NYCStyleVeggiePizza from './NYCStyleVeggiePizza.js';
import ChicagoStyleCheesePizza from './ChicagoStyleCheesePizza.js';
import ChicagoStyleClamPizza from './ChicagoStyleClamPizza.js';
import ChicagoStylePepperoniPizza from './ChicagoStylePepperoniPizza.js';
import ChicagoStyleVeggiePizza from './ChicagoStyleVeggiePizza.js';

export default class PizzaStore {
  createPizza(style, type) {
    let pizza = null;

    if (style === 'nyc') {
      if (type === 'cheese') {
        pizza = new NYCStyleCheesePizza();
      } else if (type === 'clam') {
        pizza = new NYCStyleClamPizza();
      } else if (type === 'pepperoni') {
        pizza = new NYCStylePepperoniPizza();
      } else if (type === 'veggie') {
        pizza = new NYCStyleVeggiePizza();
      }
    } else if (style === 'chicago') {
      if (type === 'cheese') {
        pizza = new ChicagoStyleCheesePizza();
      } else if (type === 'clam') {
        pizza = new ChicagoStyleClamPizza();
      } else if (type === 'pepperoni') {
        pizza = new ChicagoStylePepperoniPizza();
      } else if (type === 'veggie') {
        pizza = new ChicagoStyleVeggiePizza();
      }
    }

    return pizza;
  }
};
