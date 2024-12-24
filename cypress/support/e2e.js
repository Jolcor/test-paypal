// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Error no capturado:', err);
    return false; 
})

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1440, 900)
    cy.visit('/')
})