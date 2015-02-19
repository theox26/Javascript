
function leavingPage(){
leavingP = 1;
}

function StorefrontValidatorHook() {
var alertMSG = '';

var mailDate = FormGetFieldValue("date");
if (leavingP) {
var promptText = "Are you sure you want your mailing to go to the post office on "+mailDate+"?";

var dateconfirm=confirm(promptText);
if (dateconfirm!==true)
{
alertMSG++;
}
leavingP = 0;
}

if (FormGetFieldValue("body") == compare1){
//alert(compare1);
alertMSG ++;
$("#VALID_VAR_" + FieldIDs["body"]).html("You must edit the body text!").show(); 
}

if (alertMSG){
return false;
}else{
return true;
}

}

$("div.stepAreaHeaderNextPrevControls a").attr("onclick", "leavingPage()");
$("div.stepAreaFooterNextPrevControls a").attr("onclick", "leavingPage()");