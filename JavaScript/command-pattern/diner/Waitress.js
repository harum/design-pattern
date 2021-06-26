export default class Waitress {
  order;

  takeOrder(order) {
    this.order = order;
    order.orderUp();
  }
}
