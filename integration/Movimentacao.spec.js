describe('Teste do Site SeuBarriga', () => {
        it('Visitando pagina de movimentação', () => {
        cy.visit('https://seubarriga.wcaquino.me/login');

    
         
           cy.get('[id=email]').type('yasmin_teste@gmail.com');
           cy.get('[id=senha]').type('123456');    
           cy.get('.btn').click();  

           cy.contains('Criar Movimentação').click();     



        
        })

    })