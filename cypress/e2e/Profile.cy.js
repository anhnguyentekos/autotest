
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
  
// Clear User Detail
//   it('Clear User Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile');
//     cy.get('.anticon-edit').eq(0).click();
//     cy.get('.anticon-delete').eq(0).click();
//     cy.get('.ant-btn-dangerous').contains('Remove').click();
//     cy.get('#fullName').clear();
//     cy.get('.form-control').clear().type('+');
//     cy.get('#address_line1').clear();
//     cy.get('#address_line2').clear();
//     cy.get('#address_zip').clear();
//     cy.get('#address_city').clear();
//     cy.get('.ant-btn-primary').contains('Save').click();
//   });
//   // Check max-range User Detail
//   it('Check max-range User Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile');
//     cy.get('.anticon-edit').eq(0).click();
//     cy.get('.ant-upload-drag-container').attachFile('company profile.jpg',{subjectType:'drag-n-drop'});
//     cy.get('#fullName').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
//     cy.get('.form-control').type('12345678');
//     cy.get('#address_line1').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua');
//     cy.get('#address_line2').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua');
//     cy.get('#address_zip').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua');
//     cy.get('#address_city').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua');
//     cy.get('#rc_select_1').click({force: true})
//     cy.get('[title="Anguilla"] > .ant-select-item-option-content').click();
    
//     cy.get('.ant-btn-primary').contains('Save').click();
//     cy.reload();
//   });
// // Edit User Detail
//   it(' Edit User Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile');
//     cy.get('.anticon-edit').eq(0).click();
//     cy.get('.ant-upload-drag-container').attachFile('Company logo.jpg',{subjectType:'drag-n-drop'});
//     cy.get('#fullName').type('StevenClient');
//     cy.get('.form-control').type('84353076321');
//     cy.get('#address_line1').type('277 avenue');
//     cy.get('#address_line2').type('289 sub avenue');
//     cy.get('#address_zip').type('123456');
//     cy.get('#address_city').type('Ho Chi Minh');
//   // cy.get('#rc_select_1').click()
//   // cy.get('[title="Angola"] > .ant-select-item-option-content').click({force: true} );
  
//   cy.get('.ant-btn-primary').contains('Save').click();
// });
// // Clear Company Detail
//   it('Clear Company Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile')
//     cy.get('.anticon-edit').eq(1).click()
//     cy.get('.anticon-delete').eq(0).click();
//     cy.get('.ant-btn-dangerous').contains('Remove').click();
//     cy.get('#name').clear();
//     cy.get('#registrationIdNumber').clear();
//     cy.get('#about').clear();
    
//     cy.get('#email').clear();
//     cy.get('.form-control').clear();
//     cy.get('.ant-btn-primary').contains('Save').click();
// });
// // Check max-range Company Detail
//   it('Check max-range Company Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile')
//     cy.get('.anticon-edit').eq(1).click()
//     cy.get('#name').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
//     cy.get('#registrationIdNumber').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
//     cy.get('#about').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
//     cy.get('#url').type('https://app.develop.cyber-pass.eu/profileLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
//     cy.get('#email').type('test-steven1Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat@yopmail.com');
//     cy.get('.form-control').type('12334543453463453');
//     cy.reload();
// });

//   // Edit Company Detail
//   it('Edit Company Detail', () => {
//     cy.visit('https://app.develop.cyber-pass.eu/profile')
//     cy.get('.anticon-edit').eq(1).click()
//     cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg',{subjectType:'drag-n-drop'});
//     cy.get('#name').type('Steven Company');
//     cy.get('#registrationIdNumber').type('123456');
//     cy.get('#about').type('Lorem ipsum dolor sit amet');
//     cy.get('#url').type('https://app.develop.cyber-pass.eu/profile');
//     cy.get('#email').type('test-steven1@yopmail.com');
//     cy.get('.form-control').type('1233454');
//     cy.get('.ant-btn-default').contains('Reset').click();
// // Reinput data
//     cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg',{subjectType:'drag-n-drop'});
//     cy.get('#name').type('Steven Company');
//     cy.get('#registrationIdNumber').type('123456');
//     cy.get('#about').type('Lorem ipsum dolor sit amet');
//     cy.get('#url').type('https://app.develop.cyber-pass.eu/profile');
//     cy.get('#email').type('test-steven1@yopmail.com');
//     cy.get('.form-control').type('1233454');
//     cy.get('.ant-btn-primary').contains('Save').click();
//   });

  // Edit Company Documents
  it('Edit User Detail', () => {
    cy.visit('https://app.develop.cyber-pass.eu/profile')
    cy.get('.anticon-edit').eq(2).click()
    cy.get('.ant-upload-drag-container').eq(0).attachFile('Company slide.jpg','connected.png','Company logo.jpg');
    cy.get('.ant-upload-drag-container').eq(1).attachFile('Company slide.jpg','connected.png','Company logo.jpg');
  });
  
});



