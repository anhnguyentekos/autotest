import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

Cypress.Commands.add('login',() => 
{
    cy.session([], () =>
    {
        const email = '_ghost@zooc.org';
        cy.visit('/login');
        cy.get('#email').type(email);
        cy.get('.ant-btn-primary').contains('Continue').click();
        cy.get('#verificationPin').should('be.visible');
    
        cy.get('#verificationPin').type('918273');
        cy.get('.ant-btn-primary').contains('Login').click();
        cy.wait(2000);
    });
},
{
    cacheAcrossSpecs: true
}
);

Cypress.Commands.add('loginLab',() => 
{
    cy.session([], () =>
    {
        const email = '_ghost_lab@zooc.org';
        cy.visit('/login');
        cy.get('#email').type(email);
        cy.get('.ant-btn-primary').contains('Continue').click();
        cy.get('#verificationPin').should('be.visible');
    
        cy.get('#verificationPin').type('277172 ');
        cy.get('.ant-btn-primary').contains('Login').click();
        cy.wait(2000);
    });
},
{
    cacheAcrossSpecs: true
}
);

