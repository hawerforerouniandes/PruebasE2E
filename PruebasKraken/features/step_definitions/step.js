const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click login', async function() {
    let element = await this.driver.$('#ember12');
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
    let element = await this.driver.$('.gh-koenig-editor-pane');
    return await element.click();
})
When('I click post edit', async function() {
    let element = await this.driver.$("h3[aria-label='Nuevo post']");
    return await element.click();
})


