describe("reset game", () => {
  it("when the game is over the next game must start with player X going first", () => {
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

    cy
      .get(".tile01")
      .first()
      .click()
      .contains("O");

    cy
      .get(".tile11")
      .first()
      .click()
      .contains("X");

    cy
      .get(".tile02")
      .first()
      .click()
      .contains("O");

    cy
      .get(".tile22")
      .first()
      .click()
      .contains("X");

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
