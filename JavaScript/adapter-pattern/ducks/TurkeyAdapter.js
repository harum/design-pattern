import Duck from './Duck.js';

export default class TurkeyAdaptor extends Duck {
  turkey;

  constructor(turkey) {
    super();
    this.turkey = turkey;
  }

  quack() {
    this.turkey.gobble();
  }

  fly() {
    for (let i = 0; i < 5; i += 1) {
      this.turkey.fly();
    }
  }
}
