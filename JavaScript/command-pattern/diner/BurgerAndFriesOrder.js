import Order from './Order.js';

export default class BurgerAndFriesOrder extends Order {
  cook;

  constructor(cook) {
    super(cook);
    this.cook = cook;
  }

  orderUp() {
    this.cook.makeBurger();
    this.cook.makeFries();
  }
}
