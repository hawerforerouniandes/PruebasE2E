import signinPage from '../page-objects/signin-page';
import pagesDashboardPage from '../page-objects/pagesDashboard-page';
import pageEditorPage from '../page-objects/pageEditor-page';
const { faker } = require('@faker-js/faker');

describe('Tests edición de Pages', function() {

    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('site').then((siteData) => {
            signinPage.open(siteData.url)
        })
        cy.get('@adminData')
            .then(adminData => {
                //Login
                signinPage.loginWithAdminData(adminData);
            })
    })

    it('Editar una pagina despues de creada', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();


        pagesDashboardPage.goToPagesDashBoard()
        pagesDashboardPage.goToNewPageEditor();
        pageEditorPage.fillBasicPageAndPublish(pageTitle, pageText);

        pagesDashboardPage.goToPagesDashBoard();

        pagesDashboardPage.selectCreatedPageByTitle(pageTitle);

        const updatedPageTitle = "Updated ".concat(pageTitle);
        pageEditorPage.updatePageTitle(updatedPageTitle);

        pageEditorPage.updatePageAndConfirm();

        pagesDashboardPage.goToPagesDashBoard();

        cy.contains(updatedPageTitle);
    });

})