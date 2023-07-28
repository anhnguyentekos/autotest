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

            cy.get('.ant-form-item-control-input-content')
                .find('.ant-input')
                .eq(1)
                .type(code);
            cy.get('.ant-btn-primary').click();
            cy.wait(2000);
        });
    });

    // Edit User Detail
    it(' Edit User Detail', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(0).click();
        cy.wait(3000);
        cy.get('.ant-upload-drag-container').attachFile('Company logo.jpg', {
            subjectType: 'drag-n-drop',
        });
        cy.get('#fullName').type('StevenClient');
        cy.get('.form-control').type('84353076321');
        cy.get('#address_line1').type('277 avenue');
        cy.get('#address_line2').type('289 sub avenue');
        cy.get('#address_zip').type('123456');
        cy.get('#address_city').type('Ho Chi Minh');
        // cy.get('#rc_select_1').click()
        // cy.get('[title="Angola"] > .ant-select-item-option-content').click({force: true} );
        cy.get('.ant-btn-primary').contains('Save').click();
    });
    // Check max-range User Detail
    it('Check max-range User Detail', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(0).click();
        cy.wait(2000);
        cy.get('.ant-upload-drag-container').attachFile('company profile.jpg', {
            subjectType: 'drag-n-drop',
        });
        cy.get('#fullName').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat',
        );
        cy.get('.form-control').type('12345678');
        cy.get('#address_line1').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua',
        );
        cy.get('#address_line2').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua',
        );
        cy.get('#address_zip').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua',
        );
        cy.get('#address_city').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua',
        );
        // cy.get('#rc_select_1').click({force: true})
        // cy.get('[title="Anguilla"] > .ant-select-item-option-content').click();
        cy.get('.ant-btn-primary').contains('Save').click();
    });
    // Clear User Detail
    it('Clear User Detail', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(0).click();
        cy.wait(2000);
        cy.get('.anticon-delete').eq(0).click();
        cy.get('.ant-btn-dangerous').contains('Remove').click({ force: true });
        cy.get('#fullName').clear();
        cy.get('.form-control').clear().type('+84');
        cy.get('#address_line1').clear();
        cy.get('#address_line2').clear();
        cy.get('#address_zip').clear();
        cy.get('#address_city').clear();
        cy.get('.ant-btn-primary').contains('Save').click();
    });
});
