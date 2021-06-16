export default class Singleton {
  static instance;
  id;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.id = 1;
    }

    return Singleton.instance;
  }

  static getInstance() {
    return new Singleton();
  }

  showId() {
    console.log(`id = ${this.id}`);
  }
}
