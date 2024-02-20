it('my first test', () => {
  cy.visit('https://www.istation.com/')
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.active > .overlay-top > .content-wrapper > .inner > .left > .button-wrap > .button > .btn-text').click();
  cy.get('#hs_cos_wrapper_widget_1678983112094 > .image-left-content-right > .content-wrapper > .inner > .single-content > .right > .button-wrap > .button > .btn-text').click();
  cy.get('.index-3 > a').click();
  cy.contains('Request a Demo')
  /* ==== End Cypress Studio ==== */
})