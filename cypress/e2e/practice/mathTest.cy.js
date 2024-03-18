it('change profile picture', () => {
    const userName = 'erbot0001'
    const password = 'password'
    const domain = 'Conner Swanson Test Domain'

    cy.loginSE(userName, password, domain)
    cy.wait(30000)

    cy.get(':nth-child(2) > .card > .card-block > .card-play > .btn > svg-icon > svg > path').click();
    cy.wait(30000)

    cy.get('#canvas').then(($el) => {
        if ($el.is(':visible')) {

        } else {
            //fail
            throw new Error("Runtime isn't on screen")
        }
    })

    cy.visit('/')
    cy.wait(30000)
    cy.logoutSE()
})