///<reference types="Cypress"/>

describe("Verify drop-down list", () => {
  it("Select drop-down list", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng");
    cy.get("#dropdowm-menu-3").select("javascript");
    cy.get("#dropdowm-menu-3").select("JQuery").should('have.value','jquery');

    cy.get("#dropdowm-menu-2").select("maven").should('have.value','maven');
  });
});
