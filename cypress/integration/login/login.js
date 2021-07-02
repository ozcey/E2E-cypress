/// <reference types="cypress" />

const username = Cypress.env('USERNAME')
const password = Cypress.env('PASSWORD')

describe('login functionality', () => {
    beforeEach(() => {
        cy.visit('login')
    });

    it('log in to account', () => {
        cy.get('#username')
            .type(username)

        cy.get('#password')
            .type(password)

        cy.get('#submit')
            .click();

        cy.url().should('include', 'user')

        cy.get('#create_user')
            .invoke('text')
            .should('equal', 'Create User')
    });
})