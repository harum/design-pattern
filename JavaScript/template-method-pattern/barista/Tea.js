import CaffeineBeverage from './CaffeineBeverage.js';

export default class Tea extends CaffeineBeverage {
  brew() {
    console.log('Steeping the tea');
  }

  addCondiments() {
    console.log('Adding Lemon');
  }
}
