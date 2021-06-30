import Turkey from './Turkey.js';

export default class WildTurkey extends Turkey {
  gobble() {
    console.log('Gobble gobble');
  }

  fly() {
    console.log("I'm flying a short distance");
  }
}
