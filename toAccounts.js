require('dotenv').load();
const { PASSWORD, USERNAME } = process.env;

let menuSelectScript = ``;
let loginScript = ``;

// 2) Find account types menu and select "Credit Cards"
menuSelectScript = menuSelectScript.concat(`
  const menu = angular.element('form#account-log-in-new').scope();
  menu.ctrl.setAccountType('Credit Cards');
  console.log('selected credit cards menu');
`);

// 3) Find username/password model and sign in element:
loginScript = loginScript.concat(`
  window.setTimeout(tryForLogin, 1000);
  function tryForLogin() {
    let login = angular.element('input#login-us-credit-cards-uid').scope();
    let signInBtn = angular.element('button#login-submit-card-us');
`);


// 4) Set login values to my info:
loginScript = loginScript.concat(`
    login.password = "${PASSWORD}";
    login.$parent.ctrl.creditUsername = "${USERNAME}";
`);

// 5) Sign in:
loginScript = loginScript.concat(`
    signInBtn.trigger('click');
    console.log('logged in');
  }
`);

// PAGE NAVIGATE to accounts/
module.exports = menuSelectScript.concat(loginScript);