const fs = require('fs');
const { Given, When, Then } = require('@cucumber/cucumber');


When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('[name="identification"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('[name="password"]');
    return await element.setValue(password);
});

When('I click login', async function() {
    let element = await this.driver.$('[type="submit"]');
    return await element.click();
})

When('I click posts', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I enter title post {kraken-string}', async function (title) {
    let element = await this.driver.$('textarea');
    return await element.setValue(title);
});

When('I click create post', async function() {
    let element = await this.driver.$('.koenig-editor');
    return await element.click();
})

When('I click post edit {kraken-string}', async function(title) {
    let element = await this.driver.$('h3='+title);
    return await element.click();
})

When('I click preview', async function() {
    let element = await this.driver.$('.gh-editor-preview-trigger');
    return await element.click();
})

When('I click menu publish', async function() {
    let element = await this.driver.$('.gh-publishmenu.ember-view');
    return await element.click();
})

When('I click publish', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click koenig-editor__editor', async function() {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.click();
})

When('I click koenig-plus-menu-button', async function() {
    let element = await this.driver.$('.koenig-plus-menu-button');
    return await element.click();
})

When('I click youtube', async function() {
    let element = await this.driver.$('[title="YouTube"] > .flex-column > .f8');
    return await element.click();
})

When('I click input url', async function() {
    let element = await this.driver.$('input[name=url]');
    return await element.click();
})

When('I enter url youtube {kraken-string}', async function (url) {
    let element = await this.driver.$('input[name=url]');
    return await element.setValue(url);
});

When('I click view', async function() {
    let element = await this.driver.$('.gh-notification-actions');
    return await element.click();
})

When('I click sign in', async function() {
    let element = await this.driver.$('[type="submit"]');
    return await element.click();

});

When('I click pages', async function() {
    let element = await this.driver.$('[href="#/pages/"]');
    return await element.click();

});

When('I click new page', async function() {
    let element = await this.driver.$('[href="#/editor/page/"]');
    return await element.click();

});

Then('I wait for {string}', async function(validation) {
    let element = await this.driver.$('[class="gh-editor-post-status"]');
    return await element.waitForExist({ timeout: 5000 });
});

Then('I fill title of new page {kraken-string}', async function(title) {
    let element = await this.driver.$('[placeholder="Page title"]');
    return await element.setValue(title);

});

Then('I fill new article in the new page {kraken-string}', async function(article) {
    let element = await this.driver.$('[data-kg="editor"]');
    await element.setValue(article);
    return this.driver.keys("Enter"); 
});

Then('I return to list of pages', async function() {
    let element = await this.driver.$('[href="#/pages/"]');
    return await element.click();

});

Then('I wait for result {kraken-string}', async function(validation) {
    let element = await this.driver.$('h3=' + validation);
    return await element.waitForExist({ timeout: 5000 });
});

Then('I select the list of elements', async function() {
    let element = await this.driver.$('[aria-label="Add a card"]');
    return await element.click();

});

Then('I select the toogle element', async function() {
    let element = await this.driver.$('[title="Toggle"]');
    return await element.click();

});

Then('I select the divider element', async function() {
    let element = await this.driver.$('[title="Divider"]');
    return await element.click();

});

Then('I select the button element', async function() {
    let element = await this.driver.$('[title="Button"]');
    return await element.click();

});

Then('I select the youtube link element', async function() {
    let element = await this.driver.$('[title="YouTube"]');
    return await element.click();

});

Then('I fill the header of toogle element', async function() {
    let element = await this.driver.$('[data-placeholder="Toggle header"]');
    return await element.setValue('ejemplo');

});

Then('I fill the collapsible of toogle element', async function() {
    let element = await this.driver.$('[data-placeholder="Collapsible content"]');
    await element.setValue('persona1');
    return this.driver.keys("Enter"); 

});

Then('I move to the next element', async function() {
    await this.driver.keys("Escape")
    return this.driver.keys("Enter"); 

});

Then('I fill text the button element', async function() {
    let element = await this.driver.$('#button-text-input');
    return await element.setValue('Ir');

});

Then('I fill text the URL button element', async function() {
    let element = await this.driver.$('#button-url-input');
    await element.click();
    let element2 = await this.driver.$('[title="Homepage"]');
    return element2.click();
});

Then('I select left position button element', async function() {
    let element = await this.driver.$('[title="Left-align content"]');
    await element.click();
});

Then('I fill the youtube link {kraken-string}', async function(link) {
    let element = await this.driver.$('[placeholder="Paste URL to add embedded content..."]');
    await element.setValue(link);
    return this.driver.keys("Enter"); 

});

Then('I select the settings button', async function() {
    let element = await this.driver.$('[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]');
    await element.click();

});

Then('I select the publish deplegable', async function() {
    let element = await this.driver.$('[aria-expanded="false"]');
    await element.click();

});

Then('I select the publish button', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    await element.click();

});

Then('I verify the URL published', async function() {
    let element = await this.driver.$('[class="post-view-link"]');
    return element.click();
});

Then('I click in preview button', async function() {
    let element = await this.driver.$('[class="gh-btn gh-editor-preview-trigger"]');
    return element.click();
});

Then('I click in phone icon', async function() {
    let element = await this.driver.$$('[class="gh-btn  gh-post-preview-mode"]');
    return element[0].click();
});

Then('I click in twitter icon', async function() {
    let element = await this.driver.$$('[class="gh-btn  gh-post-preview-mode"]');
    return element[1].click();
});

Then('I click in back button', async function() {
    let element = await this.driver.$('[title="Close"]');
    return element.click();
});
When('I enter title tag {kraken-string}', async function (title) {
    let element = await this.driver.$('input[name=name]');
    return await element.setValue(title);
});

When('I click create tag', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click post settings', async function() {
    let element = await this.driver.$('button.post-settings');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.click();
})

When('I click select tag', async function() {
    let element = await this.driver.$('li=pruebas e2e');
    return await element.click();
})

When('I click delete post', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    return await element.click();
})

When('I click confirm delete post', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
})


When('I take screenshot of step {string} and scenario {string}', async function(step, scenario) {
    return await this.driver.takeScreenshot().then(
        function(image) {
            if (!fs.existsSync(`./regression/${scenario}`)){
                fs.mkdirSync(`./regression/${scenario}`, { recursive: true });
            }
            fs.writeFileSync(`./regression/${scenario}/${step}.png`, image, 'base64');
        }
    );
   
})

