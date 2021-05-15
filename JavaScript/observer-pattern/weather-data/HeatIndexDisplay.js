import Observer from './Observer.js';
import DisplayElement from './DisplayElement.js';

class HeatIndexDisplay {
  constructor(weatherData) {
    this.heatIndex = undefined;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature, humidity) {
    const t = temperature;
    const rh = humidity;
    this.heatIndex = (
      (16.923 + (0.185212 * t)) + 
      (5.37941 * rh) - 
      (0.100254 * t * rh) + 
      (0.00941695 * (t * t)) + 
      (0.00728898 * (rh * rh)) + 
      (0.000345372 * (t * t * rh)) - 
      (0.000814971 * (t * rh * rh)) +
      (0.0000102102 * (t * t * rh * rh)) - 
      (0.000038646 * (t * t * t)) + 
      (0.0000291583 * (rh * rh * rh)) +
      (0.00000142721 * (t * t * t * rh)) + 
      (0.000000197483 * (t * rh * rh * rh)) - 
      (0.0000000218429 * (t * t * t * rh * rh)) +
      (0.000000000843296 * (t * t * rh * rh * rh)) -
      (0.0000000000481975 * (t * t * t * rh * rh * rh)));

    this.display();
  }

  display() {
    console.log('Heat index is %f', this.heatIndex);
  }
}

// We can not emulate multiple inheritance perfectly
// We use mixin as workaround
Object.setPrototypeOf(HeatIndexDisplay.prototype, {
  ...Observer,
  ...DisplayElement,
});

export default HeatIndexDisplay;
