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
      //Description
      cy.get('#tag-description').type(faker.datatype.string(10), {force: true, parseSpecialCharSequences: false} );

      //Expand Meta data
      cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span').scrollIntoView();
      cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span').click();
      //Name Meta data
      cy.get('#meta-title').focus();
      cy.get('#meta-title').type(faker.datatype.string(69), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#meta-title').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');
      //Description Meta data
      cy.get('#meta-description').focus();
      cy.get('#meta-description').type(faker.datatype.string(155), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#meta-description').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');
      
      //Expand Twitter card
      cy.get(':nth-child(2) > .flex > :nth-child(2) > .gh-btn > span').scrollIntoView();
      cy.get(':nth-child(2) > .flex > :nth-child(2) > .gh-btn > span').click();
      //Name Twitter card
      cy.get('#twitter-title').focus();
      cy.get('#twitter-title').type(faker.datatype.string(69), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#twitter-title').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');
      //Description Twitter card
      cy.get('#twitter-description').focus();
      cy.get('#twitter-description').type(faker.datatype.string(155), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#twitter-description').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');
      
      //Expand Facebook card
      cy.get(':nth-child(3) > .flex > :nth-child(2) > .gh-btn > span').scrollIntoView();
      cy.get(':nth-child(3) > .flex > :nth-child(2) > .gh-btn > span').click();
      //Name Facebook card
      cy.get('#og-title').focus();
      cy.get('#og-title').type(faker.datatype.string(69), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#og-title').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');
      //Description Facebook card
      cy.get('#og-description').focus();
      cy.get('#og-description').type(faker.datatype.string(155), {force: true, parseSpecialCharSequences: false} );
      //Alert with red number
      cy.get('#og-description').parent().find('span').should('have.attr', 'style', 'color: rgb(159, 187, 88);');

      //Save tag
      cy.get('header').find('section').contains('Save').click();
      cy.wait(1000);
    })
})
