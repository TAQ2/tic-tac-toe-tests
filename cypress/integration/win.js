describe("the game can be won", () => {
  it("once the game is won, another tile cannot be placed", () => {
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
      .get(".tile10")
      .first()
      .click()
      .should("have.text", "");
  });
});
