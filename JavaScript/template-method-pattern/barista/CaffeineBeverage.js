export default class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  brew() {}

  addCondiments() {}

  boilWater() {
    console.log('Boiling water');
  }

  pourInCup() {
    console.log('Pouring into cup');
  }
}
