import signinPage from '../page-objects/signin-page';
import postEditorPage from '../page-objects/postEditor-page';
import postsDashboardPage from '../page-objects/postsDashboard-page';
import postEditorSettingsPage from '../page-objects/postEditorSettings-page';

const { faker } = require('@faker-js/faker');
describe('Testing negativo crear post', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('postsDataPool').as('postsDataPool')
        cy.fixture('site').then((siteData) => {
            signinPage.open(siteData.url)
        })
        cy.get('@adminData')
            .then(adminData => {
                //Login
                signinPage.loginWithAdminData(adminData);
            })
    })

    it('Crear post con meta data con más de 70 caracteres', () => {
        const metaDataTitle = faker.hacker.phrase();
        postsDashboardPage.goToPostsDashBoard();
        postsDashboardPage.goToNewPostEditor();

        postEditorPage.updatePostTitle(faker.hacker.phrase());
        postEditorPage.updatePostText(faker.hacker.phrase());

        postEditorPage.settingsButtonClick();
        postEditorSettingsPage.selectMetaData();
        postEditorSettingsPage.updateMetaTitle(metaDataTitle);
        postEditorSettingsPage.isWordCountExceded();

        postEditorSettingsPage.selectBackButton();
        postEditorSettingsPage.closeSettingsMenu();
        postEditorPage.publishPage();
    });
})