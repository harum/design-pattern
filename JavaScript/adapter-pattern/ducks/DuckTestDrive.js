import MallardDuck from './MallardDuck.js';
import WildTurkey from './WildTurkey.js';
import TurkeyAdapter from './TurkeyAdapter.js';
import SuperDrone from './challange/SuperDrone.js';
import DroneAdapter from './challange/DroneAdapter.js';

export default class DuckTestDrive {
  static perform() {
    const duck = new MallardDuck();

    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log('The turkey says...');
    turkey.gobble();
    turkey.fly();

    console.log('The duck says...');
    DuckTestDrive.testDuck(duck);

    console.log('The TurkeyAdapater says...');
    DuckTestDrive.testDuck(turkeyAdapter);

    // challange
    const drone = new SuperDrone();
    const droneAdapter = new DroneAdapter(drone);
    console.log('The DroneAdapter says...');
    DuckTestDrive.testDuck(droneAdapter);
  }

  static testDuck(duck) {
    duck.quack();
    duck.fly();
  }
}
