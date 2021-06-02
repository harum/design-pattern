import RequiredImplementationMissingError from '../../utils/RequiredImplementationMissingError.js';

export default class PizzaIngredientFactory {
  createDough() {
    throw new RequiredImplementationMissingError();
  }

  createSauce() {
    throw new RequiredImplementationMissingError();
  }

  createCheese() {
    throw new RequiredImplementationMissingError();
  }

  createVeggies() {
    throw new RequiredImplementationMissingError();
  }

  createPepperoni() {
    throw new RequiredImplementationMissingError();
  }

  createClam() {
    throw new RequiredImplementationMissingError();
  }
}
