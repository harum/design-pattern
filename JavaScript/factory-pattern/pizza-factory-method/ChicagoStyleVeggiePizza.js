import Pizza from './Pizza.js';

class ChicagoStyleVeggiePizza extends Pizza {
  _name = 'Chicago Deep Dish Veggie Pizza';
  _dough = 'Extra Thick Crust Dough';
  _souce = 'Plum Tomato Sauce';
  _toppings = [
    'Shredded Mozzarella Cheese',
    'Black Olives',
    'Spinach',
    'Eggplant',
  ];

  cut() {
    console.log('Cutting the pizza into square slices');
  }
}

export default ChicagoStyleVeggiePizza;
