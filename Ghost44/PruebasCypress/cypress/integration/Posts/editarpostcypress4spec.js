describe('Testing positivo editar post', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('site').then((siteData) => {
            cy.visit(siteData.url)
        })
    })

    it('Create tag', () => {

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

        //Tags
        cy.contains("Tags").click();
        cy.url().should("include", "/tags");
        cy.wait(1000);

        //Create tags
        cy.contains("New tag").click();
        let body = cy.get("body");
        cy.get('input[name=name]').type("pruebas e2e")
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click({ force: true })
        cy.wait(1000);

        //Posts
        cy.contains("Posts").click();
        cy.url().should("include", "/posts");
        cy.wait(1000);

        //Crete post
        cy.contains("New post").click();
        body = cy.get("body");


        //Configuración
        cy.get('button.post-settings').click()
        cy.wait(4000);

        //Select tag
        cy.get('.ember-power-select-trigger-multiple-input').then($selects => {
            var randomSelect = $selects.get(0);
            cy.wrap(randomSelect).click();
            cy.contains("pruebas e2e").click();
            cy.wait(1000);
        });

        //Agregar nombre post
        body = cy.get("body");
        body.find("textarea").first().type("Nuevo post con etiqueta", { force: true });
        cy.get('.koenig-editor__editor').click({ force: true })
        cy.wait(2000);

        //Publicar
        cy.contains("Publish").click();
        cy.wait(500);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()

    })

})