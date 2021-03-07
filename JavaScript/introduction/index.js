import FlyBehavior from './FlyBehavior.js';
import FlyWithWings from './FlyWithWings.js';
import FlyNoWay from './FlyNoWay.js';

let behavior;

// behavior = new FlyBehavior();
// behavior.fly();

behavior = new FlyWithWings();
behavior.fly();

behavior = new FlyNoWay();
behavior.fly();
