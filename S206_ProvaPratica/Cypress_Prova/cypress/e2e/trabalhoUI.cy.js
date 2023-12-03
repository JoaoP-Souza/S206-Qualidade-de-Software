const { beforeEach } = require("mocha");


describe('Testando casos para a pagina de testes Computers Database', () => {


    beforeEach (() => {
        cy.wait(2000).visit('https://computer-database.gatling.io/computers'); //antes de cada caso de teste, acessa a pagina
        cy.get('h1').should('contain.text', 'computers found');
    });
    

    it('Caso: Deve tentar enviar um formulário vazio', () => {

        cy.get('#add').click();
        cy.get('#name').click().clear();
        cy.get('#introduced').click().clear();
        cy.get('#discontinued').click().clear();
        cy.get('.btn.primary').click();
        cy.get('.error > .input > .help-inline').should('contain.text', 'Predicate isEmpty() did not fail');

    });

    it('Caso: Deve tentar enviar um formulário com umdata invalida', () => {

        cy.get('#add').click();
        cy.get('#name').click().clear().type('Teste');
        cy.get('#introduced').click().clear().type('2021-01-01');
        cy.get('#discontinued').click().clear().type('2020-01-01');
        cy.get('.btn.primary').click();
        cy.get('.error > .input > .help-inline').should('contain.text', 'Discontinued date is before introduction date');

    });

    it('Caso: Deve tentar enviar um formulário com dados preenchidos corretamente', () => {
        cy.get('#add').click();
        cy.get('#name').click().clear().type('Teste');
        cy.get('#introduced').click().clear().type(randInitDate());
        cy.get('#discontinued').click().clear().type(randEndDate());
        cy.get('.btn.primary').click();
        cy.wait(1000).get('.alert-message.warning').should('contain.text', 'Computer Teste has been created');
    });
    
function randInitDate() {
    var date = new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  function randEndDate() {
    var date = new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
});
