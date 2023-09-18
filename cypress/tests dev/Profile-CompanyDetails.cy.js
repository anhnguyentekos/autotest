import 'cypress-localstorage-commands';

// Sign in
describe('saveLocalStorage', () => {
    before(() => {
        cy.clearLocalStorageSnapshot();
    });

    beforeEach(() => {
        // cy.restoreLocalStorage();
        cy.login('email', 'code');
    });

    afterEach(() => {
        // cy.saveLocalStorage();
    });

    
    // Edit Company Detail
    it('Edit Company Detail', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(2).click();
        
        cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg', {
            subjectType: 'drag-n-drop',
        });
        cy.get('#name').type('Steven Company');
        cy.get('#registrationIdNumber').type('123456');
        cy.get('#about').type('Lorem ipsum dolor sit amet');
        cy.get('#url').type('https://app.develop.cyber-pass.eu/profile');
        cy.get('#email').type('test-steven1@yopmail.com');
        cy.get('.form-control').type('1233454');
        cy.get('.ant-btn-default').contains('Reset').click();
        // Reinput data
        cy.get('.ant-upload-drag-container').attachFile('Company slide.jpg', {
            subjectType: 'drag-n-drop',
        });
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
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(2).click();
        cy.get('#name').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat',
        );
        cy.get('#registrationIdNumber').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat',
        );
        cy.get('#about').type(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat',
        );
        cy.get('#url').type(
            'https://app.develop.cyber-pass.eu/profileLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat',
        );
        cy.get('#email').type(
            'test-steven1Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quat@yopmail.com',
        );
        cy.get('.form-control').type('12334543453463453');
        cy.get('.ant-btn-default').contains('Cancel').click();
    });
    // Clear Company Detail
    it('Clear Company Detail', () => {
        cy.visit('https://app.develop.cyber-pass.eu/profile');
        cy.get('.anticon-edit').eq(2).click();
       
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
