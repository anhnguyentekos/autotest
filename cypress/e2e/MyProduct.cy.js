
import 'cypress-localstorage-commands';

// Sign in
describe('saveLocalStorage', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });
  
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Login', () => {

    const email = 'anything@dk5v08sn0rpt.mailisk.net';
    cy.visit('https://app.develop.cyber-pass.eu/');

    cy.get('.ant-input').type(email);
    cy.get('.ant-btn-primary').click();

    cy.wait(10000);

    cy.request({
      method: 'GET',
      url: 'https://api.mailisk.com/api/emails/dk5v08sn0rpt/inbox',
      headers: {
        'X-Api-Key': '8q2VDg-rc0nuYA0XuhM4E4d1RqF9gn648MEHzWIajLA',
      },
    }).then((response) => {
      // Access the response here
      const responseBody = response.body;
      const text = responseBody.data[0].subject;

      const regex = /is (\d+)/;
      const match = text.match(regex);
      const code = match ? match[1] : null;

      cy.get('.ant-form-item-control-input-content').find('.ant-input').eq(1).type(code);
      cy.get('.ant-btn-primary').click();
      cy.wait(2000);

    });
  });

  // Dashboard
  // Add new product
  it('Click on Add Products button', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.anticon-mobile').click(); //Click on My Product Panel

    cy.wait(2000);

    cy.get('.ant-btn-primary').contains('Add Product').click(); // click add button

// begin: add product info 
    cy.get('#add_product_name').type('Smart House');
    cy.get('#add_product_productUniqueId').type('123');

    cy.get('#add_product_sectoral').click();
    cy.wait(1000);
    cy.get('.ant-select-item-option-content').eq(0).click();
    cy.get('.ant-select-item-option-content').eq(1).click();

    // cy.get('.ant-drawer-body').click({force: true});
    
    cy.get('.ant-select-selection-placeholder').contains('Search Functional').click({force: true});
    cy.wait(1000);
    cy.get('.ant-select-item-option-content').eq(10).click({force: true});
    cy.get('.ant-select-item-option-content').eq(11).click({force: true});

    // cy.get('.ant-drawer-body').click({force: true});

    cy.get('.ant-select-selection-placeholder').contains('Search Technological').click({force: true});
    cy.wait(1000);
    cy.get('.ant-select-item-option-content').eq(20).click({force: true});
    cy.get('.ant-select-item-option-content').eq(21).click({force: true});

    cy.wait(2000);
    cy.get('#add_product_description').type('Smart House');

    cy.get('.ant-form-item-control-input-content').contains('Add').click({force: true});

//end : add product info

//edit product
    cy.get('.anticon-edit').eq(0).click({force: true});
    
    cy.get('#add_product_name').type('Smart House 1');
    cy.get('#add_product_productUniqueId').type('123');

    cy.get('#add_product_sectoral').click({force: true});
    cy.wait(1000);
    cy.get('.ant-select-item-option-content').eq(2).click({force: true});
    cy.get('.ant-select-item-option-content').eq(12).click({force: true} );

    cy.get('#add_product_description').type('Smart House 123');

    cy.get('.ant-form-item-control-input-content').contains('Save').click({force: true});
// // end edit product
//     cy.get('.anticon-delete').eq(1).click({force: true}); //delete product
//     cy.get('.ant-btn-dangerous').click({force: true});
    
  });



});

