import Subject from './Subject.js';

class WeatherData extends Subject {
  constructor() {
    super();
    this.observers = new Set();
    this.temperature = undefined;
    this.humidity = undefined;
    this.pressure = undefined;
  }

  registerObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanges() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanges();
  }
}

export default WeatherData;
