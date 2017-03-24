let payFirstAccountScript = ``;

// 7) Find and navigate to **8400 account to pay with outstanding "current balance"
payFirstAccountScript = payFirstAccountScript.concat(`
  // PAY THIS CARD needs to load from new page
  window.setTimeout(goToPaymentForm, 4000);
  function goToPaymentForm() {
    let firstAccountPayBtn = angular.element($('button#bridgeButton-0'));
    firstAccountPayBtn[0].click();
    console.log('go to first account payment form');
  }
`);

// 8) Select type of balance to pay
payFirstAccountScript = payFirstAccountScript.concat(`
  // MODAL PAYMENT FORM will POPUP
  window.setTimeout(selectBalance, 1000);
  function selectBalance() {
    let balanceToPay = angular.element($('button#currentBalanceBlock'))[0].click();
`);

// 9) Continue to payment review
payFirstAccountScript = payFirstAccountScript.concat(`
    let cont = angular.element($('button#chooseAmount'));
    cont[0].click();
    console.log('continuing with current balance as payment');
  }
`);

module.exports = payFirstAccountScript;
