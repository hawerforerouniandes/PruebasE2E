describe('Testing positivo editar post', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('site').then((siteData) => {
            cy.visit(siteData.url)
        })
    })

    it('Editar post', () => {

        // Login
        cy.get('@adminData')
            .then(adminData => {
                //Login
                cy.get('[type="email"]').type(adminData.email);
                cy.get('[type="password"]').type(adminData.password);
                cy.get('[type="submit"]').click();
            })

        //Open dashboard
        cy.url().should("include", "/site");
        cy.wait(1000);

        //Posts
        cy.contains("Posts").click();
        cy.url().should("include", "/posts");
        cy.wait(1000);

        //Crete post
        cy.contains("New post").click();
        let body = cy.get("body");
        body.find("textarea").first().type("Nuevo post", { force: true });
        cy.get(".gh-koenig-editor-pane").first().click();
        cy.wait(2000);

        //Posts
        cy.contains("Posts").click();
        cy.url().should("include", "/posts");
        cy.wait(1000);

        //Select post
        cy.contains("Nuevo post").click({ force: true });

        //Edit post
        body = cy.get("body");
        body.find("textarea").first().type("Post Modificado");
        cy.contains("Preview").click();
        cy.wait(500);

    })

})