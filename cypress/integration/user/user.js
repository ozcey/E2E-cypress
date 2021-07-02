/// <reference types="cypress" />

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

const u_name = 'Sarah Walker';

describe('user form', () => {
    beforeEach(() => {
        cy.login(username, password);
    });

    it('create new user', () => {
        cy.get('#create_user').click();

        cy.get('#title')
            .invoke('text')
            .should('equal', 'Create User');

        cy.get('#name')
            .type(u_name)

        cy.get('#username')
            .type('swalker')

        cy.get('#email')
            .type('swalker@gmail.com')

        cy.get('#password')
            .type('password')

        cy.get('#roles').click();
        cy.wait(2000)
        cy.get('#mat-option-4 > .mat-option-text').click()

        cy.get('#submit')
            .click();

        cy.wait(1000)

        cy.get('.mat-simple-snackbar > span')
            .invoke('text')
            .should('equal', 'User created successfully.');
    });

    it('search an existing user with name', () => {
        cy.get('#search')
        .type(u_name)

        cy.get('.mat-row > .cdk-column-name')
        .invoke('text')
        .should('contain', u_name);

    });

    it('update an existing user', () => {
        cy.get(':nth-child(10) > .cdk-column-edit > .mat-primary > .mat-button-wrapper > .mat-icon')
        .click();

          cy.get('#password')
              .type('password')

          cy.get('#roles').click();
          cy.wait(2000)
          cy.get('#mat-option-4 > .mat-option-text').click()

          cy.get('#submit')
              .click();

          cy.wait(1000)

          cy.get('.mat-simple-snackbar > span')
              .invoke('text')
              .should('equal', 'User updated successfully.');

    })

    it('delete an existing user', () => {
        cy.get(':nth-child(10) > .cdk-column-edit > .mat-accent > .mat-button-wrapper > .mat-icon')
            .click();

        cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper')
            .click();

        cy.wait(1000)

        cy.get('.mat-simple-snackbar > span')
            .invoke('text')
            .should('equal', 'User deleted successfully!');

    });
})