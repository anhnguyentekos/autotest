import 'cypress-localstorage-commands';

// Sign in
describe('saveLocalStorage', () => {
    before(() => {
        cy.clearLocalStorageSnapshot();
    });

    beforeEach(() => {
        // cy.restoreLocalStorage();
        cy.login('email', 'code');
    });

    afterEach(() => {
        // cy.saveLocalStorage();
    });

    // Check Page title
    it('Check Page title', () => {
        cy.visit('https://app.develop.cyber-pass.eu/documents');
        cy.get('.page-title').should('have.text', 'My Documents');
    });

    //  Search file
    it('Search file', () => {
        cy.visit('https://app.develop.cyber-pass.eu/documents');
        cy.get('.ant-input').type('abc');
    });

    // Upload file
    it('Upload button ', () => {
        cy.visit('https://app.develop.cyber-pass.eu/documents');
        cy.get('.ant-btn-primary')
            .contains('Upload')
            .attachFile('Company slide.jpg', { subjectType: 'drag-n-drop' });
    });

    it('Upload multi files ', () => {
        cy.visit('https://app.develop.cyber-pass.eu/documents');
        cy.get('.ant-upload-drag-container').attachFile(
            ['th (1).jpg', 'th (2).jpg', 'th.jpg'],
            { subjectType: 'drag-n-drop' },
        );
    });

    it('Download ', () => {
        cy.visit('https://app.develop.cyber-pass.eu/documents');
        cy.get('.anticon-download').eq(0).click();
        cy.get('.anticon-download').eq(1).click();
    });
});
