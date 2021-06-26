export default class Customer {
  waitress;

  cook;

  order;

  constructor(waitress, cook) {
    this.waitress = waitress;
    this.cook = cook;
  }

  createOrder() {
    this.order = () => {
      this.cook.makeBurger();
      this.cook.makeFries();
    };
  }

  hungry() {
    this.waitress.takeOrder(this.order);
  }
}
