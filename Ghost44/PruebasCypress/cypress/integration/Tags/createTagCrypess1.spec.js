const { faker } = require('@faker-js/faker');

describe('Tests case creación de tags', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('site').then((siteData) => {
            cy.visit(siteData.url)
        })
    })

    it('Crear Tag', () => {

        const tagColor = faker.internet.color().replace('#', '');
        const testDescription = faker.lorem.paragraph();

        // Login
        cy.get('@adminData')
            .then(adminData => {
                //Login
                cy.get('[type="email"]').type(adminData.email);
                cy.get('[type="password"]').type(adminData.password);
                cy.get('[type="submit"]').click();
            })

        //Open dashboard
        cy.url().should("include", "/site");

        //Tags
        cy.contains("Tags").click();
        cy.url().should("include", "/tags");
        cy.get('ol').find('li').then((tags) => {
            expect(tags.length, 'Initial tags').to.be.gt(0);

            //Crete tag
            cy.contains("New tag").click();
            cy.get("#tag-name").type("Hello tag");
            cy.get('[name="accent-color"]').type(tagColor);
            cy.get('[name="description"]').type(testDescription);
            cy.contains("Save").click();

            cy.contains("Tags").click();
            cy.url().should("include", "/tags");

            cy.get('ol').find('li').then((newTags) => {
                expect(newTags.length, 'Initial tags').to.be.gt(tags.length);
            });
        });
    })

    it('Crear Tag with wrong color', () => {

        const tagColor = faker.internet.color();
        const testDescription = faker.lorem.paragraph();

        cy.get('@adminData')
            .then(adminData => {
                //Login
                cy.get('[type="email"]').type(adminData.email);
                cy.get('[type="password"]').type(adminData.password);
                cy.get('[type="submit"]').click();
            })

        //Open dashboard
        cy.url().should("include", "/site");

        //Tags
        cy.contains("Tags").click();
        cy.url().should("include", "/tags");
        cy.get('ol').find('li').then((tags) => {
            expect(tags.length, 'Initial tags').to.be.gt(0);

            //Crete tag
            cy.contains("New tag").click();
            cy.get("#tag-name").type("Hello tag");
            cy.get('[name="accent-color"]').type(tagColor);
            cy.get('[name="description"]').type(testDescription);
            cy.contains("Save").click();

            cy.contains('Retry').should('be.visible');
        });
    })

})