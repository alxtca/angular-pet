//tell about new method of Chainable interface
declare namespace Cypress {
  interface Chainable {
    setTodos(text: string): void;
    addSimpleTodo(): void;
  }
}

Cypress.Commands.add('setTodos', (td) => {
  //so how do I set the state?
  //I need to run function that populate akita store
  //which is
  //insertNewParts()
  console.log("inside setTodos")
  cy.window().then((win) => {
    console.log("setting function on window")
    //på dette tidspunktet burde createProsjectfinansiering være registrert
    //den er registrert i AppComponent constructor (assign function to a key).
    win.populateTodos(td);
  })
})

Cypress.Commands.add('addSimpleTodo', () => {
  cy.window().then((win) => {
    win.addOne();
  })
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
