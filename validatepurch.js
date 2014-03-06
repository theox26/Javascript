function StorefrontValidatorHook() {
//alert(FormGetFieldValue("PaymentPurchaseOrderNumber").length);
var tmpPO = FormGetFieldValue("PaymentPurchaseOrderNumber").replace(/[^0-9]/g,""); // Only grabbing the numbers //
var alertMSG = 0;
if( tmpPO.length < 4 || tmpPO.length > 6 ){
alertMSG ++;
//this is standard JavaScript example
document.getElementById("FIELD_" + FieldIDs["PaymentPurchaseOrderNumber"]).style.border = "2px solid red";
document.getElementById("VALID_VAR_" + FieldIDs["PaymentPurchaseOrderNumber"]).style.display = "";
document.getElementById("VALID_VAR_" + FieldIDs["PaymentPurchaseOrderNumber"]).innerHTML = "Please enter a cost center between 4 and 6 digits.";
}

if (alertMSG) {
alert('Please fix the issues highlighted on the page!');
}

var bool = alertMSG ? false : true;
return bool;
}