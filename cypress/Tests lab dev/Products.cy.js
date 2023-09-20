import 'cypress-localstorage-commands';

// Sign in
describe('saveLocalStorage', () => {
    before(() => {
        cy.clearLocalStorageSnapshot();
        
    });

    beforeEach(() => {
        cy.loginLab('email', 'code');
        cy.visit('/dashboard');
        
    });
    


    // Add new product
    it('Click on Add Products button', () => {
        cy.visit('https://app.develop.cyber-pass.eu/');
        cy.get('.anticon-mobile').click(); // Click on My Product Panel

        cy.wait(3000);

        cy.get('.ant-btn-primary').contains('Add Product').click(); // click add button

        // begin: add product info
        cy.get('#add_product_name').type('Smart House');
        cy.get('#add_product_productUniqueId').type('123');

        cy.get('#add_product_sectoral').click();
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('.ant-select-item-option-content').eq(1).click();

        cy.get('.ant-select-selection-placeholder')
            .contains('Search Functional')
            .click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(10).click({ force: true });
        cy.get('.ant-select-item-option-content').eq(11).click({ force: true });

        cy.get('.ant-select-selection-placeholder')
            .contains('Search Technological')
            .click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(20).click({ force: true });
        cy.get('.ant-select-item-option-content').eq(21).click({ force: true });

        cy.wait(2000);
        cy.get('#add_product_description').type('Smart House');

        cy.get('.ant-form-item-control-input-content')
            .contains('Add')
            .click({ force: true });
    });

    // end : add product info

    // edit product
    it('Click on Edit Products button', () => {
        cy.visit('https://app.develop.cyber-pass.eu/');
        cy.get('.anticon-mobile').click();
        cy.wait(3000);
        cy.get('.anticon-edit').eq(0).click({ force: true });

        cy.get('#add_product_name').type('123 Smart House');
        cy.get('#add_product_productUniqueId').type('456');

        cy.get('#add_product_sectoral').click({ force: true });
        cy.wait(1000);

        cy.get('.ant-select-item-option-content').eq(4).click({ force: true });
        cy.get('.ant-select-item-option-content').eq(5).click({ force: true });

        cy.get('#add_product_functional').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(12).click({ force: true });
        cy.get('.ant-select-item-option-content').eq(13).click({ force: true });

        cy.get('#add_product_technological').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(24).click({ force: true });
        cy.get('.ant-select-item-option-content').eq(25).click({ force: true });

        cy.get('.ant-form-item-control-input-content')
            .contains('Save')
            .click({ force: true });
        cy.wait(3000);
        // });
        // end edit product
        // it('Click on delete Products button', () => {
        //   cy.visit('https://app.develop.cyber-pass.eu/');
        cy.get('.ant-btn-dangerous').click({ force: true }); // delete product
        cy.get('.ant-modal-footer > .ant-btn-primary')
            .contains('Delete')
            .click({ force: true });
    });
    // Filter
    it('Click add Filter and click Reset filter', () => {
        cy.visit('https://app.develop.cyber-pass.eu/products/list');
        cy.get('.anticon-filter').click();
        //   cy.get('#filter_product_providers').type('CompanySteven')
        //   cy.get('#filter_product_providers').click()
        //         .find('.ant-select-item-option').contains('CompanySteven').click();
        //   cy.wait(2000);
        // cy.get('#filter_product_evaluationLevels').click()
        //       .find('.ant-cascader-menu-item-expand').contains('ETSI').click()
        //       .find('.ant-cascader-menu').contains('Any ETSI').click()
        // Begin :Add filter and click reset filter
        cy.get('#filter_product_sectoral').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(0).click({ force: true });
        cy.get('#filter_product_sectoral').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(1).click({ force: true });
        // Click reset filter
        cy.get('.ant-btn').contains('Reset Filter').click({ force: true });
    });
    // End :Add filter and click reset filter
    it('Click add Filter and click Save filter', () => {
        cy.visit('https://app.develop.cyber-pass.eu/products/list');
        cy.get('.anticon-filter').click();

        cy.get('#filter_product_sectoral').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(0).click({ force: true });
        cy.get('#filter_product_sectoral').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(1).click({ force: true });

        cy.get('#filter_product_functional').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(0).click({ force: true });
        cy.get('#filter_product_functional').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(1).click({ force: true });

        cy.get('#filter_product_technological').click({ force: true });
        cy.wait(1000);
        cy.get('.ant-select-item-option-content').eq(0).click({ force: true });
        cy.get('#filter_product_technological').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(1).click({ force: true });
        cy.get('.ant-switch').click(); // Click on Save filter
        cy.get('#filter_product_filterName')
            .click({ force: true })
            .type('Filter 01');
        cy.get('.ant-btn').contains('Save').click(); // Click Save button
        cy.wait(3000);

        cy.get('.filter-tags > .ant-typography').click();
    });

    it('Delete created filter', () => {
        cy.visit('https://app.develop.cyber-pass.eu/products/list');
        cy.wait(3000);
        cy.get('.anticon-filter').trigger('mouseover');
        cy.get('.ant-dropdown-menu-item').find('.anticon-edit').eq(-1).click();
        cy.get('.ant-btn-dangerous').click({ force: true }); // delete product
        cy.get('.ant-btn-text > .ant-btn')
            .contains('Delete')
            .click({ force: true });
    });
    // Open product info
    it('Open product info', () => {
        cy.visit('https://app.develop.cyber-pass.eu/');
        cy.get('.anticon-mobile').click(); // Click on My Product Panel

        cy.wait(3000);

        cy.get('.row1').click(); // click on product
    });

    it('Select Technical Information tab', () => {
        cy.visit('https://app.develop.cyber-pass.eu/');
        cy.get('.anticon-mobile').click(); // Click on My Product Panel

        cy.wait(3000);

        cy.get('.row1').click(); // click on product

        cy.get('#rc-tabs-1-tab-technical-info-tab').click();
    });
});
