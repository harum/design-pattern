import Tea from './Tea.js';
import Coffee from './Coffee.js';

export default class Barista {
  static perform() {
    const tea = new Tea();
    const coffee = new Coffee();

    console.log('Making tea...');
    tea.prepareRecipe();

    console.log('Making coffee...');
    coffee.prepareRecipe();
  }
}
