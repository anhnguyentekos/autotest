
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
    // container-0-4-1 container-d13-0-4-30 container_rightCenter-0-4-10 container_rightCenter-d21-0-4-38 container_isShown-0-4-2
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

  // Edit Company Documents
it('Edit Company Documents', () => {
    cy.visit('https://app.develop.cyber-pass.eu/profile')
    cy.get('.anticon-edit').eq(1).click()

    // cy.get('.ant-upload-drag-container').eq(0).attachFile(['connected.png','Company slide.jpg','th.jpg'],{subjectType:'drag-n-drop', force: true, allowEmpty: true});
    // cy.get('.ant-upload-drag-container').eq(1).attachFile(['th (1).jpg','th (2).jpg','th (3).jpg'],{subjectType:'drag-n-drop', force: true, allowEmpty: true});
    // cy.get('.ant-btn-default').contains('Reset').click();
// Re upload
    
    // cy.get('.ant-upload-drag-container').eq(0).attachFile(['connected.png','Company slide.jpg','th.jpg'],{subjectType:'drag-n-drop', force: true, allowEmpty: true});
    // cy.get('.ant-upload-drag-container').eq(1).attachFile(['th (1).jpg','th (2).jpg','th.jpg'],{subjectType:'drag-n-drop', force: true, allowEmpty: true});
    cy.wait(3000);
    cy.get('.ant-btn-primary').contains('Save').click();
    });
  
    // Clear data
// it('clear data', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile')
//     cy.get('.anticon-edit').eq(1).click()
//     cy.wait(3000);
//     cy.scrollTo('center',{ensureScrollable: true})
//     // banner
//     cy.get('.anticon-delete').eq(0).click();
//     cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
//     cy.get('.anticon-delete').eq(1).click()
//     cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
//     // brochure 
//     cy.get('.ant-upload-list-item-card-actions-btn').eq(1).click({force: true})
//     cy.get('.ant-btn-dangerous').contains('Remove').click(({force: true}));
//     cy.get('.ant-upload-list-item-card-actions-btn').eq(2).click()
//     cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
//     cy.get('.ant-upload-list-item-card-actions-btn').eq(2).click(({force: true}))
//     cy.get('.ant-btn-dangerous').contains('Remove').click({force: true});
    
//     cy.get('.ant-btn-primary').contains('Save').click({force: true});
//   });
  
});



