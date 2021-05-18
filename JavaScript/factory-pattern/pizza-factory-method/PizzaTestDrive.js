import ChicagoPizzaStore from './ChicagoPizzaStore.js';
import NYCPizzaStore from './NYCPizzaStore.js';

const chicagoStore = new ChicagoPizzaStore();
const nycStore = new NYCPizzaStore();

let pizza;

pizza = nycStore.orderPizza('cheese');
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('cheese');
console.log(`Joel ordered a ${pizza.getName()}`);

pizza = nycStore.orderPizza('clam');
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('clam');
console.log(`Joel ordered a ${pizza.getName()}`);

pizza = nycStore.orderPizza('pepperoni');
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('pepperoni');
console.log(`Joel ordered a ${pizza.getName()}`);

pizza = nycStore.orderPizza('veggie');
console.log(`Ethan ordered a ${pizza.getName()}`);

pizza = chicagoStore.orderPizza('veggie');
console.log(`Joel ordered a ${pizza.getName()}`);
