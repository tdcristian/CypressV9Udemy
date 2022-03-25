/// <reference types="cypress" />

describe("Update request", () => {
  var titleOfPosts = new Array();
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("Update and existing post via the /posts api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      headers: {
        accept: "application/json",
      },
      body: {
        title: "Where can I buy apples?",
        author: "Tom Jones",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
