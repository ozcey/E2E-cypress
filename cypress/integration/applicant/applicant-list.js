/// <reference types="cypress" />

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

describe('Applicant list page', () => {
    beforeEach(() => {
        cy.login(username, password);
    });
    
})
