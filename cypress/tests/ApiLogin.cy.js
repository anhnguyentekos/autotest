import 'cypress-localstorage-commands';

    it('Login', () => {
        const email1 = 'anything@3ae7depk6evl.mailisk.net';
        cy.visit('/login');
        cy.get('#email').type(email1);
        cy.get('[type=submit]').click();
        cy.get('#verificationPin').should('be.visible');
    
        cy.request({
            method: 'GET',
            url: 'https://api.mailisk.com/api/emails/3ae7depk6evl/inbox',
            headers: {
                'X-Api-Key': 'Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM',
            },
        }).then((response) => {
            const {body} = response;
            const text = body.data[0].subject;
            const match = text.match( /is (\d+)/);
            const code1 = match ? match[1] : null;
    
            cy.get('#verificationPin').type(code1);
            cy.get('[type=submit]').click();
        });
    });

