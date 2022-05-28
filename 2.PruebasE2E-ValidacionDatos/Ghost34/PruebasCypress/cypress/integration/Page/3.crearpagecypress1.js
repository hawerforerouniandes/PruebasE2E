import signinPage from './PageObjects/signin-page';
import pagesDashboardPage from './PageObjects/pagesDashboard-page';
import pageEditorPage from './PageObjects/pageEditor-page';
const { faker } = require('@faker-js/faker');

describe('Testing Ghost application Create new Page', () => {
  
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

    it('Test login and create new page with minimum characters allowed in localhost', () => {

        cy.fixture('datapool').then((dp)  => {

          var title = faker.name.title();
          var numbers = faker.random.numeric(dp.MinCharUrllocalHost);

          pagesDashboardPage.goToPagesDashBoard();
          pagesDashboardPage.goToNewPageEditor();
          pageEditorPage.FillTitleNewPage(title);
          pageEditorPage.SelectSettingsButton();
          pageEditorPage.FillTextUrlLocalHost(numbers);
          pageEditorPage.ClickTagField();
          pageEditorPage.ValidateCompareUrlLocalHost(numbers);
          pageEditorPage.ClickPageBackButton();
          pageEditorPage.ValidateNewPageCreation(title);
       })
    })
  })
