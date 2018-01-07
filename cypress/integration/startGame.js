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

describe("initial turn", () => {
  it("player X must go first", () => {
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
