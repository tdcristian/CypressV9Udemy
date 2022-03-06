///<reference types="Cypress"/>

describe("File upload", () => {
  it("Handling file upload", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();

    cy.fixture("laptop.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "laptop.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input"
        }
      );
    });

    cy.get('#submit-button').click();
  });

  it("Handling file no upload file", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();


    cy.get('#submit-button').click();
  });
});
