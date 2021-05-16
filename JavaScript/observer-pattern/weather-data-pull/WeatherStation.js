import WeatherData from './WeatherData.js';
import CurrentConditionDisplay from './CurrentConditionDisplay.js';
import ForecastDisplay from './ForecastDisplay.js';
import HeatIndexDisplay from './HeatIndexDisplay.js';
import TemperatureStatisticDisplay from './TemperatureStatisticDisplay.js';

class WeatherStation {
  constructor() {
    this.weatherData = new WeatherData();
    this.currentConditionDisplay = new CurrentConditionDisplay(this.weatherData);
    this.forecastDisplay = new ForecastDisplay(this.weatherData);
    this.heatIndexDisplay = new HeatIndexDisplay(this.weatherData);
    this.temperatureStatisticDisplay = new TemperatureStatisticDisplay(this.weatherData);
  }

  update() {
    this.weatherData.setMeasurements(10, 12, 25);
    this.weatherData.setMeasurements(15, 17, 35);
    this.weatherData.setMeasurements(14, 15, 30);
  }
}

export default WeatherStation;
