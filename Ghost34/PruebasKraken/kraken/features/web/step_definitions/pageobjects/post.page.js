
module.exports = class PostPage {

    static editor_pane (_driver) {
        return _driver.$('.gh-koenig-editor-pane');
    }

    static editor_title (_driver) {
        return _driver.$('textarea');
    }

    static posts_list_item (_driver, item) {
        return _driver.$('h3='+item);
    }

    static post_view_link (_driver) {
        return _driver.$('.gh-koenig-editor-pane');
    }

    static publishmenu (_driver) {
        return _driver.$('.gh-publishmenu.ember-view');
    }

    static publish_menu_button (_driver) {
        return _driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    }

    static koenig_editor (_driver) {
        return _driver.$('.koenig-editor__editor');
    }

    static koenig_plus_menu_button (_driver) {
        return _driver.$('.koenig-plus-menu-button');
    }

    static title_YouTube (_driver) {
        return _driver.$('[title="YouTube"] > .flex-column > .f8');
    }

    static notification_actions (_driver) {
        return _driver.$('.gh-notification-actions');
    }

    static input_url (_driver) {
        return _driver.$('input[name=url]');
    }

    static paragraph (_driver) {
        return _driver.$('[data-kg="editor"]');
    }

    static meta_data_open (_driver) {
        return _driver.$('b=Meta data');
    }

    static meta_title (_driver) {
        return _driver.$('input[name=post-setting-meta-title]');
    }


}
