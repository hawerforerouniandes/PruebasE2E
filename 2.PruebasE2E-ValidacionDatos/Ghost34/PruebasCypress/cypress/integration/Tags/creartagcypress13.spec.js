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

      const tupla = [faker.datatype.string(10), faker.datatype.string(20), faker.datatype.string(10), faker.datatype.string(20), faker.datatype.string(10), faker.internet.url()];

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
      cy.get('#tag-name').type(tupla[0], {force: true, parseSpecialCharSequences: false} );
      //Description
      cy.get('#tag-description').type(tupla[1], {force: true, parseSpecialCharSequences: false} );

      //Expand Meta data
      cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span').scrollIntoView();
      cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span').click();
      //Name Meta data
      cy.get('#meta-title').focus();
      cy.get('#meta-title').type(tupla[2], {force: true, parseSpecialCharSequences: false} );
      //Description Meta data
      cy.get('#meta-description').focus();
      cy.get('#meta-description').type(tupla[3], {force: true, parseSpecialCharSequences: false} );
      //Canonical URL
      cy.get('#canonical-url').focus();
      cy.get('#canonical-url').type(tupla[4], {force: true, parseSpecialCharSequences: false})
      cy.get('main').click();
      cy.get('#canonical-url').parent().children('p').scrollIntoView();
      cy.get('#canonical-url').parent().children('p').should('be.visible');
      //Real canonical URL
      cy.get('#canonical-url').clear();
      cy.get('#canonical-url').type(tupla[5], {force: true, parseSpecialCharSequences: false})
      
      //Save tag
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);

      //Tag list
      cy.get('.gh-nav-top').contains('Tags').click();
      cy.url().should("include", "/tags");

      //Name tag validation in list
      cy.get('.gh-main').children('section').contains(tupla[0]).first().scrollIntoView();
      cy.get('.gh-main').children('section').contains(tupla[0]).should('be.visible');
    })
})
