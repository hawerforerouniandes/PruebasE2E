describe('Testing positivo crear post', () => {
  beforeEach(()=>{
    cy.fixture('admin').as('adminData')
    cy.fixture('site').then((siteData) => {
      cy.visit(siteData.url);
      cy.wait(1000);
    })
  })

  it('Crear post', () => {

    // Login
    cy.get('@adminData').then(adminData => {
      cy.get('[type="email"]').type(adminData.email);
      cy.get('[type="password"]').type(adminData.password);
      cy.screenshot();
      cy.get('[type="submit"]').click();
      cy.wait(1000);
    })

    //Open dashboard
    cy.url().should("include", "/site");
    cy.screenshot();
    cy.wait(1000);

    //Posts
    cy.get('.gh-nav-top').contains('Posts').click();
    cy.url().should("include", "/posts");
    cy.screenshot();
    cy.wait(1000);
    
    //Create post
    cy.get('.post-header').contains('New post').click();
    cy.screenshot();
    cy.wait(1000);
    let body = cy.get("body");
    body.find("textarea").first().type("Prueba publicar post", { force: true });
    cy.get(".gh-koenig-editor-pane").first().click();
    cy.screenshot();
    cy.wait(5000);

    //Publish post

    cy.get('.gh-editor-header > section').contains('Publish').click();
    cy.screenshot();
    cy.wait(1000);
    cy.get('body > div > div > footer').contains('Publish').click();
    cy.screenshot();
    cy.wait(1000);
    cy.get(".gh-koenig-editor-pane").first().click();
    cy.screenshot();
    cy.wait(5000);
    cy.get('.gh-editor-header > div > div > a').click();
    cy.screenshot();
    cy.wait(1000);
    
    //Validate publish post
    cy.get('.gh-posts-list-item').contains('Published').first().focus();
    cy.screenshot();
    cy.get('.gh-posts-list-item').contains('Published').first().parent().contains("Prueba publicar post").should('be.visible');
  })
})
