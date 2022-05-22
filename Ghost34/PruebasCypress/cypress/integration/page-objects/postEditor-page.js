class PostEditorPage {
    get editorTitlePlaceholder() {
        return cy.get('[placeholder="Post Title"]')
    }

    get postText() {
        return cy.get('[data-kg-has-link-toolbar="true"]')
    }

    get addCardButton() {
        return cy.get('[aria-label="Add a card"]')
    }

    updatePostTitle(postTitle, clearing = true) {
        if (clearing) {
            this.editorTitlePlaceholder.clear()
        }
        this.editorTitlePlaceholder.type(postTitle);
        cy.screenshot();
    }

    updatePostText(postText) {
        this.postText.first().clear()
        this.postText.first().type(postText);
        cy.screenshot();
    }

    publishPage() {
        //Publish page
        cy.contains("Publish").click();
        cy.screenshot();
        cy.get('Footer').within(() => {
            cy.contains("Publish").click();
            cy.contains("Update").should("be.visible");
        });
    }

    updatePageAndConfirm() {
        cy.contains("Update").click();
        cy.screenshot();
        cy.get('Footer').contains("Update").click();
        cy.get('Footer').contains("Update").should("be.visible");
    }
}

export default new PostEditorPage();