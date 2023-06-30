import {Component, OnInit} from "@angular/core";
import {AtodoQuery} from "./akita-simple/state/atodo.query";
import {AtodoStore} from "./akita-simple/state/atodo.store";
import {AtodoService} from "./akita-simple/state/atodo.service";


declare global {
  interface Window {
    addOne: any,
    populateTodos: any,
    AppComponent: any
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(
    private simpleStore: AtodoStore,
    private simpleQuery: AtodoQuery,
    private simpleService: AtodoService
    ) {
    //HB method
    if (window.Cypress) {
      console.log("Setting populateTodos on window object");
      window.populateTodos = (pf: any) => this.createProsjectfinansiering(pf);
      window.addOne = () => this.addSimpleTodo();
    }

    //from the course End-to-end Angular Testing with Cypress
    //App actions - tests have access to the components
    //through window object
    if (window.Cypress) {
      window.AppComponent = this;
    } //now you can use it to call(invoke) App methods inside cypress tests:
/*    cy.window().then((win: Window) => {
      cy.wrap(win).its('AppComponent')
        .invoke('createProsjectfinansiering', '{}')
    })*/

    //hb vs course - expose only one function vs expose everything.
    //also difference is how to call
    //HB uses Cypress.Commands.add
    //Course - see above comment
  }

  private createProsjectfinansiering(pf: any) {
    console.log("initiating store update(pf)")
    this.simpleStore.update(pf)
    console.log("store has been changed. new store state is: ")
    console.log(this.simpleQuery.getValue())
  }

  private addSimpleTodo() {
    this.simpleService.addNewTodo('added one todo in cypress test')
    console.log("added one todo to the store: ")
    console.log(this.simpleQuery.getValue())
  }

  ngOnInit(): void {
    console.log("Akita store state on init \n", this.simpleQuery.getValue())
  }
}
