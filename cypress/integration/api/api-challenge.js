/// <reference types="cypress" />

describe("Post Get Delete Request", () => {
  let comment =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);
  let randomPostId = Math.floor(Math.random() * 1000 + 1);
  var comments = new Array();

  it("Create new comment", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
      body: {
        body: comment,
        postId: randomPostId,
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it("Locate and assert the new comment", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          comments.push(item["body"]);
        });
      })
      .then(() => {
        var latestComment = comments[comments.length - 1];
        cy.log(latestComment);
        expect(latestComment).to.eq(comment);
      });
  });

  it("Delete the new comment", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/comments/" + comments.length,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
