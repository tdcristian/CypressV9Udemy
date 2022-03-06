///<reference types="Cypress"/>

describe("Verify checkboxes", () => {
  beforeEach(() => {
    cy.log(Cypress.env("name"));
    cy.navigateTo_webdriver_homepage_checkbox_page();
    // cy.navigateTo_webdriver_homepage();
    // cy.get("#dropdown-checkboxes-radiobuttons")
    //   .invoke("removeAttr", "target")
    //   .click();
  });

  it("Checkbox validate", () => {
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
  });

  it("Uncheck checkbox", () => {
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Checkbox multiple checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
