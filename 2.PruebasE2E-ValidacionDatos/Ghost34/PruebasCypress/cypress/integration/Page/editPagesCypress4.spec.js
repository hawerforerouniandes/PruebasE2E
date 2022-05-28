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

    it('Eliminar una page', () => {

        const pageTitle = faker.lorem.sentence();
        const pageText = faker.lorem.paragraphs();

        pagesDashboardPage.goToPagesDashBoard();
        pagesDashboardPage.goToNewPageEditor();
        pageEditorPage.fillBasicPageAndPublish(pageTitle, pageText);

        pagesDashboardPage.goToPagesDashBoard();

        //Pages
        cy.get('ol').find('li').then((pages) => {
            expect(pages.length, 'Initial pages').to.be.gt(0);

            //Eliminar page
            pagesDashboardPage.selectCreatedPageByTitle(pageTitle);
            pageEditorPage.deleteAndConfirm();
        });
    });
})