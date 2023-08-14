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

    // Edit Company Documents
    it('Edit Company Documents', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(1).click();

        cy.get('.ant-upload-drag-container')
            .eq(0)
            .attachFile(['connected.png', 'Company slide.jpg'], {
                action: 'drag-n-drop',
                force: true,
                allowEmpty: true,
            });
        cy.get('.ant-upload-drag-container')
            .eq(1)
            .attachFile(['th (1).jpg', 'th (2).jpg', 'th (3).jpg', 'th.jpg'], {
                action: 'drag-n-drop',
                force: true,
                allowEmpty: true,
            });

        cy.get('.ant-btn-default').contains('Reset').click();
        // Re upload

        cy.get('.ant-upload-drag-container')
            .eq(0)
            .attachFile(['connected.png', 'Company slide.jpg', 'th.jpg'], {
                action: 'drag-n-drop',
                force: true,
                allowEmpty: true,
            });
        cy.get('.ant-upload-drag-container')
            .eq(1)
            .attachFile(['th (1).jpg', 'th (2).jpg', 'th (3).jpg'], {
                action: 'drag-n-drop',
                force: true,
                allowEmpty: true,
            });
        cy.get('.ant-btn-primary').contains('Save').click();
    });

    //     // Clear data
    it('clear data', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(1).click();
        cy.scrollTo('center',{ensureScrollable: true});
        // banner
        cy.get('.anticon-delete').eq(0).click();
        cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
        cy.get('.anticon-delete').eq(1).click();
        cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
        // brochure
        cy.get('.ant-upload-list-item-card-actions-btn').eq(1).click({force: true});
        cy.get('.ant-btn-dangerous').contains('Remove').click(({force: true}));
        cy.get('.ant-upload-list-item-card-actions-btn').eq(2).click({force: true});
        cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
        cy.get('.ant-upload-list-item-card-actions-btn').eq(2).click(({force: true}));
        cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});

        cy.get('.ant-btn-primary').contains('Save').click({force: true});
    });
});
