class AboutUs {
  get inputName() {
    return cy.get("#name");
  }
  get inputEmail() {
    return cy.get("#email");
  }
  get inputMessage() {
    return cy.get("#message");
  }
  get btnSubmit() {
    return cy.get('[type="submit"]');
  }
  get sectionContactForm() {
    return cy.get("section.about-us-contact-form");
  }
  get textContactForm() {
    return cy.contains("Contact form");
  }

  inputTheName(name) {
    this.inputName.type(name);
  }

  inputTheEmail(email) {
    this.inputEmail.type(email);
  }

  inputTheMessage(message) {
    this.inputMessage.type(message);
  }

  isVisibleSubmitBtn() {
    this.btnSubmit.should("be.visible");
  }

  scrollToTheContactForm() {
    this.sectionContactForm.scrollIntoView();
  }

  isVisibleTextContactForm() {
    this.textContactForm.should("be.visible");
  }
}

export default new AboutUs();
