class SigninPage {
    get emailField() {
        return cy.get('[type="email"]');
    }

    get passwordField() {
        return cy.get('[type="password"]');
    }

    get submitButton() {
        return cy.get('[type="submit"]');
    }

    open(url) {
        cy.visit(url)
    }

}

export default new SigninPage();