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

    it('Editar una pagina con un titulo mayor a 255 caracteres', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();

        loginToGhost();
        goToPages();
        createBasicPage(pageTitle, pageText);

        goToDashBoard();

        selectCreatedPageByTitle(pageTitle);

        const updatedPageTitle = faker.lorem.sentences(6);
        updatePageTitle(updatedPageTitle, false);

        cy.contains("Update").click();
        cy.get('Footer').contains("Update").click();
        cy.get('Footer').contains("Retry").should("be.visible");
        updatePageTitle(pageTitle);
    });

    it('Editar una pagina de un draft a publicada', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();

        loginToGhost();
        goToPages();

        cy.contains("New page").click();
        updatePageTitle(pageTitle);
        updatePageText(pageText);

        goToDashBoard();

        selectCreatedPageByTitle(pageTitle);

        publishPage();

        goToDashBoard();
    });

    it('Eliminar una page', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();

        loginToGhost();
        goToPages();
        createBasicPage(pageTitle, pageText);

        goToDashBoard();

        //Tags
        cy.get('ol').find('li').then((pages) => {
            expect(pages.length, 'Initial tags').to.be.gt(0);

            //Eliminar tag
            selectCreatedPageByTitle(pageTitle);
            cy.get('[title="Settings"]').click();
            cy.get(' Delete ').click();
            cy.get('Delete').click();

            cy.get('ol').find('li').then((newPages) => {
                expect(newPages.length, 'Initial tags').to.be.gt(pages.length);
            });
        });
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
        publishPage();
    }

    function publishPage() {
        //Publish page
        cy.contains("Publish").click();
        cy.get('Footer').contains("Publish").click();
        cy.get('Footer').contains("Update").should("be.visible");
    }

    function selectCreatedPageByTitle(pageTitle) {
        cy.contains(pageTitle).click();
    }

    function updatePageTitle(pageTitle, clearing = true) {
        if (clearing) {
            cy.get('[placeholder="Page Title"]').clear()
        }
        cy.get('[placeholder="Page Title"]').type(pageTitle);
    }

    function updatePageText(pageText) {
        cy.get('[data-kg-has-link-toolbar="true"]').first().clear()
        cy.get('[data-kg-has-link-toolbar="true"]').first().type(pageText);
    }
})