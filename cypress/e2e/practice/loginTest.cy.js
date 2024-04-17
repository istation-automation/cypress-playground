it('simple login', () => {
   const userName = 'erbot0001'
   const password = 'password'
   const domain = 'Conner Swanson Test Domain'

   cy.loginSE(userName, password, domain)
   cy.logoutSE()
})

