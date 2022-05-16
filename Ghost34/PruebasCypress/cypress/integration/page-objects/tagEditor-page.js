class TagEditorPage {
    get nameField() {
        return cy.get("#tag-name");
    }

    get accentColorField() {
        return cy.get('[name="accent-color"]');
    }

    get descriptionField() {
        return cy.get('[name="description"]');
    }

    get saveButton() {
        return cy.contains("Save");
    }

    fillTagFormWith(name, accentColor, description) {
        this.nameField.type(name);
        this.accentColorField.type(accentColor);
        this.descriptionField.type(description);
        cy.screenshot();
    }

    saveTag() {
        this.saveButton.click();
        cy.screenshot();
    }

}

export default new TagEditorPage();