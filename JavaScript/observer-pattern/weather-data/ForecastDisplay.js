import Observer from './Observer.js';
import DisplayElement from './DisplayElement.js';

class ForecastDisplay {
  constructor(weatherData) {
    this.currentPressure = 30;
    this.lastPressure = undefined;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  display() {
    console.log('Forecast: ');

    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure === this.lastPressure) {
      console.log('More of the same');
    } else {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}

// We can not emulate multiple inheritance perfectly
// We use mixin as workaround
Object.setPrototypeOf(ForecastDisplay.prototype, {
  ...Observer,
  ...DisplayElement,
});

export default ForecastDisplay;
