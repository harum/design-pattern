export default class CaffeineBeverageWithHook {
  async prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  brew() {}

  addCondiments() {}

  boilWater() {
    console.log('Boiling water');
  }

  pourInCup() {
    console.log('Pouring into cup');
  }

  customerWantsCondiments() {
    return true;
  }
}
