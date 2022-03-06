import Homepage_PO from "../../support/pageObject/webdriver/Homepage_PO";
import Contact_Us_PO from "../../support/pageObject/webdriver/Contact_Us_PO";
///<reference types="Cypress"/>

before(function () {
  cy.fixture("examples.json").then(function (data) {
    globalThis.data = data;
  });
});

beforeEach(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
  const homepage_PO = new Homepage_PO();
  homepage_PO.visitHomepage();
  homepage_PO.clickOn_ContactUs_Button();
  // cy.visit(Cypress.env("webdriver_homepage") + "/Contact-Us/contactus.html");
  // cy.visit("http://www.webdriveruniversity.com/");
  // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
});

describe("Test contact us form via webdriver unit", () => {
  it("should be able to submit a successful submission via contact us", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.url().should("include", "contactus.html");

    // cy.webdriver_ContactForm_Submission(
    //   Cypress.env("first_name"),
    //   data.last_name,
    //   data.email,
    //   "How can I learn Cypress",
    //   "h1",
    //   "Thank You for your Message!"
    // );
    const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can I learn Cypress",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("should not be able to submit a successful submission via contact us as all fields are required", () => {
    // cy.webdriver_ContactForm_Submission(
    //   data.first_name,
    //   data.last_name,
    //   " ",
    //   "How can I learn Cypress",
    //   "body",
    //   "Error: Invalid email address"
    // );
    const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress",
      "body",
      "Error: Invalid email address"
    );
  });
});
