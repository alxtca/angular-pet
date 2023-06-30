import { Component, OnInit } from '@angular/core';
import {BoxSize, ColorString} from "../farge-viseren/farge-viseren.component";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styles: [
    '.red {background-color: darkred}',
    '.green {background-color: chartreuse}',
    '.yellow {background-color: gold}',
    'div {width: 50px; height: 50px}',
  ]
})

export class TypesComponent implements OnInit {

  apple:Color = Color.red

  apple1:Color = Color.red
  apple2:Color = Color.green
  apple3:Color = Color.yellow

  eple1 = {
    farge: ColorString.green,
    size: BoxSize.liten
  }
  eple2 = {
    farge: ColorString.yellow,
    size: BoxSize.medium
  }
  eple3 = {
    farge: ColorString.red,
    size: BoxSize.stor
  }

  constructor() { }

  ngOnInit(): void {
  }

  returnerFarge(farge:Color) {
    let result = ''
    switch (farge) {
      case Color.red:
        result = 'red'
        break
      case Color.green:
        result = 'green'
        break
      case Color.yellow:
        result = 'yellow'
        break
    }
    return result
  }

  byttFarge() {
    if(this.apple < 2) this.apple++
    else this.apple = Color.red
  }

  byttFarge2(farge:Color) {
    if(farge < 2) farge++
    else farge = Color.red
  }

}
//example with numeric enums
enum Color {
  // Here are the enumerators
  // These symbolic constants define all the possible values this type can hold
  // Each enumerator is separated by a comma, not a semicolon
  red,
  green,
  yellow,
}

