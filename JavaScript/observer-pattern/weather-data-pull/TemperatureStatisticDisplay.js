import Observer from './Observer.js';
import DisplayElement from './DisplayElement.js';

class TemperatureStatisticDisplay {
  constructor(weatherData) {
    this.temperatures = [];
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperatures.push(this.weatherData.temperature);
    this.avg = this.temperatures.reduce((acc, curr) => acc + curr, 0) / this.temperatures.length;
    this.min = Math.min(...this.temperatures);
    this.max = Math.max(...this.temperatures);
    this.display();
  }

  display() {
    console.log('Avg/Max/Min temperature = %f/%d/%d', this.avg, this.max, this.min);
  }
}

// We can not emulate multiple inheritance perfectly
// We use mixin as workaround
Object.setPrototypeOf(TemperatureStatisticDisplay.prototype, {
  ...Observer,
  ...DisplayElement,
});

export default TemperatureStatisticDisplay;
