import Pizza from './Pizza.js';

class NYCStyleClamPizza extends Pizza {
  _name = 'NY Style Clam Pizza';
  _dough = 'Thin Crust Dough';
  _souce = 'Marinara Sauce';
  _toppings = [
    'Grated Reggiano Cheese',
    'Fresh Clams from Long Island Sound',
  ];
}

export default NYCStyleClamPizza;
