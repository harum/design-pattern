import PizzaStore from './PizzaStore.js';
import SimplePizzaFactory from './SimplePizzaFactory.js';

const factory = new SimplePizzaFactory();
const store = new PizzaStore(factory);

let pizza;

pizza = store.orderPizza('cheese');
console.log(`We ordered a ${pizza.getName()}`);
console.log(pizza.toString());

pizza = store.orderPizza('veggie');
console.log(`We ordered a ${pizza.getName()}`);
console.log(pizza.toString());
