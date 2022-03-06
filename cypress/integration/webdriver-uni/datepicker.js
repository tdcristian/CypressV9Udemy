///<reference types="Cypress"/>

describe("Datepicker", () => {
  it("Handling Datepicker", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
    cy.get("#datepicker").click();

    var date = new Date();
    date.setDate(date.getDate() + 360);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();
    cy.log(futureYear);
    cy.log(futureMonth);
    cy.log(futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();

  });
});
