import Pizza from './Pizza.js';

class VeggiePizza extends Pizza {
  _name = 'Veggie Pizza';
  _dough = 'Crust';
  _souce = 'Marinara sauce';
  _toppings = [
    'Shredded mozzarella',
    'Grated parmesan',
    'Diced onion',
    'Sliced mushrooms',
    'Sliced red pepper',
    'Sliced black olives',
  ];
}

export default VeggiePizza;
