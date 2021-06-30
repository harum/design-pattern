import Duck from './Duck.js';

export default class MallardDuck extends Duck {
  quack() {
    console.log('Quack');
  }

  fly() {
    console.log("I'am flying");
  }
}
