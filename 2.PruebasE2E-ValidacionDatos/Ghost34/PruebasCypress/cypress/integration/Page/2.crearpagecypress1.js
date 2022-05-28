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

    it('Test login and create new page fill article with very characters', () => {

        cy.fixture('datapool').then((dp)  => {
           
          var title = faker.name.title();
          var article = faker.random.alpha(dp.MaxCharArticle);

          pagesDashboardPage.goToPagesDashBoard();
          pagesDashboardPage.goToNewPageEditor();
          pageEditorPage.FillTitleNewPage(title);
          pageEditorPage.FillTextArticleNewPage(article);
          pageEditorPage.ClickPageBackButton();
          pageEditorPage.ValidateNewPageCreation(title);
       })
    })
  })
