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

    loginWithAdminData(adminData) {
        this.emailField.type(adminData.email);
        this.passwordField.type(adminData.password);
        this.submitButton.click();
        cy.contains('Retry').should('not.exist');
    }
}

export default new SigninPage();