///<reference types="Cypress"/>

describe("JSON Object", () => {
  it("Json Object Examples", () => {
    const exampleObject = { key: "Tim", key2: "Jones" };
    const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];
    const exampleArrayOfObjects = [
      { key: "Luke" },
      { key2: "Skywalker" },
      { key3: "22" },
    ];
    const users = {
      firstName: "Joe",
      lastName: "Blogs",
      Age: 30,
      Students: [
        {
          firstName: "Jim",
          lastName: "Blogs2",
        },
        {
          firstName: "Sarah",
          lastName: "Parker",
        },
      ],
    };

    cy.log(exampleObject["key"]);
    cy.log(exampleObject["key2"]);
    cy.log(exampleObject.key);
    cy.log(exampleObject.key2);

    cy.log(exampleArrayOfValues[0]);
    cy.log(exampleArrayOfValues[1]);
    cy.log(exampleArrayOfValues[2]);

    cy.log(users.firstName);
    cy.log(users.lastName);
    cy.log(users.Age);
    cy.log(users.Students);
    cy.log(users.Students[0].firstName);
    cy.log(users.Students[0].lastName);

    cy.log(exampleArrayOfObjects[0].key);
    cy.log(exampleArrayOfObjects[1].key2);
    cy.log(exampleArrayOfObjects[2].key3);
  });
});
