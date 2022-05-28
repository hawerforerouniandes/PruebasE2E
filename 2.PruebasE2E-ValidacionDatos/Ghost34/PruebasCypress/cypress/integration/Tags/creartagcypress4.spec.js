const { faker } = require('@faker-js/faker');

describe('Testing positivo crear tag', () => {
    beforeEach(()=>{
      cy.fixture('admin').as('adminData')
      cy.fixture('site').then((siteData) => {
        cy.visit(siteData.url);
        cy.wait(1000);
      })
    })

    it('Crear tag', () => {

      const tupla = [faker.datatype.string(190)];

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
      //Name with 192 characters
      cy.get('#tag-name').type(tupla[0], {force: true, parseSpecialCharSequences: false} );
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);

      //Tag list
      cy.get('.gh-nav-top').contains('Tags').click();
      cy.url().should("include", "/tags");

      //Name tag validation in list
      cy.get('.gh-main').children('section').contains(tupla[0]).first().should('be.visible');
    })
})
