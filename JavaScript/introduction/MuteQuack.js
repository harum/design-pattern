import QuackBehavior from './QuackBehavior.js';

export default class MuteQuack extends QuackBehavior {
  quack() {
    console.log('Silence.');
  }
}
