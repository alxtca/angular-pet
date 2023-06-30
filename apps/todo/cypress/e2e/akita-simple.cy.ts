// btn[0].click()
//why to wrap?
//if you d have another command that has to wait for btn to be clicked
//youd wrap next command to wait for button click to be done first
//something like this:
//cy.wrap(btn).some action
//cy.wait(1000)
//cy.wrap(btn).some other action
//this way you enforce synchronous execution

describe('Manipulate state directly', () => {
  it('Set state through UI', () => {
    cy.visit('/akita_simple')
    cy.get('input').type('learn cypress')
    cy.get('[data-e2e=add_todo]').click()
    cy.contains('learn cypress').should('be.visible')
  })

  it('Add s single todo directly to the state', () => {
    cy.visit('/akita_simple');
    (cy as any).addSimpleTodo()
    cy.window().then((window: Window) => {
      cy.wrap(window).its('appRef').invoke('tick')
    })
    cy.contains('added one todo in cypress test').should('be.visible')
    //changes are detected in component but UI does not update :(
  })



/*  it('Set state without UI', () => {
    (cy as any).setTodos({
      todos:
        [
          {
            id: '3',
            message: 'learn GPT',
            completed: false
          },
          {
            id: '4',
            message: 'learn to set state',
            completed: false
          }
        ]
      }
    )
    //UI blir ikke oppdatert her. hvorfor?
    cy.contains('learn GPT').should('exist')
  })*/
})
