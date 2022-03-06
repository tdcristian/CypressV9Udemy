///<reference types="Cypress"/>

describe("Validate webdriveruniversity homepage links", () => {
  it("Confirm link redirect to the correct page", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should('include','contactus');
    cy.go('back');
    cy.reload();
    // cy.reload(true);
    cy.go('forward');
    cy.url().should('include','contactus');

    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr','target').click();
    cy.url().should('include','index');
    cy.go('back');

    cy.get('#to-do-list').invoke('removeAttr','target').click();
    cy.url().should('include','To-Do-List');


  });
});
