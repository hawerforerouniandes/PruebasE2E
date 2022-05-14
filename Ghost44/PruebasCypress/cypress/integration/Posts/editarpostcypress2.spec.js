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
        body.find("textarea").first().type("Pruebas automatizadas de software, de la Universidad de los Andes. Asegurar la calidad del software es una labor de alta importancia para los equipos de desarrollo, dado que el costo de una falla en el software va más allá de la pérdida de confort al usar un sistema.");
        cy.wait(500);
        cy.contains("Publish").click();
        cy.wait(500);
        cy.contains("Publish").click();
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
        cy.wait(500);
        cy.get('.gh-alert-content').then(($div) => {
            expect($div).to.exist
        })
        cy.wait(500);

    })

})