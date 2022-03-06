///<reference types="Cypress"/>

describe("Verify radio buttons", () => {
  it("Radio button validate", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get('#radio-buttons').find("input[type='radio']").first().check();
    cy.get('#radio-buttons').find("input[type='radio']").eq(2).check();
  });

  it("Radio button validate the state", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("input[value='lettuce']").should('not.be.checked');
    cy.get("input[value='lettuce']").check();
    cy.get("input[value='lettuce']").should('be.checked');
    cy.get("input[value='cabbage']").should('be.disabled');
    cy.get("input[value='pumpkin']").should('not.be.checked');
  });
});
