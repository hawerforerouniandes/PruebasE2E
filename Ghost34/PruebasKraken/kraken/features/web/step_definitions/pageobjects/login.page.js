// login.page.js

module.exports = class LoginPage {

    static username (_driver) {
        return _driver.$('[name="identification"]');
    }

    static password (_driver) {
        return _driver.$('[name="password"]');
    }

    static submit (_driver) {
        return _driver.$('[type="submit"]');
    }
}
