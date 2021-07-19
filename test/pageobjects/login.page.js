const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $("#login-button");
  }

  async login(username, password) {
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    await (await this.btnSubmit).click();
  }

  open() {
    return super.open("");
  }
}

module.exports = new LoginPage();
