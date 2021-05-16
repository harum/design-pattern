import Subject from './Subject.js';

class WeatherData extends Subject {
  _observers = new Set();
  _temperature = undefined;
  _humidity = undefined;
  _pressure = undefined;

  constructor() {
    super();
  }

  _notifyObservers() {
    this._observers.forEach((observer) => {
      observer.update();
    });
  }

  _measurementsChanges() {
    this._notifyObservers();
  }

  registerObserver(observer) {
    this._observers.add(observer);
  }

  removeObserver(observer) {
    this._observers.delete(observer);
  }

  setMeasurements(temperature, humidity, pressure) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;

    this._measurementsChanges();
  }

  get temperature() {
    return this._temperature;
  }

  get humidity() {
    return this._humidity;
  }

  get pressure() {
    return this._pressure;
  }
}

export default WeatherData;
