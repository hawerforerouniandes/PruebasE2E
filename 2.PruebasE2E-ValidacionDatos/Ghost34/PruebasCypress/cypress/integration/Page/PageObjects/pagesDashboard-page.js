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
        this.newPageButton.each(($el, index, $list) => {
            if(index == 0){
              cy.wrap($el).click();
            }
          });
    }

    selectCreatedPageByTitle(pageTitle) {
        cy.contains(pageTitle).click();
    }
}

export default new PageDashboardPage();