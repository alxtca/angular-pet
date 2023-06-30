import {TrackerQuery} from "../../src/app/bug-tracker/state/tracker.query";
import {BugTrackerPage} from "../Pages/bug-tracker.page";

describe('Manupulating state directly', () => {

  let bugTrackerPage = new BugTrackerPage()

  it.only('testing page object', () => {
    bugTrackerPage.visit()
      .getInput().type('hello world{enter}')

    bugTrackerPage.getInput().type('good buy world{enter}')

  })


  it('Setting state through UI, verify without UI', () => {

    cy.visit('/bug_tracker')
    //add parts to state
    cy.contains('Insert new parts').click();
    //check parts in state
    cy.window().its('TrackerQuery').its('entities').then(what => {
      //can also see it when clicking on -its .TrackerQuery in cypress test log
      //this is what is Yielded
      console.log("Entities in the store: ", what)
    })

  })

  it('set state without UI, verify through UI', () => {

    //ser ut til å bli kalt, da store får nye verdier, men UI blir ikke oppdatert.
    cy.window().its('TrackerService').invoke('insertMoreParts')

/*    cy.window().its('TrackerService').then(res => {
      console.log("res", res)
    })*/
    cy.contains('Chisel').should('exist')

  })
})

//og så er den kommentaren her:
//You can now access it directly from the window object in dev mode.
