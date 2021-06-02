import NYPizzaStore from './NYPizzaStore.js';
import ChicagoPizzaStore from './ChicagoPizzaStore.js';

const nyPizzaStore = new NYPizzaStore();
const chicagoPizzaStore = new ChicagoPizzaStore();

let pizza;

pizza = nyPizzaStore.orderPizza('cheese');
console.log(`Ethan ordered a ${pizza}\n`);

pizza = chicagoPizzaStore.orderPizza('cheese');
console.log(`Joel ordered a ${pizza}\n`);

pizza = nyPizzaStore.orderPizza('clam');
console.log(`Ethan ordered a ${pizza}\n`);

pizza = chicagoPizzaStore.orderPizza('clam');
console.log(`Joel ordered a ${pizza}\n`);

pizza = nyPizzaStore.orderPizza('pepperoni');
console.log(`Ethan ordered a ${pizza}\n`);

pizza = chicagoPizzaStore.orderPizza('pepperoni');
console.log(`Joel ordered a ${pizza}\n`);

pizza = nyPizzaStore.orderPizza('veggie');
console.log(`Ethan ordered a ${pizza}\n`);

pizza = chicagoPizzaStore.orderPizza('veggie');
console.log(`Joel ordered a ${pizza}\n`);
