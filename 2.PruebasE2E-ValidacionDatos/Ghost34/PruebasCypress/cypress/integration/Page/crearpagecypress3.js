describe('Testing Ghost application Create new Page with three elements', () => {
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
           SelectListOfElements();
           SelectYoutubeElement();
           FillYoutubeLink("https://www.youtube.com/watch?v=-OwPzzK_CEw");
           ValidateNewPageCreation(title);
       })
    })
  })

  function FillLogin(user, password){
    cy.get('[name="identification"]').type(user);
    cy.get('[name="password"]').type(password);
    cy.wait(1000);
    cy.screenshot();
    cy.get('[type="submit"]').click();
    cy.wait(5000);
  }

  function ClickLinkPage(){
    cy.screenshot();
    cy.get('[href="#/pages/"]').click();
    cy.wait(1000);
  }

  function ClickButtonNewPage(){
    cy.screenshot();
    cy.get('[href="#/editor/page/"]').click();
    cy.wait(2000);
  }

  function FillTitleNewPage(title){
    cy.get('[class="flex items-center pl4 pr4 f8 nudge-left--1 h9 br2 br--right bg-white"]', { timeout: 5000 }).should('be.visible');
    cy.get('[placeholder="Page Title"]').type(title);
  }

  function FillTextArticleNewPage(text){
    cy.get('[data-kg="editor"]').type(text).type('{enter}');
  }

  function ValidateNewPageCreation(title){
    cy.wait(10000);
    cy.screenshot();
    cy.get('[href="#/pages/"]').click();
    cy.wait(2000);
    cy.screenshot();
    cy.get('h3', { timeout: 10000 }).contains(title).should('be.visible');
  }

  function SelectListOfElements(){
    cy.get('[aria-label="Add a card"]', { timeout: 5000 }).should('be.visible');
    cy.get('[aria-label="Add a card"]').click();
  }

  function SelectToggleElement(){
    cy.wait(2000);
    cy.get('[title="Toggle"]').click();
  }

  function SelectDividerElement(){
    cy.wait(2000);
    cy.get('[title="Divider"]').click();
  }

  function SelectButtonElement(){
    cy.wait(2000);
    cy.get('[title="Button"]').click();
  }

  function SelectYoutubeElement(){
    cy.wait(3000);
    cy.get('[title="YouTube"]').click();
  }

  function FillHeaderToogleElement(){
    cy.get('[data-placeholder="Toggle header"]', { timeout: 5000 }).should('be.visible');
    cy.get('[data-placeholder="Toggle header"]').type("ejemplo").type('{enter}');
  }

  function FillCollapsibleToogleElement(){
    cy.get('[data-placeholder="Collapsible content"]', { timeout: 5000 }).should('be.visible');
    cy.get('[data-placeholder="Collapsible content"]').type("persona1").type('{enter}');
  }

  function MoveToNextElement(){
    cy.get('[class="ember-application gh-body-fullscreen"]').type('{esc}');
    cy.wait(2000);
    cy.get('[class="ember-application gh-body-fullscreen"]').type('{enter}');
  }

  function FillTextButtonElement(){
    cy.get('#button-text-input', { timeout: 5000 }).should('be.visible');
    cy.get('#button-text-input').type("Ir");
  }

  function FillTextURLButtonElement(){
    cy.get('#button-url-input', { timeout: 5000 }).should('be.visible');
    cy.get('#button-url-input').click();
    cy.wait(2000);
    cy.get('[title="Homepage"]').click();
  }

  function SelectLeftPositionButtonElement(){
    cy.wait(2000);
    cy.get('[title="Left-align content"]').click();
  }

  function FillYoutubeLink(link){
    cy.wait(2000);
    cy.get('[placeholder="Paste URL to add embedded content..."]').type(link).type('{enter}');
  }

