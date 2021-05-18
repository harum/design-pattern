import Pizza from './Pizza.js';

class ChicagoStylePepperoniPizza extends Pizza {
  _name = 'Chicago Style Pepperoni Pizza';
  _dough = 'Extra Thick Crust Dough';
  _souce = 'Plum Tomato Sauce';
  _toppings = [
    'Shredded Mozzarella Cheese',
    'Black Olives',
    'Spinach',
    'Eggplant',
    'Sliced Pepperoni',
  ];

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

export default ChicagoStylePepperoniPizza;
