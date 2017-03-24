/*
>>>>>>> SCRIPT: HOW TO PAY CAPITAL ONE ACCOUNTS <<<<<<<<<
Purpose: To automate making a one-time current balance payment on each account with Capital One
*/

// CommonJS currently does not support ES6 import
const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').build();

////////// A: NAVIGATION PHASE /////////////
const toAccountsScript = require('./toAccounts');
const toPaymentsScript = require('./toPayments');

///////////// B: PAYMENT PHASE //////////////
const payAccountScript = require('./payAccount');

// navigate to capital one
driver.get("https://www.capitalone.com/");

// configure driver
driver.manage().timeouts().setScriptTimeout(30000);
driver.manage().window().maximize();

driver.executeAsyncScript(toAccountsScript)
  .then(() => driver.executeAsyncScript(toPaymentsScript))
  .then(() => driver.executeAsyncScript(payAccountScript));

return;


// driver.quit();


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

// driver.get('https://www.capitalone.com/');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();
