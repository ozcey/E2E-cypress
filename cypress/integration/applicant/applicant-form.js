/// <reference types="cypress" />

describe('Applicant page', () => {
    beforeEach(() => {
        cy.visit('applicant')
    });

    it('applicant form', () => {

        // Contact Info
        cy.get('#first_name')
            .type('John')

        cy.get('#last_name')
            .type('Markson')

        cy.get('#phone')
            .type('1234567890')

        cy.get('#email')
            .type('jmarkson@yahoo.com')

        cy.get('#next_1')
            .click();

        // Address info
        cy.get('#street')
            .type('123 Elk Dr')

        cy.get('#city')
            .type('Irvine')

        cy.get('#state')
            .type('CA')

        cy.get('#zipcode')
            .type('12345')

        cy.get('#next_2')
            .click();

        // Job info
        cy.get('#category').click();
        cy.wait(2000)
        cy.get('#mat-option-0 > .mat-option-text').click();

        cy.get('#age')
            .type('34')

        cy.get('#gender').click();
        cy.wait(2000)
        cy.get('#mat-option-3 > .mat-option-text').click();

        cy.get('#degree')
            .type('B.S')

        cy.get('#languages').click();
        cy.wait(2000)
        cy.get('#mat-option-5 > .mat-option-text').click();

        cy.get('#next_3')
            .click();

        // Submit
        cy.get('#submit')
        .click();

        cy.get('.alert')
        .contains('Applicant created successfully.')

        cy.get('#submit')
        .should('be.disabled')
    })
});