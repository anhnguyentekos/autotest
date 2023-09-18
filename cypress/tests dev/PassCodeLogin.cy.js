import 'cypress-localstorage-commands';


it('Login', () => {
    cy.visit('/login');
    cy.get('#email').type('test-steven1@yopmail.com');
    cy.get('[type=submit]').contains('Continue').click();
    cy.get('#verificationPin').should('be.visible');
    cy.wait(10000);
    // retrieve Passcode
    cy.request('https://yopmail.com/wm')
        .then(html => {
            const passCodeLine = html.body.match(/.*development.*/);
            const boldText = passCodeLine[0].match(/Sign-in Code is \d+/);
            return boldText[0].match(/Sign-in Code is \d+/);
        }). then(passcode =>{
            // pass code to cyperpass page
            cy.get('#verificationPin').type(passcode);
            cy.get('[type=submit]').contains('Login').click();
        });

    // cy.request({
    //     method: 'GET',
    //     url: 'https://api.mailisk.com/api/emails/3ae7depk6evl/inbox',
    //     headers: {
    //         'X-Api-Key': 'Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM',
    //     },
    // }).then((response) => {
    //     const {body} = response;
    //     const text = body.data[0].subject;
    //     const match = text.match( /is (\d+)/);
    //     const code1 = match ? match[1] : null;
    
    //     cy.get('#verificationPin').type(code1);
    //     cy.get('[type=submit]').click();
    // });
});

    

