
module.exports = class TagPage {

    static name (_driver) {
        return _driver.$('input[name=name');
    }

    static create_tag (_driver) {
        return _driver.$('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    }

    static multiple_input (_driver) {
        return _driver.$('.ember-power-select-trigger-multiple-input');
    }

    static tags_list_option (_driver, option) {
        return _driver.$('li='+option);
    }

}
