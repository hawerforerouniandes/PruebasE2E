
module.exports = class Page {

    static pages_url (_driver) {
        return _driver.$('[href="#/pages/"]');
    }

    static new_page_url (_driver) {
        return _driver.$('[href="#/editor/page/"]');
    }

    static aria_expanded_false (_driver) {
        return _driver.$('[aria-expanded="false"]');
    }

    static title (_driver) {
        return _driver.$('[placeholder="Page Title"]');
    }

    static article (_driver) {
        return _driver.$('[data-kg="editor"]');
    }

    static pages_list_item (_driver, item) {
        return _driver.$('h3='+item);
    }

    static aria_label (_driver, label) {
        return _driver.$('[aria-label="'+label+'"]');
    }

    static title_name (_driver, name) {
        return _driver.$('[title="'+name+'"]');
    }

    static data_placeholder (_driver, name) {
        return _driver.$('[placeholder="'+name+'"]');
    }

    static button_text_input (_driver) {
        return _driver.$('#button-text-input');
    }

    static button_url_input (_driver) {
        return _driver.$('#button-url-input');
    }

    static publishmenu (_driver) {
        return _driver.$('[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
    }

    static publishmenu_button (_driver) {
        return _driver.$('[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
    }

    static class_name (_driver, name) {
        return _driver.$('[class="'+name+'"]');
    }

    static aria_label (_driver, name) {
        return _driver.$('[aria-label="'+name+'"]');
    }


}
