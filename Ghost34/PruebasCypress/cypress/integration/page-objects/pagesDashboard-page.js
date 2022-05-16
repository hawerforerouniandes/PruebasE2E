class PageDashboardPage {
    get pagesMenuButton() {
        return cy.get('[href="#/pages/"]')
    }

    get newPageButton() {
        return cy.get('[href="#/editor/page/"]')
    }

    goToPagesDashBoard() {
        cy.wait(1000);
        cy.screenshot();
        this.pagesMenuButton.click();
    }

    goToNewPageEditor() {
        cy.screenshot();
        this.newPageButton.click();
    }

    selectCreatedPageByTitle(pageTitle) {
        cy.contains(pageTitle).click();
    }
}

export default new PageDashboardPage();