/// <reference types="cypress" />

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

const user = {
    name: 'Joe Doe',
    username: 'joedoe',
    email: 'joed@gmail.com',
    password: 'password'
};

describe('user page', () => {
    beforeEach(() => {
        cy.login(username, password);
    });

    it('create new user', () => {
        cy.get('#create_user').click();

        cy.get('#title')
            .invoke('text')
            .should('equal', 'Create User');

        cy.get('#name')
            .type(user.name)

        cy.get('#username')
            .type(user.username)

        cy.get('#email')
            .type(user.email)

        cy.get('#password')
            .type(user.password)

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
            .type(user.name)

        cy.get('.mat-row > .cdk-column-name')
            .invoke('text')
            .should('contain', user.name);

    });

    it('update an existing user', () => {
        cy.get(':nth-child(10) > .cdk-column-edit > .mat-primary > .mat-button-wrapper > .mat-icon')
            .click();

        cy.get('#password')
            .type(user.password)

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