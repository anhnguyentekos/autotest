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

  // Dashboard
  // Check text
  it("Check text", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".page-title").should("have.text", "Dashboard");
    cy.get(".ant-card-head-title")
      .eq(1)
      .should("have.text", "Profile Completion");
    cy.get(".profile-completion-section-container").should(
      "contain",
      "Fill out your profile details to enjoy a better experience!",
    );
    cy.get(".ant-card-head-title")
      .eq(2)
      .should("have.text", "Evaluation Levels");
    cy.get(".certification-level-section-row")
      .eq(0)
      .should("contain", "Basic")
      .and(
        "contain",
        "Basic means that the vendor makes a public statement of conformity with the security requirements",
      );
    cy.get(".certification-level-section-row")
      .eq(1)
      .should("contain", "Enhanced")
      .and(
        "contain",
        "Enhanced means that the vendor delivers the evidence that the product conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on a review of the technical documentation. This level provides assurance in that the product have been evaluated at a level intended to minimize the known basic risks of cyber-incidents and cyber-attacks.",
      );
    cy.get(".certification-level-section-row")
      .eq(2)
      .should("contain", "Substantial")
      .and(
        "contain",
        "Substantial means that the vendor delivers the product itself along with evidence that it conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on at least: a review to demonstrate the absence of known vulnerabilities; testing to demonstrate that the product correctly implement the security functionalities. This level provides assurance in that the product have been evaluated at a level intended to minimize cybersecurity risks, cyber-incidents and cyber-attacks carried out by actors with limited skills and resources.",
      );
    cy.get(".certification-level-section-row")
      .eq(3)
      .should("contain", "High")
      .and(
        "contain",
        "High means that the vendor delivers the product itself along with evidence that it conforms to the security requirements - an independent accredited or notified third-party, not under control of the vendor, performs an assessment of the security based on at least: a review to demonstrate the absence of known vulnerabilities;testing to demonstrate that the product correctly implement the security functionalities; an assessment of their resistance to skilled attackers using penetration testing.This level provides assurance in that the product have been evaluated at a level intended to minimize the risk of state-of-the-art cyber-attacks carried out by actors with significant skills and resources.",
      );
  });

  // Click on Go to profile button
  it("Click on Go to profile button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".ant-card-extra").contains("Go To Profile").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/profile");
  });

  // Click on Launch Products button
  it("Click on Launch Products button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".ant-btn-primary").contains("Launch Products").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/products/list");
  });

  // Click on Launch Opportunities button
  it("Click on Launch Opportunities button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".ant-btn-primary").contains("Launch Opportunities").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/opportunities");
  });

  // Click on Launch Knowledge-Base button
  it("Click on Launch Knowledge-Base button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".ant-btn-primary").contains("Launch Knowledge-Base").click();
    cy.url().should(
      "eq",
      "https://app.develop.cyber-pass.eu/dashboard/coming-soon",
    );
  });

  // Click on Created Opportunities button
  it("Click on Created Opportunities button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".stats-section-title").contains("Created Opportunities").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/opportunities");
  });

  // Click on Your Products button
  it("Click on Your Products button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".stats-section-title").contains("Your Products").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/products/list");
  });

  // Click on Your Certified Products button
  it("Click on Your Certified Products button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.get(".stats-section-title").contains("Your Certified Products").click();
    cy.url().should(
      "eq",
      "https://app.develop.cyber-pass.eu/certified-products/list",
    );
  });
  // Click on Received Invitations button
  it("Click on Received Invitations button ", () => {
    cy.visit("https://app.develop.cyber-pass.eu/");
    cy.wait(2000);
    cy.get(".stats-section-title").contains("Received Invitations").click();
    cy.url().should("eq", "https://app.develop.cyber-pass.eu/opportunities");
  });
});
