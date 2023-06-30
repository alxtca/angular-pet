import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-farge-viseren',
  templateUrl: './farge-viseren.component.html',
  styles: [
    '.red {background-color: darkred}',
    '.green {background-color: chartreuse}',
    '.yellow {background-color: gold}',
    'div {width: 50px; height: 50px}',
    '.liten {width: 50px; height: 50px}',
    '.medium {width: 100px; height: 100px}',
    '.stor {width: 150px; height: 150px}',
  ]
})

export class FargeViserenComponent implements OnInit {
  @Input() farge:ColorString = ColorString.green
  @Input() size:BoxSize = BoxSize.liten

  constructor() { }

  ngOnInit(): void {
  }

}

//example with string enums
export enum ColorString {
  red="red",
  green="green",
  yellow="yellow",
}

export enum BoxSize {
  liten="liten",
  medium="medium",
  stor="stor",
}
