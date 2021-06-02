import Pizza from './Pizza.js';

export default class PepperoniPizza extends Pizza {
  _ingredientFactory;

  constructor(ingredientFactory) {
    super();
    this._ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log(`Preparing ${this._name}`);

    this._dough = this._ingredientFactory.createDough();
    this._sauce = this._ingredientFactory.createSauce();
    this._cheese = this._ingredientFactory.createCheese();
    this._veggies = this._ingredientFactory.createVeggies();
    this._pepperoni = this._ingredientFactory.createPepperoni();
  }
}
