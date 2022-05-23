import cardMenuPage from "./cardMenu-page"

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

    get errorToast() {
        return cy.get('[class="gh-alert-content"]')
    }

    get publishButton() {
        return cy.get('.gh-publishmenu')
    }

    get confirmPublishButton() {
        return cy.contains('Publish')
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

    addCardClick() {
        this.addCardButton.click()
    }

    addYouTubeVideo(link) {
        cardMenuPage.youtubeButton.click()
        cardMenuPage.fillYouTubeCard(link)
    }

    checkIfYouTubeFormDoesNotExist() {
        cardMenuPage.checkIfYouTubeFormDoesNotExist()
    }

    publishPage() {
        //Publish page
        this.publishButton.click();
        cy.screenshot();
        cy.get('Footer').within(() => {
            this.confirmPublishButton.click();
            cy.contains("Update").should("be.visible");
        });
    }

    updatePostAndConfirm() {
        cy.contains("Update").click();
        cy.screenshot();
        cy.get('Footer').contains("Update").click();
        cy.get('Footer').contains("Update").should("be.visible");
    }

    checkPublishButtonDoesExist(visible = false) {
        const visibility = visible ? "be.visible" : 'not.exist';
        this.publishButton.should(visibility);
    }

    checkErrorToastIsVisible() {
        this.errorToast.should("be.visible");
    }
}

export default new PostEditorPage();