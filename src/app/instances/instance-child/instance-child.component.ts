import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instance-child',
  templateUrl: './instance-child.component.html'
})
export class InstanceChildComponent implements OnInit {
  @Input() someInput!: {name: string};

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("child was instantiated: ", this.someInput.name)
    //this.someInput.name = 'new name' //does not affect above line for any component, but affect what is shown in template
    console.log("counter: ", this.counter)
    this.counter++
  }

}
