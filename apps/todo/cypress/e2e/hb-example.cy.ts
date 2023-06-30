//første som skjer er innlogging

describe('Hele testen', () => {

  before(()=> {
    let bruker = "Lier kommune";
    let brukerId = "123123123";
    (cy as any).loggInn(bruker, brukerId)
  })

  it('opptett søknad', () => {

  })
})
