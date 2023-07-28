import "cypress-localstorage-commands";

// Sign in
describe("saveLocalStorage", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Login", () => {
    const email = "anything@3ae7depk6evl.mailisk.net";
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".ant-input").type(email);
    cy.get(".ant-btn-primary").click();

    cy.wait(7000);

    cy.request({
      method: "GET",
      url: "https://api.mailisk.com/api/emails/3ae7depk6evl/inbox",
      headers: {
        "X-Api-Key": "Kvq74Yu_CAY6vQu0ehW4B-sSlPkhfgqv5ocHlnBmLCM",
      },
    }).then((response) => {
      // Access the response here
      const responseBody = response.body;
      const text = responseBody.data[0].subject;

      const regex = /is (\d+)/;
      const match = text.match(regex);
      const code = match ? match[1] : null;

      cy.get(".ant-form-item-control-input-content")
        .find(".ant-input")
        .eq(1)
        .type(code);
      cy.get(".ant-btn-primary").click();
      cy.wait(2000);
    });
  });

  it("Access to IXIT", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".anticon-mobile").click(); //Click on My Product Panel

    cy.wait(3000);

    cy.get(".row1").click(); // click on product

    cy.get("#rc-tabs-1-tab-technical-info-tab").click();
    cy.wait(3000);
    cy.get(".certification-frame-txt-title").click();
    // IXIT-1
    cy.get('[data-row-key="0"] > .ant-table-cell-fix-right > .ant-row').click();
    cy.get(".ant-btn-primary").contains("Add entry").click();

    cy.get("#form_Description > .authmech-details-text-def > .ant-input").type(
      "Lorem ipsum dolor sit amet.",
    );
    cy.get(".authmech-details-text-def")
      .eq(1)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(2)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(3)
      .type("Lorem ipsu dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(4)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(5)
      .type("Lorem ipsum dolor sit amet.");

    cy.get(".authmech-details-row4 > .ant-btn").contains("Save").click();
    // IXIT-2

    cy.get(".anticon-right").contains(">").click();
    cy.get(".actions > .ant-btn").contains("Edit").click();

    cy.get(".authmech-details-text-def")
      .eq(0)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(1)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(2)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(3)
      .type("Lorem ipsu dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(4)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(5)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(6)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(7)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(8)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(9)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(10)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(11)
      .type("Lorem ipsum dolor sit amet.");
    cy.get(".authmech-details-text-def")
      .eq(12)
      .type("Lorem ipsum dolor sit amet.");

    cy.get(".authmech-details-row4 > .ant-btn").contains("Save").click();
  });
});
