///<reference types="Cypress"/>

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView({ duration: 1000 })
      .invoke("removeAttr", "target")
      .click();
  });

  it("Drag and drop on item", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView({ duration: 1000 })
      .invoke("removeAttr", "target")
      .click();

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("Double click on item", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView({ duration: 1000 })
      .invoke("removeAttr", "target")
      .click();

    cy.get("#double-click").dblclick();
  });

  it.only("Hold down the left mouse button on item", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView({ duration: 1000 })
      .invoke("removeAttr", "target")
      .click();

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css('background-color','rgb(0, 255, 0)');
      });
  });
});
