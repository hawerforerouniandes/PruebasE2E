class PageEditorPage {

    FillTitleNewPage(title){
        cy.get('[class="flex items-center pl4 pr4 f8 nudge-left--1 h9 br2 br--right bg-white"]', { timeout: 5000 }).should('be.visible');
        cy.get('[placeholder="Page Title"]').type(title).type('{enter}');
    }

    FillTextArticleNewPage(text){
        cy.get('[data-kg="editor"]').type(text).type('{enter}', {force: true});
    }

    ClickPageBackButton(){
        cy.screenshot();
        cy.get('[href="#/pages/"]').click({force: true});
    }

    ValidateNewPageCreation(title){
        cy.wait(5000);
        cy.screenshot();
        cy.get('h3', { timeout: 10000 }).contains(title).should('be.visible');
    }

    ValidateNotPageCreation(title){
        cy.wait(5000);
        cy.screenshot();
        cy.get('h3', { timeout: 10000 }).contains(title).should('not.exist');
    }

    SelectListOfElements(){
        cy.get('[aria-label="Add a card"]', { timeout: 5000 }).should('be.visible');
        cy.get('[aria-label="Add a card"]').click();
    }

    SelectToggleElement(){
        cy.wait(2000);
        cy.get('[title="Toggle"]').click();
    }

    SelectDividerElement(){
        cy.wait(2000);
        cy.get('[title="Divider"]').click();
    }

    SelectButtonElement(){
        cy.wait(2000);
        cy.get('[title="Button"]').click();
    }

    SelectYoutubeElement(){
        cy.wait(3000);
        cy.get('[title="YouTube"]').click();
    }

    FillHeaderToogleElement(){
        cy.get('[data-placeholder="Toggle header"]', { timeout: 5000 }).should('be.visible');
        cy.get('[data-placeholder="Toggle header"]').type("ejemplo").type('{enter}');
    }

    FillCollapsibleToogleElement(){
        cy.get('[data-placeholder="Collapsible content"]', { timeout: 5000 }).should('be.visible');
        cy.get('[data-placeholder="Collapsible content"]').type("persona1").type('{enter}');
    }

    MoveToNextElement(){
        cy.get('[class="ember-application gh-body-fullscreen"]').type('{esc}');
        cy.wait(2000);
        cy.get('[class="ember-application gh-body-fullscreen"]').type('{enter}');
    }

    FillTextButtonElement(){
        cy.get('#button-text-input', { timeout: 5000 }).should('be.visible');
        cy.get('#button-text-input').type("Ir");
    }

    FillTextURLButtonElement(){
        cy.get('#button-url-input', { timeout: 5000 }).should('be.visible');
        cy.get('#button-url-input').click();
        cy.wait(2000);
        cy.get('[title="Homepage"]').click();
    }

    SelectLeftPositionButtonElement(){
        cy.wait(2000);
        cy.get('[title="Left-align content"]').click();
    }

    FillYoutubeLink(link){
        cy.wait(2000);
        cy.get('[placeholder="Paste URL to add embedded content..."]').type(link).type('{enter}');
    }

    SelectSettingsButton(){
        cy.wait(2000);
        cy.get('[title="Settings"]').click();
        cy.screenshot();
    }

    SelectPublishDesplegable(){
        cy.wait(2000);
        cy.get('[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click();
        cy.screenshot();
    }
    
    SelectPublishButton(){
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
    }

    VerifyURLPublished(){
        cy.wait(2000);
        cy.get('[class="post-view-link"]').click();
    }

    ClickPreviewButton(){
        cy.wait(2000);
        cy.get('[class="post-view-link"]').click();
        cy.screenshot();
    }

    ClickPhoneIcon(){
        cy.wait(5000);
        cy.get('[class="gh-btn  gh-post-preview-mode"]').each(($el, index, $list) => {
        if(index == 0){
            cy.wrap($el).click();
        }
        });
    }

    ClickTwitterIcon(){
        cy.wait(5000);
        cy.get('[class="gh-btn  gh-post-preview-mode"]').each(($el, index, $list) => {
        if(index == 1){
            cy.wrap($el).click();
        }
        });
    }

    ClickBackButton(){
        cy.screenshot();
        cy.get('[title="Close"]', { timeout: 5000 }).should('be.visible');
        cy.get('[title="Close"]').click();
    }

    ClickLeaveButton(){
        cy.screenshot();
        cy.get('[class="gh-btn gh-btn-red"]', { timeout: 5000 }).should('be.visible');
        cy.get('[class="gh-btn gh-btn-red"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).click();
            }
        });
    }

    FillTextUrlLocalHost(numbers){
        cy.get('[name="post-setting-slug"]', { timeout: 5000 }).should('be.visible');
        cy.get('[name="post-setting-slug"]').click().type(numbers);
    }

    ValidateCompareUrlLocalHost(numbers){
        cy.screenshot();
        cy.get('[class="ghost-url-preview description ember-view"]').contains(numbers);
    }

    ValidateCompareUrlLocalHostNotContain(numbers){
        cy.screenshot();
        cy.get('[class="ghost-url-preview description ember-view"]').should('not.contain', numbers);
    }

    ClickTagField(){
        cy.get('[class="ember-power-select-trigger-multiple-input"]', { timeout: 5000 }).should('be.visible');
        cy.get('[class="ember-power-select-trigger-multiple-input"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).click();
            }
        });
    }

    FillTextTagField(text){
        cy.get('[class="ember-power-select-trigger-multiple-input"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).type(text);
            }
        });
    }

    SelectTag(){
        cy.get('[class="ember-power-select-option"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).click();
            }
        });
    }

    ClickCloseButton(){
        cy.get('[aria-label="Close"]').click();
    }

    ClickFilterStates(){
        cy.wait(10000);
        cy.get('[aria-expanded="false"]').each(($el, index, $list) => {
            if(index == 1){
                cy.wrap($el).click({force: true});
            }
        });
    }

    SelectPagePublished(){
        cy.wait(2000);
        cy.get('[data-option-index="2"]').click({force: true});
    }

    FillExcerptBox(text){
        cy.get('[name="post-setting-custom-excerpt"]', { timeout: 5000 }).should('be.visible');
        cy.get('[name="post-setting-custom-excerpt"]').type(text);
    }

    ValidateWarningVisible(){
        cy.wait(2000);
        cy.get('[class="response"]', { timeout: 5000 }).should('be.visible');
    }

    ClickMenuSettings(){
        cy.wait(2000);
        cy.get('[class="settings-menu-container"]').click({force: true});
    }

    SelectFirstElementList(){
        cy.wait(2000);
        cy.get('[title="Edit this page"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).click({force: true});
            }
        });
    }

    ClickDeleteButton(){
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click({force: true});
    }

    ConfirmDeletePage(){
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    }

    SelectMetaDataOption(){
        cy.wait(2000);
        cy.get('[class="nav-list-item"]').each(($el, index, $list) => {
            if(index == 0){
                cy.wrap($el).click({force: true});
            }
        });
    }

    SelectTwitterOption(){
        cy.wait(2000);
        cy.get('[class="nav-list-item"]').each(($el, index, $list) => {
            if(index == 1){
                cy.wrap($el).click({force: true});
            }
        });
    }

    FillCanonicalURL(text){
        cy.wait(2000);
        cy.get('[name="post-setting-canonicalUrl"]').type(text);
    }

    FillTitleTwitter(text){
        cy.wait(2000);
        cy.get('[name="post-setting-twitter-title"]').type(text);
    }

    FillTwitterDescription(text){
        cy.wait(2000);
        cy.get('[name="post-setting-twitter-description"]').type(text);
    }

}

export default new PageEditorPage();