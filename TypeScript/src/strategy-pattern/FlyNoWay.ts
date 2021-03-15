import FlyBehavior from './FlyBehavior';

export default class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('Can not fly!');
  }
}
