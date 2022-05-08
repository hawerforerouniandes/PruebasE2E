describe('Testing positivo editar post', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
    })

    it('Editar post', ()=>{

        //Login
        cy.get("#ember8").type("h.foreror@uniandes.edu.co");
        cy.get("#ember10").type("admin12345");
        cy.wait(1000);
        cy.get("#ember12").click();
        cy.wait(1000);

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
        cy.contains("PostPrueba2").click({ force: true });

        //Edit post
        body = cy.get("body");
        body.find("textarea").first().type("Pruebas automatizadas de software, de la Universidad de los Andes. Asegurar la calidad del software es una labor de alta importancia para los equipos de desarrollo, dado que el costo de una falla en el software va más allá de la pérdida de confort al usar un sistema.");
        cy.wait(500);
        cy.contains("Publish").click();
        cy.wait(500);
        cy.contains("Publish").click();
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
        cy.wait(500);
        cy.get('.gh-alert-content').then(($div)=>{
            expect($div).to.exist
        })  
        cy.wait(500);

    })

  })