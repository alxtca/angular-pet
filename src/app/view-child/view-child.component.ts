import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildExampleComponent} from "./child-example/child-example.component";
import {ChildExample2Component} from "./child-example2/child-example2.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html'
})
export class ViewChildComponent implements OnInit {

  @ViewChild(ChildExampleComponent)
  card!: ChildExampleComponent;

  //works same as above. template variable seem to have reference to instance of the component.
  //this is usefully if there are several components with the same name in template.
  @ViewChild('tempVarChild2')
  card2!: ChildExample2Component;

  //In case reference to an element is required, but not to component instance:
  @ViewChild('tempVarChild2', {read: ElementRef})
  card3!: ChildExample2Component;

  //to get reference to DOM element
  @ViewChild('domElRef')
  domMyRef!: ElementRef;

  constructor() {  }

  ngOnInit(): void {
  }

  logChild() {
    console.log("card with ViewChild: ", this.card)
    console.log("card.someNum: ", this.card.someNum)
    console.log("card.title: ", this.card.title)
  }

  logChild2() {
    console.log("card with ViewChild: ", this.card2)
    console.log("card.someNum: ", this.card2.someNum)
    console.log("card.title: ", this.card2.title)
  }

  modifyChild() {
    this.card.someNum = 777;
  }

  runMethodOnChild() {
    this.card.alertMe()
  }
}
