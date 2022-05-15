// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
// cy.faker = require(faker);

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

      //Tags
      cy.get('.gh-nav-top').contains('Tags').click();
      cy.url().should("include", "/tags");
      cy.screenshot();
      cy.wait(1000);
      
      //Create post
      cy.get('.tags-header').contains('New tag').click();
      cy.screenshot();
      cy.wait(1000);
      cy.get('#tag-name').focus();
      const name = faker.datatype.string(200);
      cy.get('#tag-name').type(name, {force: true, parseSpecialCharSequences: false} );
      cy.screenshot();
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);
      cy.screenshot();
      cy.get('#tag-name').parent().children('.error').contains('Tag names cannot be longer than 191 characters.').should('be.visible');
    })
})
