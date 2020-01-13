/// <reference types="Cypress" />
describe('Login the monetoring', () => {
    it('Go to url', () => {
       cy.visit('https://yourwebsite.com/')
       cy.get('input[name=usermane]').type('user@yourwebsite.com{enter}')
       cy.wait(2000);
       cy.get('input[name=pass]').type('yourpassword{enter}')
    })
  })
  