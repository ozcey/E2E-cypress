/// <reference types="cypress" />

const username = Cypress.env('USERNAME');
const password = Cypress.env('PASSWORD');

const user = {
    name: 'Joe Doe',
    username: 'joedoe',
    email: 'joed@gmail.com',
    password: 'password'
};

const updatedUser = {
    name: 'John Doe',
    password: '12345678'
};

describe('user page', () => {
    before(() => {
        cy.login(username, password);
    });

    it('end to end testing with user page', () => {
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

        cy.wait(5000)

        cy.get('#to_list')
            .click();

        // Search User with Name
        cy.get('#search')
            .type(user.name)

        cy.get('.mat-row > .cdk-column-name')
            .invoke('text')
            .should('contain', user.name);

        // Update User
        cy.get('.mat-primary > .mat-button-wrapper > .mat-icon')
            .click();

        cy.get('#name')
            .clear();

        cy.get('#name')
            .type(updatedUser.name)

        cy.get('#password')
            .type(updatedUser.password)

        cy.get('#roles').click();
        cy.wait(2000)
        cy.get('#mat-option-10').click()

        cy.get('#submit')
            .click();

        cy.wait(1000)

        cy.get('.mat-simple-snackbar > span')
            .invoke('text')
            .should('equal', 'User updated successfully.');

        cy.wait(5000)

        cy.get('#to_list')
            .click();

        // Search User with Updated Name
        cy.get('#search')
            .type(updatedUser.name)

        cy.get('.mat-row > .cdk-column-name')
            .invoke('text')
            .should('contain', updatedUser.name);

        // Delete User
        cy.get('.mat-accent > .mat-button-wrapper > .mat-icon')
            .click();

        cy.get('.mat-dialog-actions > .mat-primary > .mat-button-wrapper')
            .click();

        cy.wait(1000)

        cy.get('.mat-simple-snackbar > span')
            .invoke('text')
            .should('equal', 'User deleted successfully!');

    });
});