import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

Cypress.Commands.add('login',() => 
{
    cy.session([], () =>
    {
        const email = 'anything@3ae7depk6evl.mailisk.net';
        cy.visit('/login');
        cy.get('#email').type(email);
        cy.get('[type=submit]').click();
        cy.get('#verificationPin').should('be.visible');
    
        cy.request({
            method: 'GET',
            url: 'https://api.mailisk.com/api/emails/3ae7depk6evl/inbox',
            headers: {
                'X-Api-Key': 'Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM',
            },
        }).then((response) => {
            const {body} = response;
            const text = body.data[0].subject;
            const match = text.match( /is (\d+)/);
            const code = match ? match[1] : null;
    
            cy.get('#verificationPin').type(code);
            cy.get('[type=submit]').click();
            cy.wait(2000);

        });
    },
    {
        cacheAcrossSpecs: true
    }
    );
    
});
