import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
})

//generic class
export class GenericsComponent<T> implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
