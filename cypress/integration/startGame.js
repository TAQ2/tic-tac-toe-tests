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

describe("player tokens must alternate between turns", () => {
  it("player O must take a turn after player X", () => {
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
  });
});

it("players cannot place a token in a non empty tile", () => {});
