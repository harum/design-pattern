import PizzaIngredientFactory from './PizzaIngredientFactory.js';
import ThickCrustDough from './ThickCrustDough.js';
import PlumTomatoSauce from './PlumTomatoSauce.js';
import MozzarellaCheese from './MozzarellaCheese.js';
import BlackOlives from './BlackOlives.js';
import Spinach from './Spinach.js';
import Eggplant from './Eggplant.js';
import SlicedPepperoni from './SlicedPepperoni.js';
import FrozenClams from './FrozenClams.js';

export default class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThickCrustDough();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }

  createCheese() {
    return new MozzarellaCheese();
  }

  createVeggies() {
    const veggies = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ];

    return veggies;
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FrozenClams();
  }
}
