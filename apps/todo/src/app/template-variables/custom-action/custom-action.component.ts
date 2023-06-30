import {Component, inject, OnInit} from '@angular/core';
import {WeatherWidgetComponent} from "../weather-widget/weather-widget.component";

@Component({
  selector: 'app-custom-action',
  templateUrl: './custom-action.component.html',
  styleUrls: ['./custom-action.component.css']
})
export class CustomActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  weatherWidget = inject(WeatherWidgetComponent)

  onClick() {
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
