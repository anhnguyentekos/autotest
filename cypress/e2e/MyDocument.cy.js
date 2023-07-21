
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

  // //Check Page title
  // it('Check Page title', () => {
  //   cy.visit('https://app.develop.cyber-pass.eu/documents');
  //   cy.get('.page-title').should('have.text','My Documents'); 
  // });

  // //  Search file
  // it('Search file', () => {
  //   cy.visit('https://app.develop.cyber-pass.eu/documents');
  //   cy.get('.ant-input').type('abc')
  // });

  //   //Upload file
  // it('Upload button ', () => {
  //   cy.visit('https://app.develop.cyber-pass.eu/documents');
  //   cy.get('.ant-btn-primary').contains('Upload').attachFile('Company slide.jpg',{subjectType:'drag-n-drop'});
  // });

  // it('Upload multi files ', () => {
  //   cy.visit('https://app.develop.cyber-pass.eu/documents');
  //   cy.get('.ant-upload-drag-container').attachFile(['th (1).jpg','th (2).jpg','th.jpg'],{subjectType:'drag-n-drop'});
  // });

    // it('Download ', () => {
    //   cy.visit('https://app.develop.cyber-pass.eu/documents');
    //   cy.get('.anticon-download').eq(0).click();
    //   cy.get('.anticon-download').eq(1).click();
    // });
});



