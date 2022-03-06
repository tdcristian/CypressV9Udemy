///<reference types="Cypress"/>

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total normal and sale products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("sellItemPrice");

    var itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      cy.log($linkText);
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemsTotal);
    });

    cy.get("@sellItemPrice")
      .then(($linkText) => {
        var saleItemPriceTotal = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        cy.log($linkText);
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemPriceTotal;
        cy.log("Sale price items total: " + saleItemPriceTotal);
      })
      .then(() => {
        cy.log("Total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(648.5);
      });
  });
});
