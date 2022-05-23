class CardMenuPage {
    get editorTitlePlaceholder() {
        return cy.get('[placeholder="Page Title"]')
    }

    get postText() {
        return cy.get('[data-kg-has-link-toolbar="true"]')
    }

    get addCardButton() {
        return cy.get('[aria-label="Add a card"]')
    }

    get imageButton() {
        return cy.get('[title="Image"]')
    }

    get youtubeButton() {
        return cy.get('[title="YouTube"]')
    }

    get youtubeInput() {
        return cy.get('[name="url"]')
    }

    fillYouTubeCard(youTubeLink) {
        this.youtubeInput.type(youTubeLink).type('{enter}');
    }

    checkIfYouTubeFormDoesNotExist() {
        cy.get('[placeholder="Paste URL to add embedded content..."]').should('not.exist');
    }
}

export default new CardMenuPage();