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

      const tupla = [faker.datatype.string(10), faker.internet.exampleEmail()];

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

      //Staff
      cy.get('.gh-nav-top').contains('Staff').click();
      cy.url().should("include", "/staff");
      cy.wait(1000);
      
      //Invite people
      cy.get('.gh-btn > span').click();
      cy.wait(1000);
      cy.get('#new-user-email').type(tupla[0]);
      cy.get('h1').click();
      cy.get('#new-user-email').parent().find('p').should('be.visible');
      
      //Invite real people 
      cy.get('#new-user-email').clear();
      cy.get('#new-user-email').type(tupla[1]);
      cy.get('.modal-footer').find('button').click();
      cy.reload();
      cy.wait(1000);

      //Invited users list
      cy.get('.apps-card-app-title').contains(tupla[1]).should('be.visible');
    })
})
