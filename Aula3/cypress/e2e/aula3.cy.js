

describe('Criando cenáriods de teste para o site globalsqa', () => {
    it('Caso: Deve cadastrar um novo usuário e verificar se a assertiva está sendo cumprida', () => {
        criarUsuario();
        cy.get('.ng-binding').should('have.text', 'Registration successful');
    });

    it('Caso: deve tentar logar com um usuário não cadastrado e verificar se o erro esta sendo exibido', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('#username').type('tes');
        cy.get('#password').type('te');
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should('have.text', 'Username or password is incorrect');
    });

});

function criarUsuario(){
    //criando string aleatoria a partir de letras
    const nome = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //criando tambem para outros campos
    const sobrenome = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const usuario = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const senha = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type(nome);
    cy.get('#Text1').type(sobrenome);
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.btn-primary').click();

}