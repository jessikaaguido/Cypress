describe('Teste do Site SeuBarriga', () => {
    it('Visita a pagina de novo cadastro', () => {
      cy.visit('https://seubarriga.wcaquino.me/cadastro');
    })

    it('Criando novo usuario', () => {       

        cy.get('[id=nome]').type('Yasmin de souza');
        cy.get('[id=email]').type('yasmin_teste@gmail.com');
        cy.get('[id=senha]').type('123456'); 
        cy.get('[value="Cadastrar"]').click();      

    })  
 
    it('Visita a pagina de login', () => {
         cy.visit('https://seubarriga.wcaquino.me/login');
    })

    it('Inserindo login de usuario', () => {

        cy.get('[id=email]').type('yasmin_teste@gmail.com');
        cy.get('[id=senha]').type('123456');    
        cy.get('.btn').click();     
  
        
        // confirme se todos os recursos estáticos foram executados
        cy.get('#app-message').should('not.be.empty');
        cy.log('app.js loaded');
        cy.contains('Sair').click();  
        
    }) 

    it('Listar contas', () => {
        
          cy.visit('https://seubarriga.wcaquino.me/login');   
          cy.get('[id=email]').type('yasmin_teste@gmail.com');
          cy.get('[id=senha]').type('123456');    
          cy.get('.btn').click();     

        //Listar contas
        cy.contains('Contas').click();
        cy.contains('Listar').click();

        
        cy.contains('jessika correa').should('to.have.length',1);        
              
    })  
  

})   

    
  

    


        
       

    
  