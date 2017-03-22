/*
>>>>>>> SCRIPT: HOW TO PAY CAPITAL ONE ACCOUNTS <<<<<<<<<
Purpose: To automate making a one-time current balance payment on each account with Capital One
*/

// CommonJS currently does not support ES6 import
require('dotenv').load();
const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').build();
const { PASSWORD, USERNAME } = process.env;

let menuSelectScript = ``;
let loginScript = ``;

// 1) navigate to capital one
driver.get("https://www.capitalone.com/");
// configure driver
driver.manage().timeouts().setScriptTimeout(6000);
driver.manage().window().maximize();

// 2) Find account types menu and select "Credit Cards"
menuSelectScript = menuSelectScript.concat(`
  const menu = angular.element('form#account-log-in-new').scope();
  menu.ctrl.setAccountType('Credit Cards');
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
    login.password = '${PASSWORD}';
    login.$parent.ctrl.creditUsername = '${USERNAME}';
`);

// 5) Sign in:
loginScript = loginScript.concat(`
    signInBtn.trigger('click');
    return 'logged in to Capital One';
  }
`);

// PAGE NAVIGATE to accounts/
driver.executeAsyncScript(menuSelectScript.concat(loginScript));

// driver.quit();

// 6) Find one-time payment link
paymentLink = $('a#my_payments_onetime_link')

// 7) Navigate to one-time payment form
paymentLink[0].click()

// PAGE WILL NAVIGATE to payments/

// 8) Find payment account button **8400
accountPay = angular.element($('button#bridgeButton-0'))

// 8) Navigate to amount of payment form
accountPay[0].click()

// 9) Select type of balance to pay
// balanceToPay = angular.element($('button#currentBalanceBlock'))[0].click()

// 10) Continue to payment review
const cont = angular.element($('button#chooseAmount'))
cont[0].click()

// 11) Submit Payment
submit = angular.element($('button#step2SubmitButton'))
submit[0].click()

// 12) Exit success modal
close = angular.element($('div#modalClose_'))
close[0].click()

// 13) REPEAT 7-10 for other account

// 14) Sign out
logout = angular.element($('a#header_logout_link'))
logout[0].click()

driver.get('https://www.capitalone.com/');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
