
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

    cy.wait(7000);

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
 
it('Access to IXIT', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.anticon-mobile').click(); //Click on My Product Panel

    cy.wait(3000);

    cy.get('.row1').click(); // click on product

    cy.get('#rc-tabs-1-tab-technical-info-tab').click();
    cy.wait(3000);
    cy.get('.certification-frame-txt-title').click();
// IXIT-1
    cy.get('[data-row-key="0"] > .ant-table-cell-fix-right > .ant-row').click();
    cy.get('.ant-btn-primary').contains('Add entry').click();
    
    cy.get('#form_Description > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    
    cy.get('#form_Authenticator\Factor > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    // cy.get('#form_Password\ Generation\ Mechanism > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    // cy.get('#form_Security\ Guarantees > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    // cy.get('#form_Cryptographic\ Details > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    // cy.get('#form_Brute\ Force\ Prevention > .authmech-details-text-def > .ant-input').type('Lorem ipsum dolor sit amet.')
    // cy.get('.authmech-details-row4 > .ant-btn').contains('Save').click();
});

});

