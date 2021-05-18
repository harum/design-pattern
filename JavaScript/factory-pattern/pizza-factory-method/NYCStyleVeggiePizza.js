import Pizza from './Pizza.js';

class NYCStyleVeggiePizza extends Pizza {
  _name = 'NY Style Veggie Pizza';
  _dough = 'Thin Crust Dough';
  _souce = 'Marinara Sauce';
  _toppings = [
    'Grated Reggiano Cheese',
    'Garlic',
    'Onion',
    'Mushrooms',
    'Red Pepper',
  ];
}

export default NYCStyleVeggiePizza;
