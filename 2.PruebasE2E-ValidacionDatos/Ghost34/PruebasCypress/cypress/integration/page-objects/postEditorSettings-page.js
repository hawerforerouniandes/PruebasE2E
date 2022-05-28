class PostEditorSettingsPage {
    get metaDataButton() {
        return cy.contains('Meta data')
    }

    get metaTitleTextField() {
        return cy.get('[name="post-setting-meta-title"]')
    }

    get backButton() {
        return cy.get('[class="back settings-menu-header-action"]')
    }

    get closeButton() {
        return cy.get('[class="close settings-menu-header-action"]')
    }

    get wordCount() {
        return cy.get('[class="word-count"]').first()
    }

    get secondWordCount() {
        return cy.get('[class="word-count"]').eq(1)
    }

    get metaDescription() {
        return cy.get('[id="meta-description"]')
    }

    selectMetaData() {
        this.metaDataButton.click()
    }

    updateMetaTitle(title) {
        this.metaTitleTextField.type(title)
    }

    updateMetaDescription(description) {
        this.metaDescription.type(description)
    }

    selectBackButton() {
        this.backButton.click()
    }

    closeSettingsMenu() {
        this.closeButton.click()
    }

    isWordCountExceded(hasColorChanged = true) {
        const hasColor = hasColorChanged ? 'have.css' : 'not.have.css'
        this.wordCount.should(hasColor, 'color', 'rgb(226, 84, 64)')
    }

    isMetaDescriptionWordCountExceded(hasColorChanged = true) {
        const hasColor = hasColorChanged ? 'have.css' : 'not.have.css'
        this.secondWordCount.should(hasColor, 'color', 'rgb(226, 84, 64)')
    }

}

export default new PostEditorSettingsPage();