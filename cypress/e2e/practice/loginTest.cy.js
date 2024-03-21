it('simple login', () => {
   //cy.get('#Domain').type('Conner Swanson Test Domain');
   //cy.get('#Domain').type('campus1.stresstest.tx');
   //cy.get('#Password').type('password');
   //cy.get('#Password').type('LM94&#wV!Z');
   //cy.get('#Username').type('erbot0001');
   //cy.get('#Username').type('test_000001');

   const userName = 'erbot0001'
   const password = 'password'
   const domain = 'Conner Swanson Test Domain'

   cy.loginSE(userName, password, domain)
   cy.logoutSE()
})

