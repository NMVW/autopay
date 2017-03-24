//>>>>>>>>>> NEXT STEP >>>>>>>>>>>>>>
let routeToPaymentsScript = ``;

// 6) Find one-time payment link + navigate to one-time payment form
routeToPaymentsScript = routeToPaymentsScript.concat(`
  window.setTimeout(tryForPaymentLink, 5000);
  function tryForPaymentLink() {
    let paymentLink = $('a#my_payments_onetime_link');
    paymentLink[0].click();
    console.log('going to payments overview');
  }
`);

// PAGE WILL NAVIGATE to card-app/
module.exports = routeToPaymentsScript;
