import Credentials from "../fixtures/data/credentials.json";
import Homepage from "../fixtures/pom/home.page";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01, Should verify that navbar section has 8 listings", () => {
    Homepage.verifyLengthOfTheListings(8);
  });

  it("TC01, Should verify names of the 8 listings in the navbar section", () => {
    Homepage.verifyLiMentorsText(Credentials.Mentors);
    Homepage.verifyLiMBAText(Credentials.MBA);
    Homepage.verifyLiBachelorsText(Credentials.Bachelors);
    Homepage.verifyLiCurriculumText(Credentials.Curriculum);
    Homepage.verifyLiReviewsText(Credentials.Reviews);
    Homepage.verifyLiFAQText(Credentials.FAQ);
    Homepage.verifyLiAboutUsText(Credentials.AboutUs);
    Homepage.verifyLiAccreditationText(Credentials.Accreditation);
  });
});
