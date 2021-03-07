import FlyBehavior from './FlyBehavior.js';

export default class FlyNoWay extends FlyBehavior {
  fly() {
    console.log('Can not fly!');
  }
}
