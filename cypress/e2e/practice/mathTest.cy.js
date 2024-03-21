it('change profile picture', () => {
    const userName = 'erbot0001'
    const password = 'password'
    const domain = 'Conner Swanson Test Domain'

    cy.loginSE(userName, password, domain)

    cy.get(':nth-child(2) > .card > .card-block > .card-play > .btn > svg-icon > svg > path').click();
    cy.get('#canvas', { timeout: 60000 }).should('be.visible')

    cy.visit('/')
    cy.get('.container > swe-loading', {timeout:120000}).should('exist');
    cy.get('.container > swe-loading', {timeout:120000}).should('not.exist');
    cy.logoutSE()
})