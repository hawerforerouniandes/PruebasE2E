class PostsDashboardPage {
    get postsMenuButton() {
        return cy.get('[href="#/posts/"]').first();
    }

    get newPostButton() {
        return cy.get('[href="#/editor/post/"]').first();
    }

    goToPostsDashBoard() {
        cy.wait(1000);
        cy.screenshot();
        this.postsMenuButton.click();
    }

    goToNewPostEditor() {
        cy.screenshot();
        this.newPostButton.click();
    }

    selectCreatedPostByTitle(postTitle) {
        cy.contains(postTitle).click();
    }
}

export default new PostsDashboardPage();