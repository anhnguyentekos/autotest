import 'cypress-localstorage-commands';

// Sign in
describe('Sidebar', () => {
    before(() => {
        cy.clearLocalStorageSnapshot();
    });

    beforeEach(() => {
        cy.login('email', 'code');
        cy.visit('/dashboard');
    });

    // Click on Quick add Panel-> Product
    it('Click on Quick add Panel-> Product', () => {
        cy.get('.ant-menu-submenu-vertical').find('.ant-btn-lg').click();
        cy.get('.ant-menu-item-group-list')
            .find('.ant-menu-title-content')
            .eq(0)
            .click();
    });

    // Click on Quick add Panel-> Opportunity
    it('Click on Quick add Panel-> Opportunity', () => {
        
        cy.get('.ant-menu-submenu-vertical').find('.ant-btn-lg').click();
        cy.get('.ant-menu-item-group-list')
            .find('.nav-sub-menu-item-icon')
            .eq(1)
            .click();
       
    });
    // Click on Dashboard Panel
    it('Click on Dashboard Panel', () => {
        cy.get('.anticon-dashboard').click();
        cy.location('pathname').should('eq', '/dashboard');
    });

    // Click on Products Panel
    it('Click on Products Panel', () => {
        cy.get('.anticon-mobile').click();
        
    });

    // // Click on Certified Products Panel
    // it('Click on Certified Products Panel', () => {
    //     cy.get('.anticon-trophy').click();
    // });

    // Click on Opportunities Panel
    it('Click on Opportunities Panel', () => {
        cy.get('.anticon-star').click();
       
    });

    // Click on My Documents Panel
    it('Click on My Documents Panel', () => {
        cy.get('.anticon-file').click();
        
    });

    // Click on Knowledge Base Panel
    it('Click on Knowledge Base Panel', () => {
        cy.get('.anticon-book').click({ force: true });
        
    });

    // Click on Profile
    it('Click on Profile', () => {
        cy.get('.ant-avatar-image').click();
        
    });
    // Click on by Red Alert Labs button
    it('Click on by Red Alert Labs button', () => {
        cy.get('.about-us-button').click();
        
    });
    // Click on collapse button
    it('Click on collapse button', () => {
        cy.get('.anticon-left').click();
       
    });
    // Click on expend button
    it('Click on expend button', () => {
        cy.get('.anticon-right').click();
        
    });
    // Log out
    it('Check Log out and keep remain in log out stage', () => {
        cy.get('.anticon-poweroff').click();
        cy.go('back');
        cy.location('pathname').should('eq', '/login');
    });
});
