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
    
    // Dashboard
    // Check text
    // it('Check text', () => {
    //     cy.visit('/dashboard');
    //     cy.get('.page-content-layout-top-bar-title').should('have.text', 'Dashboard');
    //     // cy.get('.ant-card-head-title')
    //     //     .eq(0)
    //     //     .should('have.text', 'Welcome');
    //     // cy.get('.welcome-section-container').should(
    //     //     'contain',
    //     //     '🎉 Congrats! You\'re now inside the platform!'+
    //     // 'We\'re thrilled to welcome you to our beta testing environment, where we can work together to develop workflows tailored to your unique processes.'+
    //     // '🧐 What can you look forward to on this platform?'+
    //     // 'Adding new products with ease 🆕'+
    //     // 'Evaluating your products\' compliance using the ETSI Standard 🔍'+
    //     // 'Creating and uncovering new opportunities to buy and/or sell products 🛍️'+
    //     // '📝 We\'re eager to hear your initial thoughts on your first experience!',
    //     // );

    //     cy.get('.ant-card-head-title')
    //         .eq(1)
    //         .should('have.text', 'Profile Completion');
    //     cy.get('.profile-completion-section-container').should(
    //         'contain',
    //         'Fill out your profile details to enjoy a better experience!',
    //     );
    //     cy.get('.ant-card-head-title')
    //         .eq(2)
    //         .should('have.text', 'Evaluation Levels');

    //     cy.get('.certification-level-section-row')
    //         .eq(0)
    //         .should('contain', 'Basic')
    //         .and(
    //             'contain',
    //             'Basic means that the vendor makes a public statement of conformity with the security requirements',
    //         );
    //     cy.get('.certification-level-section-row')
    //         .eq(1)
    //         .should('contain', 'Enhanced')
    //         .and(
    //             'contain',
    //             'Enhanced means that the vendor delivers the evidence that the product conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on a review of the technical documentation. This level provides assurance in that the product have been evaluated at a level intended to minimize the known basic risks of cyber-incidents and cyber-attacks.',
    //         );
    //     cy.get('.certification-level-section-row')
    //         .eq(2)
    //         .should('contain', 'Substantial')
    //         .and(
    //             'contain',
    //             'Substantial means that the vendor delivers the product itself along with evidence that it conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on at least: a review to demonstrate the absence of known vulnerabilities; testing to demonstrate that the product correctly implement the security functionalities. This level provides assurance in that the product have been evaluated at a level intended to minimize cybersecurity risks, cyber-incidents and cyber-attacks carried out by actors with limited skills and resources.',
    //         );
    //     cy.get('.certification-level-section-row')
    //         .eq(3)
    //         .should('contain', 'High')
    //         .and(
    //             'contain',
    //             'High means that the vendor delivers the product itself along with evidence that it conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on at least: a review to demonstrate the absence of known vulnerabilities;testing to demonstrate that the product correctly implement the security functionalities; an assessment of their resistance to skilled attackers using penetration testing.This level provides assurance in that the product have been evaluated at a level intended to minimize the risk of state-of-the-art cyber-attacks carried out by actors with significant skills and resources.',
    //         );
    // });

    // Click on Go to profile button
    it('Click on Go to profile button ', () => {
        
        cy.get('.ant-card-extra').contains('Go To Profile').click();
        cy.location('pathname').should('eq', '/profile');
       
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
        cy.location('pathname').should('eq', '/opportunities'); 
    });

    // Click on Your Products button
    it('Click on Your Products button ', () => {
        cy.get('.stats-section-title').contains('Your Products').click();
        cy.get('.ant-tag-orange').invoke('text').should('eq', '🔒 Created Products');
        cy.location('pathname').should('eq', '/products'); 
    });

    // Click on Your Certified Products button
    it('Click on Your Certified Products button ', () => {
        cy.get('.stats-section-title').contains('Your Certified Products').click();
        cy.location('pathname').should('eq', '/products'); 

    });
    // Click on Received Invitations button
    it('Click on Received Invitations button ', () => {
        cy.get('.stats-section-title').contains('Received Invitations').click();
        cy.location('pathname').should('eq', '/opportunities');
    });
});
