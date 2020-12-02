describe('My First Test Suite', () => {
    it('test url works',() =>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').click();
        cy.get('#search_query_top').type('Women');
        cy.get('.button-search').click();
        cy.get('#searchbox').submit();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        cy.get('.sfHover > .sf-with-ul').click();
        cy.url().should('contains', 'http://automationpractice.com/index.php');
    });
})

