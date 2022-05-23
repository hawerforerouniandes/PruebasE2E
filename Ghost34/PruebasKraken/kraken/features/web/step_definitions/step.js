const fs = require('fs');
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage =  require('./pageobjects/login.page');
const PostPage =  require('./pageobjects/post.page');
const TagPage =  require('./pageobjects/tag.page');
const Page =  require('./pageobjects/page.page');

const { faker } = require('@faker-js/faker');
const DataPostFailureTitle = require("./datapool/mock_data_post_failure_title.json");
const DataPost = require("./datapool/mock_data_post.json");
const MetaData = require("./datapool/mock_meta_data.json");

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

When('I click post meta data', async function() {
    return await PostPage.meta_data_open(this.driver).click();
})

When('I enter meta title {kraken-string}', async function (title) {
    return await PostPage.meta_title(this.driver).setValue(title);
});

When('I enter meta description', async function () {
    var texto = faker.lorem.paragraph();
    return await PostPage.meta_description(this.driver).setValue(texto);
});

Then('I enter meta data a priori', async function () {
    var randomInt = getRandomInt(0, MetaData.length);
    var dataTitle = MetaData[randomInt].title;
    var dataDescription = MetaData[randomInt].description;
    await PostPage.meta_title(this.driver).setValue(dataTitle);
    return await PostPage.meta_description(this.driver).setValue(dataDescription);
});

Then('I enter meta data url a priori', async function () {
    var randomInt = getRandomInt(0, MetaData.length);
    var dataTitle = MetaData[randomInt].title;
    var dataDescription = MetaData[randomInt].description;
    var dataUrl = MetaData[randomInt].url;
    await PostPage.meta_title(this.driver).setValue(dataTitle);
    await PostPage.canonical_Url(this.driver).setValue(dataUrl);
    return await PostPage.meta_description(this.driver).setValue(dataDescription);
});

Then('I wait for result post {kraken-string}', async function(validation) {
    return await PostPage.posts_list_item(this.driver, validation).waitForExist({ timeout: 5000 });
});

When('I click pages', async function() {
    return await Page.pages_url(this.url).click();

});

When('I click new page', async function() {
    return await Page.new_page_url(this.driver).click();

});

Then('I wait for {string}', async function(validation) {
    return await Page.aria_expanded_false(this.driver).waitForExist({ timeout: 5000 });
});

Then('I fill title of new page {kraken-string}', async function(title) {
    return await Page.title(this.driver).setValue(title);

});

Then('I fill new article in the new page {kraken-string}', async function(article) {
    await Page.article(this.driver).setValue(article);
    return this.driver.keys("Enter"); 
});

Then('I return to list of pages', async function() {
    return await Page.pages_url(this.driver).click();

});

Then('I wait for result {kraken-string}', async function(validation) {
    return await Page.pages_list_item(this.driver).waitForExist({ timeout: 5000 });
});

Then('I select the list of elements', async function() {
    return await Page.aria_label(this.driver, "Add a card").click();

});

Then('I select the toogle element', async function() {
    return await Page.title_name(this.driver, "Toggle").click();

});

Then('I select the divider element', async function() {
    return await Page.title_name(this.driver, "Divider").click();

});

Then('I select the button element', async function() {
    return await Page.title_name(this.driver, "Button").click();
});

Then('I select the youtube link element', async function() {
    return await Page.title_name(this.driver, "YouTube").click();
});

Then('I select the Gallery element', async function() {
    return await Page.title_name(this.driver, "Gallery").click();

});

Then('I fill the header of toogle element', async function() {
    return await Page.data_placeholder(this.driver, "Toggle header").setValue('ejemplo');

});

Then('I fill the collapsible of toogle element', async function() {
    await Page.data_placeholder(this.driver, "Collapsible content").setValue('persona1');
    return this.driver.keys("Enter"); 

});

Then('I move to the next element', async function() {
    await this.driver.keys("Escape")
    return this.driver.keys("Enter"); 

});

Then('I fill text the button element', async function() {
    return await Page.button_text_input(this.driver).setValue('Ir');

});

Then('I fill text the URL button element', async function() {
    await Page.button_url_input(this.driver).click();
    return Page.title_name(this.driver, "Homepage").click();
});

Then('I select left position button element', async function() {
    await Page.title_name(this.driver, "Left-align content").click();
});

Then('I fill the youtube link {kraken-string}', async function(link) {
    await Page.data_placeholder(this.driver, "Paste URL to add embedded content...").setValue(link);
    return this.driver.keys("Enter"); 

});

Then('I select the settings button', async function() {
    await Page.title_name(this.driver, "Settings").click();

});

Then('I select the publish deplegable', async function() {
    await Page.publishmenu(this.driver).click();

});

Then('I select the publish button', async function() {
    await Page.publishmenu_button(this.driver).click();

});

Then('I verify the URL published', async function() {
    return Page.class_name(this.driver, "ghost-url-preview description ember-view").click();
});

Then('I click in close button', async function() {
    return Page.aria_label(this.driver, "Close").click();
});

Then('I click in preview button', async function() {
    return Page.class_name(this.driver, "post-view-link" ).click();
});

Then('I click in phone icon', async function() {
    return Page.class_name(this.driver, "gh-btn  gh-post-preview-mode")[0].click();
});

Then('I click in twitter icon', async function() {
    return Page.class_name(this.driver, "gh-btn  gh-post-preview-mode")[1].click();
});

Then('I click in back button', async function() {
    return Page.title_name(this.driver, "Close").click();
});
When('I enter title tag {kraken-string}', async function (title) {
    return await TagPage.name(this.driver).setValue(title);
});

When('I click create tag', async function() {
    return await TagPage.create_tag(this.driver).click();
})

When('I click post settings', async function() {
    return await PostPage.post_settings(this.driver).click();
})

When('I click tags', async function() {
    return await TagPage.multiple_input(this.driver).click();
})

When('I click select tag {kraken-string}', async function(tag) {
    return await TagPage.tags_list_option(this.driver, tag).click();
})

When('I click delete post', async function() {
    return await PostPage.delete_button(this.driver).click();
})

When('I click confirm delete post', async function() {
    return await PostPage.delete_confirm(this.driver).click();
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