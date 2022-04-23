// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
    cy.visit('login')

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

Cypress.Commands.add('signin', (username, password) => {
 const url = 'http://localhost:5000/auth/login'
    cy.request({
        url: url,
        method: 'POST',
        body: {
            username: username,
            password: password
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        const body = response.body;
        console.log('body', body);
        cy.window().then(win => win.localStorage.setItem('jwt', body.token))
    })
});