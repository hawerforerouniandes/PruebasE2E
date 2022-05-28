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

    it('Test login and create new page with maximum characters allowed plus 1 in tag', () => {

      cy.fixture('datapool').then((dp)  => {

        var title = faker.name.title();
        var text = faker.random.alpha(dp.MaxCharTagPage + 1);

        pagesDashboardPage.goToPagesDashBoard();
        pagesDashboardPage.goToNewPageEditor();
        pageEditorPage.FillTitleNewPage(title);
        pageEditorPage.SelectSettingsButton();
        pageEditorPage.ClickTagField();
        pageEditorPage.FillTextTagField(text);
        pageEditorPage.SelectTag();
        pageEditorPage.ClickCloseButton();
        pageEditorPage.SelectPublishDesplegable();
        pageEditorPage.SelectPublishButton();
        pageEditorPage.ClickPageBackButton();
        pageEditorPage.ClickLeaveButton();
        pageEditorPage.ValidateNewPageCreation(title);
      })
    })
  })
