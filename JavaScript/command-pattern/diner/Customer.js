export default class Customer {
  waitress;

  order;

  constructor(waitress) {
    this.waitress = waitress;
  }

  createOrder(order) {
    this.order = order;
  }

  hungry() {
    this.waitress.takeOrder(this.order);
  }
}
