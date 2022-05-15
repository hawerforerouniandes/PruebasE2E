describe('Testing Ghost application Create new Page', () => {
    beforeEach(()=>{
      cy.fixture('site').then((sit)  => {
        cy.visit(sit.url)
        cy.wait(7000)
      })
    })

    it('Test login and create new page', () => {

        cy.fixture('admin').then((ad)  => {
           var username = ad.email
           var password = ad.password
           var title = "Prueba en Cypress"
           var article = "Esta es una prueba en cypress"

           FillLogin(username, password);
           ClickLinkPage();
           ClickButtonNewPage();
           FillTitleNewPage(title);
           FillTextArticleNewPage(article);
           ValidateNewPageCreation(title);
       })
    })
  })

  function FillLogin(user, password){
    cy.get('[name="identification"]').type(user);
    cy.get('[name="password"]').type(password);
    cy.wait(1000);
    cy.get('[type="submit"]').click();
    cy.wait(5000);
  }

  function ClickLinkPage(){
    cy.get('[href="#/pages/"]').click();
    cy.wait(1000);
  }

  function ClickButtonNewPage(){
    cy.get('[href="#/editor/page/"]').click();
    cy.wait(2000);
  }

  function FillTitleNewPage(title){
    cy.get('[class="gh-editor-post-status"]', { timeout: 5000 }).should('be.visible');
    cy.get('[placeholder="Page title"]').type(title);
  }

  function FillTextArticleNewPage(text){
    cy.get('[data-kg="editor"]').type(text).type('{enter}');
  }

  function ValidateNewPageCreation(title){
    cy.wait(10000);
    cy.get('[href="#/pages/"]').click();
    cy.wait(2000);
    cy.get('h3', { timeout: 10000 }).contains(title).should('be.visible');
  }

