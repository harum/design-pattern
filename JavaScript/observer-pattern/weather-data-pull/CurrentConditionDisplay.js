import Observer from './Observer.js';
import DisplayElement from './DisplayElement.js';

class CurrentConditionDisplay {
  constructor(weatherData) {
    this.temperature = undefined;
    this.humidity = undefined;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }

  display() {
    console.log('Current condition: temperature %f C degrees and humidity %f% humidity', this.temperature, this.humidity);
  }
}

// We can not emulate multiple inheritance perfectly
// We use mixin as workaround
Object.setPrototypeOf(CurrentConditionDisplay.prototype, {
  ...Observer,
  ...DisplayElement,
});

export default CurrentConditionDisplay;
