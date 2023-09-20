import 'cypress-localstorage-commands';

// Sign in
describe('saveLocalStorage', () => {
    before(() => {
        cy.clearLocalStorageSnapshot();
        
    });

    beforeEach(() => {
        cy.login('email', 'code');
        cy.visit('/dashboard');
        
    });
    


    // Click on Go to profile button
    it('Click on Go to profile button ', () => {
        
        cy.get('.ant-card-extra').contains('Go To Profile').click();
        cy.location('pathname').should('eq', '/profile');
       
    });

    // Certificate Lookup
    it('Certificate Lookup ', () => {
        cy.get('#serialNumber').type('EA12026124UO7AM').type('{enter}');
       
    });

    // Click on  Products button
    it('Click on Products button ', () => {
        cy.get('.ant-btn-primary').contains('Products').click();
        cy.get('.ant-tag-orange').invoke('text').should('eq', '🔒 Created Products');
        cy.location('pathname').should('eq', '/products'); 
    });

    // Click on  Evaluation button
    it('Click on  Evaluation button ', () => {
        cy.get('.ant-btn-primary').contains('Evaluation').click();
        cy.location('pathname').should('eq', '/certifications'); 
    });

    // Click on  Opportunities button
    it('Click on  Opportunities button ', () => {
        cy.get('.ant-btn-primary').contains('Opportunities').click();
        cy.location('pathname').should('eq', '/opportunities'); 
      
    });

    // Click on  Knowledge-Base button
    it('Click on  Knowledge-Base button ', () => {
        cy.get('.ant-btn-primary').contains('Knowledge-Base').click();
        cy.location('pathname').should('eq', '/knowledge-base'); 
      
    });

    // Click on Created Opportunities button
    it('Click on Created Opportunities button ', () => {
        cy.get('.stats-section-title').contains('Created Opportunities').click();
        cy.get('.ant-tag-orange').invoke('text').should('eq', '🔒 Created Opportunities');

        cy.location('pathname').should('eq', '/opportunities'); 
    });

    // Click on Created Products button
    it('Click on Created Products button ', () => {
        cy.get('.stats-section-title').contains('Your Products').click();
        cy.get('.ant-tag-orange').invoke('text').should('eq', '🔒 Created Products');
        cy.location('pathname').should('eq', '/products'); 
    });


    // Click on Received Invitations button
    it('Click on Received Invitations button ', () => {
        cy.get('.stats-section-title').contains('Received Invitations').click();
        cy.get('.ant-tag-green').invoke('text').should('eq', '🔒 Personal Invitations');
        cy.location('pathname').should('eq', '/opportunities');
    });
});
