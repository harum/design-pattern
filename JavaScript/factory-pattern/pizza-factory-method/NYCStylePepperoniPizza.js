import Pizza from './Pizza.js';

class NYCStylePepperoniPizza extends Pizza {
  _name = 'NY Style Pepperoni Pizza';
  _dough = 'Thin Crust Dough';
  _souce = 'Marinara Sauce';
  _toppings = [
    'Grated Reggiano Cheese',
    'Sliced Pepperoni',
    'Garlic',
    'Onion',
    'Mushrooms',
    'Red Pepper',
  ];
}

export default NYCStylePepperoniPizza;
