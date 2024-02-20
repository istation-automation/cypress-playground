it('simple login', () => {
    //cy.request('<ID_SERV_LINK>', { logindata })
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#Domain').clear();
    //cy.get('#Domain').type('Conner Swanson Test Domain');
    cy.get('#Domain').type('campus1.stresstest.tx');
    cy.get('#Password').clear();
    //cy.get('#Password').type('password');
    cy.get('#Password').type('LM94&#wV!Z');
    cy.get('#Username').clear();
    //cy.get('#Username').type('erbot0001');
    cy.get('#Username').type('test_000001');
    cy.get('#login-submit-btn').click();
    /* ==== End Cypress Studio ==== */
})