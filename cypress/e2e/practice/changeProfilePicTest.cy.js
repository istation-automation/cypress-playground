it('change profile picture', () => {
    const userName = 'erbot0001'
    const password = 'password'
    const domain = 'Conner Swanson Test Domain'

    cy.loginSE(userName, password, domain)

    const rng = Math.floor(Math.random() * 15)
    console.log(rng)
    cy.get('#open-profile-menu', {timeout:60000}).click();
    cy.get('#btn-avatar-chooser').click();
    cy.get('.avatar-selection > :nth-child('+rng+') > label').click();
    cy.get('#avatar-change-save').click();
    cy.get('#profilePopup > .btn-close > svg-icon > svg').click();

    cy.logoutSE()
})