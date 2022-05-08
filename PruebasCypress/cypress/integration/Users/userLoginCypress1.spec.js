const requiredAdmin = require('../../fixtures/admin.json')
describe('', function() {

    beforeEach(() => {
        cy.fixture('admin').as('adminData')
    })

    it('cy.fixture() or require - load a fixture', function() {
        // we are inside the "function () { ... }"
        // callback and can use test context object "this"
        // "this.example" was loaded in "beforeEach" function callback
        expect(this.adminData, 'fixture in the test context')
            .to.deep.equal(requiredAdmin)

        // or use "cy.wrap" and "should('deep.equal', ...)" assertion
        cy.wrap(this.adminData)
            .should('deep.equal', requiredAdmin)
    })

    it('Admin data is loaded', function() {
        cy.get('@adminData')
            .then(adminData => { // able to read adminData
                cy.log(adminData)
                expect(adminData.email).to.not.empty;
            })
    })
})