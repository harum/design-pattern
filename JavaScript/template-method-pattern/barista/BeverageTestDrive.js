import Tea from './Tea.js';
import Coffee from './Coffee.js';
import TeaWithHook from './TeaWithHook.js';
import CoffeeWithHook from './CoffeeWithHook.js';

export default class BeverageTestDrive {
  static async perform() {
    const tea = new Tea();
    const coffee = new Coffee();

    console.log('Making tea...');
    tea.prepareRecipe();

    console.log('Making coffee...');
    coffee.prepareRecipe();

    // With hooks
    const teaHook = new TeaWithHook();
    const coffeeHook = new CoffeeWithHook();

    console.log('Making tea...');
    await teaHook.prepareRecipe();

    console.log('Making coffee...');
    await coffeeHook.prepareRecipe();
  }
}
