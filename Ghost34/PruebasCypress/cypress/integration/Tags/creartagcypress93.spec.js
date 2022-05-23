const { faker } = require('@faker-js/faker');

describe('Testing positivo crear post', () => {
    beforeEach(()=>{
      cy.fixture('admin').as('adminData')
      cy.fixture('site').then((siteData) => {
        cy.visit(siteData.url);
        cy.wait(1000);
      })
    })

    it('Crear tag', () => {

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

      //Tags
      cy.get('.gh-nav-top').contains('Tags').click();
      cy.url().should("include", "/tags");
      cy.screenshot();
      cy.wait(1000);
      
      //Create tag
      cy.get('.tags-header').contains('New tag').click();
      cy.screenshot();
      cy.wait(1000);
      cy.get('#tag-name').focus();
      const name = faker.datatype.string(10);
      cy.get('#tag-name').type(name, {force: true, parseSpecialCharSequences: false} );
      cy.screenshot();
      cy.get('#tag-description').focus();
      //Description with 510 characters
      const description = faker.datatype.string(510);
      cy.get('#tag-description').type(description, {force: true, parseSpecialCharSequences: false} );
      cy.screenshot();      
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);
      cy.screenshot();

      //Error message validation
      cy.get('#tag-description').parent().children('p').contains('Description cannot be longer than 500 characters.').should('be.visible');
    })
})
