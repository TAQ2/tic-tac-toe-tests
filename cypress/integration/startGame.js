describe("start game", () => {
  it("the game can be started", () => {
    cy.visit("/");

    cy
      .get(".startButton")
      .first()
      .click();

    cy
      .get(".tile00")
      .first()
      .click()
      .contains("X");
  });
});
