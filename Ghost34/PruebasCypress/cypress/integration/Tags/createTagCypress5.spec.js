import signinPage from '../page-objects/signin-page';
import tagsDashboardPage from '../page-objects/tagsDashboard-page';
import tagEditorPage from '../page-objects/tagEditor-page';
const { faker } = require('@faker-js/faker');

describe('Tests case creación de tags', () => {
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

    it('Crear Tag with wrong color', () => {

        const tagColor = faker.internet.color();
        const testDescription = faker.lorem.paragraph();

        //Tags
        tagsDashboardPage.goToTagsDashBoard();
        cy.get('ol').find('li').then((tags) => {
            expect(tags.length, 'Initial tags').to.be.gt(0);

            //Crete tag
            tagsDashboardPage.goToNewTagEditor();
            tagEditorPage.fillTagFormWith("Hello tag", tagColor, testDescription);
            tagEditorPage.saveTag();

            cy.contains('Retry').should('be.visible');
        });
    })
})