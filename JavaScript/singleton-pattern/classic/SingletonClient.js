import Singleton from './Singleton.js';

const a = new Singleton();
console.log(a.showId());

const b = Singleton.getInstance();
const c = new Singleton();
c.id = 2;
console.log(a.showId());
console.log(b.showId());
console.log(c.showId());

b.id = 5;
console.log(a.showId());
console.log(b.showId());
console.log(c.showId());

