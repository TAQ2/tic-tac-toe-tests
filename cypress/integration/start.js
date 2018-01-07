describe("start game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the game can be started", () => {
    cy
      .get(".startButton")
      .first()
      .click();
  });

  it("the game cannot be played until the start button has been clicked", () => {
    const firstTile = cy
      .get(".tile00")
      .first()
      .click();

    firstTile.should("have.text", "");
  });
});
