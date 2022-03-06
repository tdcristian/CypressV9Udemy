///<reference types="Cypress"/>

describe("Verify variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // skincareLink.click();

    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log(headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
