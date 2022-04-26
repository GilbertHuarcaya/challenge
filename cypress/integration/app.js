/* eslint-disable no-undef */
/* global cy */

describe("Challenge", () => {
  it("frontpage can be opened", () => {
    cy.visit("http://localhost:3000");
  });
});
