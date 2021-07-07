import CaffeineBeverage from './CaffeineBeverage.js';

export default class Coffee extends CaffeineBeverage {
  brew() {
    console.log('Dripping Coffee through filter');
  }

  addCondiments() {
    console.log('Adding Sugar and Milk');
  }
}
