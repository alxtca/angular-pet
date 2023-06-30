import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  message = "Hello from Global!"

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    name: 'John',
    message: "Hello from Object",
    showInfo: function(param: string) {
      console.log("persons name: ", this.name, ". \n param send to the function: ", param);
    },
    logObjectMessage: function(message: string) {
      console.log(this.message) //this refers to object scope in "function expression"
    },
    logGlobalMessage: (message: string) => {
      console.log(this.message) //this refers to outer scope in "arrow function expression"
    },
    greetMany: (...names: string[]) => {
      names.forEach(name => console.log('Hi', name));
    },
    greetManyWithMessage: (message:string, ...names: string[]) => {
      console.log(message + ' everyone')
      names.forEach(name => console.log(message, name));
    },
    takeCareOfRest: (first:string, second:string, ...rest: string[]) => {
      console.log("first:", first)
      console.log("second:", second)
      console.log("rest", rest)
    },
    wtfIsThis: (...many: string[]) => {
      return false; //visningsfunksjon: (...values: any[]) => boolean
    }
  }

  runShowInfo() {
    this.person.showInfo("the-string-argument")
  }

  test1() {
    let guests = ['Anna', 'Maria', 'Karl', 'Peter', 'SomeDude']
    let letters = 'abcdef'
    //I gues it does not work in TS
    //this.person.takeCareOfRest(...letters)
  }
}
