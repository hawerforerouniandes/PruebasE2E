class PageEditorPage {

    get editorTitlePlaceholder() {
        return cy.get('[placeholder="Page Title"]')
    }

    get pageText() {
        return cy.get('[data-kg-has-link-toolbar="true"]')
    }

    updatePageTitle(pageTitle, clearing = true) {
        if (clearing) {
            this.editorTitlePlaceholder.clear()
        }
        this.editorTitlePlaceholder.type(pageTitle);
    }

    updatePageText(pageText) {
        this.pageText.first().clear()
        this.pageText.first().type(pageText);
    }

    publishPage() {
        //Publish page
        cy.contains("Publish").click();
        cy.get('Footer').within(() => {
            cy.contains("Publish").click();
            cy.contains("Update").should("be.visible");
        });
    }

    updatePageAndConfirm() {
        cy.contains("Update").click();
        cy.get('Footer').contains("Update").click();
        cy.get('Footer').contains("Update").should("be.visible");
    }

    deleteAndConfirm() {
        cy.get('[title="Settings"]').click();
        cy.get('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
        cy.get('[class="modal-content ember-view"]').within(() => {
            cy.contains('Delete').click();
        });
    }

    fillBasicPage(pageTitle, pageText) {
        //Create page
        this.updatePageTitle(pageTitle);
        this.updatePageText(pageText);
    }

    fillBasicPageAndPublish(pageTitle, pageText) {
        //Create page
        this.updatePageTitle(pageTitle);
        this.updatePageText(pageText);
        this.publishPage();
    }

}

export default new PageEditorPage();