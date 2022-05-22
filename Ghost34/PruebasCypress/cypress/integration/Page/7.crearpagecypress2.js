import signinPage from './PageObjects/signin-page';
import pagesDashboardPage from './PageObjects/pagesDashboard-page';
import pageEditorPage from './PageObjects/pageEditor-page';
const { faker } = require('@faker-js/faker');

describe('Testing Ghost application Create new Page with three elements', () => {

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

    it('Test login and create new page with maximum characters allowed in twitter optiones for title', () => {

      cy.fixture('datapool').then((dp)  => {

        var title = faker.name.title();
        var text = faker.random.alpha(dp.MaxTwitterTitle);

        pagesDashboardPage.goToPagesDashBoard();
        pagesDashboardPage.goToNewPageEditor();
        pageEditorPage.FillTitleNewPage(title);
        pageEditorPage.SelectSettingsButton();
        pageEditorPage.SelectTwitterOption();
        pageEditorPage.FillTitleTwitter(text);
        pageEditorPage.ClickMenuSettings();
        pageEditorPage.ClickPageBackButton();
        pageEditorPage.ValidateNewPageCreation(title);
    })
  })
})
