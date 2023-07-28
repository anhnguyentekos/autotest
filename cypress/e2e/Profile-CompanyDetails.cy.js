
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

    const email = 'anything@3ae7depk6evl.mailisk.net';
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.ant-input').type(email);
    cy.get('.ant-btn-primary').click();
    
    cy.wait(7000);

    cy.request({
      method: 'GET',
      url: 'https://api.mailisk.com/api/emails/3ae7depk6evl/inbox',
      headers: {
        'X-Api-Key': 'Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM',
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

  // Edit Company Detail
  it('Edit Company Detail', () => {
    cy.visit('https://app.develop.cyber-pass.eu/profile')
    cy.get('.anticon-edit').eq(2).click()
    cy.wait(2000);
    cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg',{subjectType:'drag-n-drop'});
    cy.get('#name').type('Steven Company');
    cy.get('#registrationIdNumber').type('123456');
    cy.get('#about').type('Lorem ipsum dolor sit amet');
    cy.get('#url').type('https://app.develop.cyber-pass.eu/profile');
    cy.get('#email').type('test-steven1@yopmail.com');
    cy.get('.form-control').type('1233454');
    cy.get('.ant-btn-default').contains('Reset').click();
// Reinput data
    cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg',{subjectType:'drag-n-drop'});
    cy.get('#name').type('Steven Company');
    cy.get('#registrationIdNumber').type('123456');
    cy.get('#about').type('Lorem ipsum dolor sit amet');
    cy.get('#url').type('https://app.develop.cyber-pass.eu/profile');
    cy.get('#email').type('test-steven1@yopmail.com');
    cy.get('.form-control').type('1233454');
    cy.get('.ant-btn-primary').contains('Save').click();
  });
// Check max-range Company Detail
it('Check max-range Company Detail', () => {
    cy.visit('https://app.develop.cyber-pass.eu/profile')
    cy.get('.anticon-edit').eq(2).click()
    cy.get('#name').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
    cy.get('#registrationIdNumber').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
    cy.get('#about').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
    cy.get('#url').type('https://app.develop.cyber-pass.eu/profileLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat');
    cy.get('#email').type('test-steven1Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat@yopmail.com');
    cy.get('.form-control').type('12334543453463453');
    cy.get('.ant-btn-default').contains('Cancel').click();
});
// Clear Company Detail
it('Clear Company Detail', () => {
    cy.visit('https://app.develop.cyber-pass.eu/profile')
    cy.get('.anticon-edit').eq(2).click()
    cy.wait(2000);
    // cy.get('.anticon-delete').eq(0).click();
    // cy.get('.ant-btn-dangerous').contains('Remove').click();
    cy.get('#name').clear();
    cy.get('#registrationIdNumber').clear();
    cy.get('#about').clear();
    cy.get('#email').clear();
    cy.get('.form-control').clear();
    cy.get('.ant-btn-primary').contains('Save').click();
});
});



