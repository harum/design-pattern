import Turkey from './Turkey.js';

export default class DuckAdapter extends Turkey {
  duck;

  constructor(duck) {
    super();
    this.duck = duck;
  }

  gobble() {
    this.duck.quack();
  }

  fly() {
    if (Math.floor(Math.random() * 10) === 5) {
      this.duck.fly();
    }
  }
}
