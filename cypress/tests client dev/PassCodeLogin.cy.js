import 'cypress-localstorage-commands';


// it('Login', () => {
   
    // cy.visit('/login');
    // cy.get('#email').type('test-steven1@yopmail.com');
    // cy.get('[type=submit]').contains('Continue').click();
    // cy.get('#verificationPin').should('be.visible');
    // cy.wait(10000);
    // // retrieve Passcode
    // cy.request('https://yopmail.com/inbox?login=test-steven1')
    //     .then(html => {
    //         const passCodeLine = html.body.match(/.*development.*/);
    //         const boldText = passCodeLine[0].match(/Sign-in Code is (\d+)/);
    //         return boldText[0].match(/Sign-in Code is (\d+)/);
    //     }). then(passcode =>{
    //         // pass code to cyperpass page
    //         cy.get('#verificationPin').type(passcode);
    //         cy.get('[type=submit]').contains('Login').click();
        // });

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
// });
describe('Lấy mã passcode từ Yopmail', () => {
    it('Truy cập Yopmail và lấy mã passcode', () => {
      cy.visit('https://yopmail.com/');
  
      cy.get('#login').type('test-steven1@yopmail.com').type('{enter}');

  
      // Lấy nội dung email
      cy.get('.ellipsis.nw.b.f18').invoke('text').then((emailText) => {
        // Sử dụng biểu thức chính quy để trích xuất mã passcode
        const regex = /Sign-in Code is (\d+)/; // Điều chỉnh regex cho nội dung email cụ thể
  
        // Kiểm tra nếu mã passcode tồn tại trong email
        if (regex.test(emailText)) {
          // Lấy mã passcode từ email
          const passcode = emailText.match(regex)[1];
  
          // In mã passcode ra console để sử dụng trong bài kiểm tra tiếp theo
          cy.log(`Mã Passcode: ${passcode}`);
        } else {
          // Nếu không tìm thấy mã passcode trong email, thông báo
          cy.log('Không tìm thấy mã Passcode trong email');
        }
      });
    });
  });
  
  
  
  
  
  

    

