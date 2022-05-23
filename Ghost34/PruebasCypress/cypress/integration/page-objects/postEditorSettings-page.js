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

    selectMetaData() {
        this.metaDataButton.click()
    }

    updateMetaTitle(title) {
        this.metaTitleTextField.type(title)
    }

    selectBackButton() {
        this.backButton.click()
    }

    closeSettingsMenu() {
        this.closeButton.click()
    }

}

export default new PostEditorSettingsPage();