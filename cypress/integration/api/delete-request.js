/// <reference types="cypress" />

describe("Delete request", () => {
  var titleOfPosts = new Array();
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("Delete a post via the /posts api", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/11",
      headers: {
        accept: "application/json",
      }
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
