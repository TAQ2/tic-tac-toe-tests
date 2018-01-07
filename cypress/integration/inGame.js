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
  beforeEach(() => {
    cy.visit("/");
  });

  it("player O must take a turn after player X", () => {
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

  it("players cannot place a token in a non empty tile", () => {
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
      .get(".tile00")
      .first()
      .click()
      .contains("X");
  });
});
