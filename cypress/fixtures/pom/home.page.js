class Homepage {
    get headerNavbar() {return cy.get(".desktop-navbar__center li")};
    get liMentors() {return cy.get(".desktop-navbar__center li").eq(0)};
    get liMBA() {return cy.get(".desktop-navbar__center li").eq(1)};
    get liBachelors() {return cy.get(".desktop-navbar__center li").eq(2)};
    get liCurriculum() {return cy.get(".desktop-navbar__center li").eq(3)};
    get liReviews() {return cy.get(".desktop-navbar__center li").eq(4)};
    get liFAQ() {return cy.get(".desktop-navbar__center li").eq(5)};
    get liAboutUs() {return cy.get(".desktop-navbar__center li").eq(6)};
    get liAccreditation() {return cy.get(".desktop-navbar__center li").eq(7)};

    verifyLengthOfTheListings(number) {
        this.headerNavbar.should("Have.length", number);
    }

    verifyLiMentorsText(text) {
        this.liMentors.should("have.text", text);
    }

    verifyLiMBAText(text) {
        this.liMBA.should("have.text", text);
    }

    verifyLiBachelorsText(text) {
        this.liBachelors.should("have.text", text);
    }

    verifyLiCurriculumText(text) {
        this.liCurriculum.should("have.text", text);
    }

    verifyLiReviewsText(text) {
        this.liReviews.should("have.text", text);
    }

    verifyLiFAQText(text) {
        this.liFAQ.should("have.text", text);
    }

    verifyLiAboutUsText(text) {
        this.liAboutUs.should("have.text", text);
    }

    verifyLiAccreditationText(text) {
        this.liAccreditation.should("have.text", text);
    }
}

export default new Homepage();