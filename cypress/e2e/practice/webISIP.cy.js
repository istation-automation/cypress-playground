it('my first test', () => {
    cy.visit('https://isip-dev.istation.com/')
    cy.get('#Domain').clear();
    cy.get('#Domain').type('Conner Swanson Test Domain');
    cy.get('#Password').clear();
    cy.get('#Password').type('password');
    cy.get('#Username').clear();
    cy.get('#Username').type('erbot0001');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#login-submit-btn').click();
    /* ==== End Cypress Studio ==== */
})