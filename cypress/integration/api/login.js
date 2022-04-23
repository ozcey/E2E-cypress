const url = 'http://localhost:5000/auth/login'

const login = (username, password) => {
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
}

const init = async () => {
    await login('admin', 'password');
}

describe('Login Test', () => {
    before(() => {
        init();
    })
    it('should login to account', () => {
        const token = window.localStorage.getItem('jwt')
        cy.log('from test', token);
        cy.clearLocalStorage('jwt');
    });
})