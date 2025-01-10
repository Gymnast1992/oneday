import Credentials from "../fixtures/data/credentials.json";
import AboutUs from "../fixtures/pom/about-us.page";

describe("About Us", () => {
  beforeEach(() => {
    cy.visit("/about-us");
  });

  it("TC03, Should verify the text and the Apply now button in the header", () => {
    cy.get("header h1").should("have.text", Credentials.TextOurMission);
    cy.contains("Apply now").should("be.visible");
    cy.get("section.about-us-contact-form").scrollIntoView();
  });

  it("TC04, Should scroll to the contact form", () => {
    AboutUs.scrollToTheContactForm();
    AboutUs.isVisibleTextContactForm();
  });

  it("TC05, Should be able to fill out the  contact form", () => {
    AboutUs.inputTheName(Credentials.name);
    AboutUs.inputTheEmail(Credentials.email);
    AboutUs.inputTheMessage(Credentials.message);
    AboutUs.isVisibleSubmitBtn();
  });
});
