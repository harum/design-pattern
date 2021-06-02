import PizzaIngredientFactory from './PizzaIngredientFactory.js';
import ThinCrustDough from './ThinCrustDough.js';
import MarinaraSauce from './MarinaraSauce.js';
import ReggianoCheese from './ReggianoCheese.js';
import Garlic from './Garlic.js';
import Onion from './Onion.js';
import Mushroom from './Mushroom.js';
import RedPepper from './RedPepper.js';
import FreshClams from './FreshClams.js';
import SlicedPepperoni from './SlicedPepperoni.js';

export default class NYPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    const veggies = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ];

    return veggies;
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreshClams();
  }
}
