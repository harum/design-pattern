import Cook from './Cook.js';
import Waitress from './Waitress.js';
import Customer from './Customer.js';
import BurgerAndFriesOrder from './BurgerAndFriesOrder.js';

export default class Diner {
  static perform() {
    const cook = new Cook();
    const waitress = new Waitress();
    const customer = new Customer(waitress);

    customer.createOrder(new BurgerAndFriesOrder(cook));
    customer.hungry();
  }
}
