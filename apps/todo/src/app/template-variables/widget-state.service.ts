import { Injectable } from '@angular/core';


export interface WeatherData {
  temperature: number;
  windspeed: number;
  skyCondition: 'sunny' | 'cloudy'
}

@Injectable({
  providedIn: 'root'
})
export class WidgetStateService {

  data: WeatherData = {
    temperature: 20,
    windspeed: 5,
    skyCondition: 'sunny'
  }

  lastUpdateAt = new Date();

}
