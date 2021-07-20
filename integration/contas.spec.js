describe('Teste do Site SeuBarriga', () => {
    it('Visita a pagina de login', () => {
    cy.visit('https://seubarriga.wcaquino.me/login');

    //inserir dados do login
    cy.get('[id=email]').type('yasmin_teste@gmail.com');
    cy.get('[id=senha]').type('123456');    
    cy.get('.btn').click();     

    //Listar contas
    cy.contains('Contas').click();
    cy.contains('Listar').click();

    cy.get('[id="tabelaContas"]').should('to.have.length',2);
    cy.contains('teste').should('to.have.length',1);





    })  
})   