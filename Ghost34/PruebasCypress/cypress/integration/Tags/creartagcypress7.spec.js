const { faker } = require('@faker-js/faker');

describe('Testing negativo crear tag', () => {
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
        cy.get('[type="submit"]').click();
        cy.wait(1000);
      })

      //Open dashboard
      cy.url().should("include", "/site");
      cy.wait(1000);

      //Tags
      cy.get('.gh-nav-top').contains('Tags').click();
      cy.url().should("include", "/tags");
      cy.wait(1000);
      
      //Create tag
      cy.get('.tags-header').contains('New tag').click();
      cy.wait(1000);
      cy.get('#tag-name').focus();
      //Name
      cy.get('#tag-name').type(faker.datatype.string(10), {force: true, parseSpecialCharSequences: false} );
      //Description with 501
      cy.get('#tag-description').type(faker.datatype.string(501), {force: true, parseSpecialCharSequences: false} );
      //Save tag
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);

      //Error message validation
      cy.get('#tag-description').parent().children('p').contains('Description cannot be longer than 500 characters.').should('be.visible');
    })
})
