export class BugTrackerPage {

  //fluent page object - support method chaining

  visit(): BugTrackerPage {
    cy.visit('/bug_tracker');
    return this;
  }

  //have same return type as cypress get command
  getInput(): Cypress.Chainable {
    return cy.get('input');
  }

}
