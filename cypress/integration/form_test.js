describe('Complete Spring tests', () =>{
    it('Add text to box', () =>{
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
        cy.get('input[name="username"]')
            cy.type('Nova')
            .should('have.value,' 'Ezio Auditore')
    })

})