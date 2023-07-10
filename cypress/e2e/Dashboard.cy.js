
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

  // Dashboard

  // Click on Go to profile button
  it('Click on Go to profile button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.ant-card-extra').contains('Go to Profile').click()
    cy.wait(2000);  
  });

  // Click on Launch Products button
  it('Click on Launch Products button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.ant-btn-primary').contains('Launch Products').click()
    cy.wait(2000);  
   
  });

  // Click on Launch Opportunities button
  it('Click on Launch Opportunities button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.ant-btn-primary').contains('Launch Opportunities').click()
    cy.wait(2000);  
  });

  // Click on Launch Knowledge-Base button
  it('Click on Launch Knowledge-Base button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.ant-btn-primary').contains('Launch Knowledge-Base').click()
    cy.wait(2000);  
  });

  // Click on Created Opportunities button
  it('Click on Created Opportunities button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.stats-section-title').contains('Created Opportunities').click()
    cy.wait(5000);  
  });

  // Click on Your Products button
  it('Click on Your Products button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.stats-section-title').contains('Your Products').click()
    cy.wait(5000);  
  });

  // Click on Your Certified Products button
  it('Click on Your Certified Products button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.stats-section-title').contains('Your Certified Products').click()
    cy.wait(5000);  
  });
  // Click on Received Invitations button
  it('Click on Received Invitations button ', () => {
    cy.visit('https://app.develop.cyber-pass.eu/');
    cy.get('.stats-section-container').contains('Received Invitations').click()
    cy.wait(5000);  
  });
});



