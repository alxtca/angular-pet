import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html'
})
export class ChildExampleComponent implements OnInit {

  title = 'child component example'
  someNum = 47;

  constructor() { }

  ngOnInit(): void {
  }

  alertMe() {
    alert("childs method alerting")
  }

}
