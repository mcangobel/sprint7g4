describe('test', () => {
    it ('can login successfully', () => {
        cy.visit('localhost:5173/');
        cy.get('#email').type('abc@abc.com');
        cy.get('#password').type('12345');
        cy.get('#terms').click();

        cy.get('#submit').should('not.be.disabled');
    })
    it('button disabled and page contains right error message if email is wrong format', () => {
        cy.visit('localhost:5173/');
        cy.get('#email').type('abc@abc');
        cy.contains('Doğru bir email girin.');
    })
    it('screen contains two error messages', () => {
        cy.visit('localhost:5173/');
        cy.get('#email').type('abc@abc');
        cy.get('#password').type('1234');
        cy.contains('Doğru bir email girin.');
        cy.contains('Password 5 karakterden büyük olmalı');
    })
    it('button disabled if email and password is valid', () => {
        cy.visit('localhost:5173/');
        cy.get('#email').type('abc@abc.com');
        cy.get('#password').type('12345');

        cy.get('#submit').should('be.disabled');
    })
})