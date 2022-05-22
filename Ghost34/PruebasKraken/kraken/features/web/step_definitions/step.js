const fs = require('fs');
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage =  require('./pageobjects/login.page');
const PostPage =  require('./pageobjects/post.page');
const { faker } = require('@faker-js/faker');
const DataPostFailureTitle = require("./datapool/mock_data_post_failure_title.json");
const DataPost = require("./datapool/mock_data_post.json");

When('I login {kraken-string} {kraken-string}', async function (email, password) {
    await LoginPage.username(this.driver).setValue(email);
    await LoginPage.password(this.driver).setValue(password);
    return  await LoginPage.submit(this.driver).click();
});

When('I enter title post {kraken-string}', async function (title) {
    return await PostPage.editor_title(this.driver).setValue(title);
});

When('I enter title post a priori', async function () {
    var dataTitle = DataPost[getRandomInt(0, DataPost.length)].title;
    return await PostPage.editor_title(this.driver).setValue(dataTitle);
});

When('I enter title post failure', async function () {
    var titleFailure = DataPostFailureTitle[1].title;
    return await PostPage.editor_title(this.driver).setValue(titleFailure);
});

When('I enter paragraph post', async function () {
    var texto = faker.lorem.paragraph();
    return await PostPage.paragraph(this.driver).setValue(texto);
});

When('I enter paragraph post a priori', async function () {
    var texto = DataPost[getRandomInt(0, DataPost.length)].paragraph;
    return await PostPage.paragraph(this.driver).setValue(texto);
});

When('I click editor pane post', async function() {
    return await PostPage.editor_pane(this.driver).click();
})

When('I click posts list item {kraken-string}', async function(title) {
    return await PostPage.posts_list_item(this.driver, title).click();
})

When('I click post view link', async function() {
    return await PostPage.post_view_link(this.driver).click();
})

When('I click menu publish', async function() {
    return await PostPage.publishmenu(this.driver).click();
})

When('I click publish button', async function() {
    return await PostPage.publish_menu_button(this.driver).click();
})

When('I click koenig-editor__editor', async function() {
    return await PostPage.koenig_editor(this.driver).click();
})

When('I click koenig-plus-menu-button', async function() {
    return await PostPage.koenig_plus_menu_button(this.driver).click();
})

When('I click youtube', async function() {
    return await PostPage.title_YouTube(this.driver).click();
})

When('I click input url', async function() {
    return await PostPage.input_url(this.driver).click();
})

When('I enter url youtube {kraken-string}', async function (url) {
    return await PostPage.input_url(this.driver).setValue(url);
});

When('I enter url youtube a priori', async function () {
    var dataVideo = DataPost[getRandomInt(0, DataPost.length)].video;
    return await PostPage.input_url(this.driver).setValue(dataVideo);
});

When('I click view', async function() {
    return await PostPage.notification_actions(this.driver).click();
})

Then('I wait for result post {kraken-string}', async function(validation) {
    return await PostPage.posts_list_item(this.driver, validation).waitForExist({ timeout: 5000 });
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
    let element = await this.driver.$('[aria-expanded="false"]');
    return await element.waitForExist({ timeout: 5000 });
});

Then('I fill title of new page {kraken-string}', async function(title) {
    let element = await this.driver.$('[placeholder="Page Title"]');
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

Then('I select the Gallery element', async function() {
    let element = await this.driver.$('[title="Gallery"]');
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
    let element = await this.driver.$('[title="Settings"]');
    await element.click();

});

Then('I select the publish deplegable', async function() {
    let element = await this.driver.$('[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
    await element.click();

});

Then('I select the publish button', async function() {
    let element = await this.driver.$('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    await element.click();

});

Then('I verify the URL published', async function() {
    let element = await this.driver.$('[class="ghost-url-preview description ember-view"]');
    return element.click();
});

Then('I click in close button', async function() {
    let element = await this.driver.$('[aria-label="Close"]');
    return element.click();
});

Then('I click in preview button', async function() {
    let element = await this.driver.$('[class="post-view-link"]');
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

When('I click select tag {kraken-string}', async function(tag) {
    let element = await this.driver.$('li='+tag);
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};