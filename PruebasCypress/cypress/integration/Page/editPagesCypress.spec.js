const { faker } = require('@faker-js/faker');

describe('Tests edición de Pages', function() {

    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('site').then((siteData) => {
            cy.visit(siteData.url)
        })
    })

    it('Editar una pagina despues de creada', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();

        loginToGhost();
        goToPages();
        createBasicPage(pageTitle, pageText);

        goToDashBoard();

        selectCreatedPageByTitle(pageTitle);

        const updatedPageTitle = "Updated ".concat(pageTitle);
        updatePageTitle(updatedPageTitle);

        cy.contains("Update").click();
        cy.get('Footer').contains("Update").click();
        cy.get('Footer').contains("Update").should("be.visible");

        goToDashBoard();

        cy.contains(updatedPageTitle);
    });

    function loginToGhost() {
        // Login
        cy.get('@adminData')
            .then(adminData => {
                //Login
                cy.get('[type="email"]').type(adminData.email);
                cy.get('[type="password"]').type(adminData.password);
                cy.get('[type="submit"]').click();

                cy.contains('Retry').should('not.exist');
            })
    }

    function goToPages() {
        //Open dashboard
        cy.url().should("include", "/site");

        //Pages
        cy.contains("Pages").click();
        cy.url().should("include", "/pages");
    }

    function goToDashBoard() {
        //Pages
        cy.contains("Pages").click();
        cy.url().should("include", "/pages");
    }

    function createBasicPage(pageTitle, pageText) {
        //Create page
        cy.contains("New page").click();
        updatePageTitle(pageTitle);
        updatePageText(pageText);

        //Publish page
        cy.contains("Publish").click();
        cy.get('Footer').contains("Publish").click();
        cy.get('Footer').contains("Update").should("be.visible");
    }

    function selectCreatedPageByTitle(pageTitle) {
        cy.contains(pageTitle).click();
    }

    function updatePageTitle(pageTitle) {
        cy.get('[placeholder="Page Title"]').clear()
        cy.get('[placeholder="Page Title"]').type(pageTitle);
    }

    function updatePageText(pageText) {
        cy.get('[data-kg-has-link-toolbar="true"]').first().clear()
        cy.get('[data-kg-has-link-toolbar="true"]').first().type(pageText);
    }
})