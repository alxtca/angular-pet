import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.components.css']
})
export class TablesComponent implements OnInit {

  cars = [
    {brand: "BMW", model: "M5", year: 2010, details: [
        {modification: 'a1', hp: 250},
        {modification: 'a2', hp: 280},
        {modification: 'a3', hp: 320},
      ]},
    {brand: "Audi", model: "Q8", year: 2015, details: [
        {modification: 'b1', hp: 180},
        {modification: 'b2', hp: 210},
        {modification: 'b3', hp: 215},
      ]},
    {brand: "Mitsubisi", model: "Outlander", year: 2010, details: [
      {modification: 'c1', hp: 140},
      {modification: 'c2', hp: 155},
      {modification: 'c3', hp: 175},
      ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
