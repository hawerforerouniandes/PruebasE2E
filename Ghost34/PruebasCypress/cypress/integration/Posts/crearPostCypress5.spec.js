import signinPage from '../page-objects/signin-page';
import postEditorPage from '../page-objects/postEditor-page';
import postsDashboardPage from '../page-objects/postsDashboard-page';
const { faker } = require('@faker-js/faker');
describe('Testing positivo crear post', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('contentDataPool').as('contentDataPool')
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

    it('Crear post con video de youtube', () => {
        postsDashboardPage.goToPostsDashBoard();
        postsDashboardPage.goToNewPostEditor();

        cy.get('@postsDataPool')
            .then(postsDataPool => {
                postEditorPage.updatePostTitle(postsDataPool.title.withw256Length);
                postEditorPage.postText.click()
                postEditorPage.addCardClick()
                cy.get('@contentDataPool')
                    .then(contentDataPool => {
                        postEditorPage.addYouTubeVideo(contentDataPool.youTubeLink)
                        postEditorPage.checkIfYouTubeFormDoesNotExist()
                    })
            })
    });
})