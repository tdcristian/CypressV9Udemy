import AutoStore_Homepage_Po from "../../support/pageObject/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_Po from "../../support/pageObject/automation-test-store/AutoStore_HairCare_PO";
///<reference types="Cypress"/>

describe("Add multiple items to the basket", () => {
  const autoStore_Homepage_Po = new AutoStore_Homepage_Po();
  const autoStore_HairCare_Po = new AutoStore_HairCare_Po();
  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {

    autoStore_Homepage_Po.accessHomepage();
    autoStore_Homepage_Po.clickOn_HairCare_Link();

    // cy.visit("https://www.automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to the basket", () => {
    // globalThis.data.productName.forEach(function (element) {
    //   cy.addProductToBasket(element);
    // });

    // cy.get(".dropdown-toggle > .fa").click();

    autoStore_HairCare_Po.addHairCareProductToBasket();
    
  });
});
