import cypressXpath from 'cypress-xpath'


// Sign in
  describe('template spec', () => {
  it('passes', () => {

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
    });

  })
})

// Sidebar happy flow
describe('CyberPass', () => {
 
  it('successfully loads', () => {
  

    // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/dashboard"] > .ant-menu-title-content').click()
//     // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/products/list"] > .ant-menu-title-content > :nth-child(2)').click()
//     // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/products/list"] > .ant-menu-title-content > :nth-child(2)').click()
//     // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/opportunities"] > .ant-menu-title-content > :nth-child(2)').click()
//     // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/opportunities"] > .ant-menu-title-content > :nth-child(2)').click()
//     // cy.get('[data-menu-id="rc-menu-uuid-45882-4-/dashboard"] > .ant-menu-title-content').click()
   
  })
})