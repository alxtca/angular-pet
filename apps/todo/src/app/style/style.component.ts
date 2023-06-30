import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html'
})
export class StyleComponent implements OnInit {

  selectedItem = 1;

  constructor() { }

  ngOnInit(): void {
  }

  paraStyle() {
    return {'text-decoration': 'underline'};
  }

  paraClass() {
    return 'box1';
  }
}
