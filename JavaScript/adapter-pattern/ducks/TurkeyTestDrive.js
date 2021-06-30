import MallardDuck from './MallardDuck.js';
import DuckAdapter from './DuckAdapter.js';

export default class TurkeyTestDrive {
  static perform() {
    const duck = new MallardDuck();
    const duckAdapter = new DuckAdapter(duck);

    for (let i = 0; i < 10; i += 1) {
      console.log('The DuckAdapter says...');
      duckAdapter.gobble();
      duckAdapter.fly();
    }
  }
}
