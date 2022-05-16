class TagsDashboardPage {
    get tagsMenuButton() {
        return cy.get('[href="#/tags/"]').first();
    }

    get newTagButton() {
        return cy.get('[href="#/tags/new/"]')
    }

    goToTagsDashBoard() {
        cy.wait(1000);
        cy.screenshot();
        this.tagsMenuButton.click();
    }

    goToNewTagEditor() {
        cy.screenshot();
        this.newTagButton.click();
    }
}

export default new TagsDashboardPage();