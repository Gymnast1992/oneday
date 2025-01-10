import Credentials from "../fixtures/data/credentials.json";

describe("About Us", () => {
  beforeEach(() => {
    cy.visit("/about-us");
  });

  it("TC03, Should verify the text and the Apply now button in the header", () => {
    cy.get("header h1").should("have.text", Credentials.TextOurMission);
    cy.contains("Apply now").should("be.visible");
    cy.get("section.about-us-contact-form").scrollIntoView();
  });

});
