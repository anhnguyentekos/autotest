describe('Sign-In Test Suite', () => {
  let passcode;
  
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  
  });
  
  it('Should verify the passcode after entering the email', () => {
    cy.visit('https://yopmail.com/en/');
  

  });
});