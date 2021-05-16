import Espresso from './Espresso.js';
import DarkRoast from './DarkRoast.js';
import HouseBlend from './HouseBlend.js';
import Mocha from './Mocha.js';
import Soy from './Soy.js';
import Whip from './Whip.js';

class StarBuzzCoffee {
  perform() {
    this.beverage = new Espresso();
    console.log(this.beverage.getDescription() + " $" + this.beverage.cost());

    this.beverage2 = new DarkRoast();
    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Whip(this.beverage2);
    console.log(this.beverage2.getDescription() + " $" + this.beverage2.cost());

    this.beverage3 = new HouseBlend();
    this.beverage3 = new Soy(this.beverage3);
    this.beverage3 = new Mocha(this.beverage3);
    this.beverage3 = new Whip(this.beverage3);
    console.log(this.beverage3.getDescription() + " $" + this.beverage3.cost());
  }
}

export default StarBuzzCoffee;
