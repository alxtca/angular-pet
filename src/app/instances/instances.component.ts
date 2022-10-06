import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html'
})
export class InstancesComponent implements OnInit {

  allInstances = [
    {name: "first"},
    {name: "second"},
    {name: "third"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
