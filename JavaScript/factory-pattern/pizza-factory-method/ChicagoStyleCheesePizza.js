import Pizza from './Pizza.js';

class ChicagoStyleCheezePizza extends Pizza {
  _name = 'Chicago Style Deep Dish Cheese Pizza';
  _dough = 'Extra Thick Crust Dough';
  _souce = 'Plum Tomato Sauce';
  _toppings = ['Shredded Mozzarella Cheese'];

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

export default ChicagoStyleCheezePizza;
