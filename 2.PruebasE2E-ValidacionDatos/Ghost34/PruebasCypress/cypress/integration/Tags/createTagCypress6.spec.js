import signinPage from '../page-objects/signin-page';
import tagsDashboardPage from '../page-objects/tagsDashboard-page';
import tagEditorPage from '../page-objects/tagEditor-page';

describe('Tests case creación de tags', () => {
    beforeEach(() => {
        cy.fixture('admin').as('adminData')
        cy.fixture('tagsDataPool').as('tagsDataPool')
        cy.fixture('site').then((siteData) => {
            signinPage.open(siteData.url)
        })
        cy.get('@adminData')
            .then(adminData => {
                //Login
                signinPage.loginWithAdminData(adminData);
            })
    })

    it('Crear tag con query', () => {

        //Tags
        tagsDashboardPage.goToTagsDashBoard();
        cy.get('ol').find('li').then((tags) => {
            expect(tags.length, 'Initial tags').to.be.gt(0);

            //Crete tag
            tagsDashboardPage.goToNewTagEditor();
            cy.get('@tagsDataPool')
                .then(tagsDataPool => {
                    tagEditorPage.fillTagFormWith(
                        tagsDataPool.query.selectFromTags2,
                        tagsDataPool.color.valid,
                        tagsDataPool.description.with499Length
                    );
                    tagEditorPage.saveTag();
                    tagsDashboardPage.goToTagsDashBoard();
                });

            cy.get('ol').find('li').then((newTags) => {
                expect(newTags.length, 'After adding tags').to.be.gt(tags.length);
            });
        });
    })
})