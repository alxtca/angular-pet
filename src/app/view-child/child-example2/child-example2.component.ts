import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-example2',
  templateUrl: './child-example2.component.html'
})
export class ChildExample2Component implements OnInit {

  title = 'another example'
  @Input() someNum = 177;

  constructor() { }

  ngOnInit(): void {
  }

}
