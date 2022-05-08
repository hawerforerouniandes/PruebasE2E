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
        cy.contains("Nuevo post").click({ force: true });

        //Edit post
        body = cy.get("body");
        body.find("textarea").first().type(" con video de youtube");
        cy.wait(500);
        cy.get('.koenig-editor__editor').click({force:true})
        cy.wait(500);

        //Agregar recurso video
        cy.get('.koenig-plus-menu-button').first().click({force:true})
        cy.wait(500);
        cy.get('[title="YouTube"] > .flex-column > .f8').click({force:true})
        cy.wait(500);
        cy.get('input[name=url]').click({force:true})		
        cy.wait(500);
        cy.get('input[name=url]').type("https://www.youtube.com/watch?v=yuyD7rvDP8I")
        cy.wait(500);
        cy.get(".gh-koenig-editor-pane").first().click();
        cy.wait(3000);

        //Publicar
        cy.contains("Publish").click();
        cy.wait(500);
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()

        //Vidualizar
        cy.wait(500);
        cy.get('.koenig-embed-video').then(($div)=>{
            expect($div).to.exist
        })  

    })

  })