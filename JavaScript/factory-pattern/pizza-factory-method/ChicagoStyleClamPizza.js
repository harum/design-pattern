import Pizza from './Pizza.js';

class ChicagoStyleClamPizza extends Pizza {
  _name = 'Chicago Style Clam Pizza';
  _dough = 'Extra Thick Crust Dough';
  _souce = 'Plum Tomato Sauce';
  _toppings = ['Shredded Mozzarella Cheese', 'Frozen Clams from Chesapeake Bay'];

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

export default ChicagoStyleClamPizza;
