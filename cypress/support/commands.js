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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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
Cypress.Commands.add('loginSE', (userName, password, domain) => {
    cy.visit('/')
    cy.get('#Domain', {timeout:10000}).clear();
    cy.get('#Domain').type(domain);
    cy.get('#Password').clear();
    cy.get('#Password').type(password);
    cy.get('#Username').clear();
    cy.get('#Username').type(userName);
    cy.get('#login-submit-btn').click();
    cy.get('.container > swe-loading', {timeout:120000}).should('exist');
    cy.get('.container > swe-loading', {timeout:120000}).should('not.exist');
})

Cypress.Commands.add('logoutSE', () => {
    cy.get('#open-profile-menu').click();
    cy.get('.popup-footer > .btn').click();
    cy.get('.dialog-footer > .btn-primary').click();
    cy.on('uncaught:exception', (err, runnable) => {
      //cy.log("Error is " + err)
      return false
    })
    cy.get('.sys > .btn-group > .btn', {timeout:10000}).click();
})