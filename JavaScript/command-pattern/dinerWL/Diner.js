import Cook from './Cook.js';
import Waitress from './Waitress.js';
import Customer from './Customer.js';

export default class Diner {
  static perform() {
    const cook = new Cook();
    const waitress = new Waitress();
    const customer = new Customer(waitress, cook);

    customer.createOrder();
    customer.hungry();
  }
}
