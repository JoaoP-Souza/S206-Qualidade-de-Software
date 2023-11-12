const { beforeEach } = require("mocha");


describe('Testando casos para a pagina de testes Shady Meadows: Bed & Breakfast', () => {
    //todos os waits utilizados, servem apenas para visualizar melhor o que esta acontecendo no teste e não são necessários 
    
    beforeEach (() => {
        cy.visit('https://automationintesting.online/'); //antes de cada caso de teste, acessa a pagina
    });
    

    it('Caso: Deve verificar se a página foi acessada com sucesso, verificando o texto que é exibido quando acessada', () => {
    
        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.get('p').should('contain.text', 'Welcome to Shady Meadows');
     
    });

    it('Caso: Deve tentar reservar um quarto, sem registrar o campo obrigatório de sobrenome e verificar o erro', () => {

        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.scrollTo(0, 500);
        cy.get('.col-sm-7 > .btn').eq(0).click();
        cy.get('.room-booking-form > .form-control').click().type('teste');
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').click();
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').click().type('email@email.com');
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').click().type('9999999999');
        cy.get('.col-sm-4 > .btn-outline-primary').click();
        cy.get('p').should('contain.text', 'Lastname should not be blank');

    });

    it('Caso: Deve tentar reservar um quarto, resgistrando  o campo número com um tamanho inválido e verificando o erro', () => {

        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.scrollTo(0, 500);
        cy.get('.col-sm-7 > .btn').eq(0).click();
        cy.get('.room-booking-form > .form-control').click().type('teste');
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').click().type('teste');
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').click().type('email@email.com');
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').click().type('777');
        cy.get('.col-sm-4 > .btn-outline-primary').click();
        cy.get('p').should('contain.text', 'tamanho deve ser entre 11 e 21');

    });

    it('Caso: Deve tentar enviar uma mensagem sem especificar um assunto e verificar o erro', () => {

        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.scrollTo(0, 900);
        cy.get('[data-testid="ContactName"]').click().type('teste');
        cy.get('[data-testid="ContactEmail"]').click().type('teste@email.com');
        cy.get('[data-testid="ContactPhone"]').click().type('999999999999');
        cy.get('[data-testid="ContactSubject"]').click();
        cy.get('[data-testid="ContactDescription"]').click().type('lorem ipsum dolor sit amet consectetur adipiscing elit');
        cy.get('#submitContact').click();
        cy.get('p').should('contain.text', 'Subject may not be blank');

    });

    it('Caso: Deve tentar enviar uma mensagem de tamanho inválido e verificar o erro', () => {

        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.scrollTo(0, 900);
        cy.get('[data-testid="ContactName"]').click().type('teste');
        cy.get('[data-testid="ContactEmail"]').click().type('teste');
        cy.get('[data-testid="ContactPhone"]').click().type('999999999999');
        cy.get('[data-testid="ContactSubject"]').click().type('teste');
        cy.get('[data-testid="ContactDescription"]').click().type('It just works!');
        cy.get('#submitContact').click();
        cy.get('p').should('contain.text', 'Message must be between 20 and 2000 characters.');
        
    });
        
    it('Caso: Deve tentar enviar uma mensagem e verificar a mensagem que confirma o envio de forma correta', () => {

        cy.scrollTo(0, 500);
        cy.wait(2000).get('button').contains('Let me hack!').click();
        cy.scrollTo(0, 900);
        cy.get('[data-testid="ContactName"]').click().type('teste');
        cy.get('[data-testid="ContactEmail"]').click().type('teste@email.com');
        cy.get('[data-testid="ContactPhone"]').click().type('999999999999');
        cy.get('[data-testid="ContactSubject"]').click().type('teste');
        cy.get('[data-testid="ContactDescription"]').click().type('lorem ipsum dolor sit amet consectetur adipiscing elit');
        cy.get('#submitContact').click();
        cy.scrollTo(0, 900);
        cy.get('h2').should('contain.text', 'Thanks for getting in touch');

    });

});
