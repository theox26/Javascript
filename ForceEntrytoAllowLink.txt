<script type="text/javascript" src="JSINI.js"></script>
<script type="text/javascript">
function notifyUser(){
	alert("You must enter your email before leaving this page");
}
/* The link to use
href="http://www.blurb.com/yearbook-photo-books" target="_blank"

default button code
<a id='blurblink' href='javascript:StorefrontValidatorHook();'><img src="Custom/CustomerFiles/YearbookButton.jpg" width="124" height="47" border="0" /></a>
*/	
function StorefrontEvaluateFieldsHook(field){
	if (field.id == "FIELD_" + FieldIDs["blurbEmail"]){
		if(field.value) {
		//set the profile field to the entered email
			var userEmail = field.value;
			var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
			var userProfileField = CallSINIMethod("SetValue", ["UserField", "blurbEmail", user_id, userEmail]);
		//activate the link
			document.getElementById("VALID_VAR_" + FieldIDs["blurbEmail"]).style.display = "none";
			var blurbLink = document.getElementById("blurblink");
			blurbLink.href = "http://www.blurb.com/yearbook-photo-books";
			blurbLink.target = "_blank";
		} 
	}
}

function StorefrontValidatorHook() {
var alertMSG = 0;
var emailFieldVar = document.getElementById("VALID_VAR_" + FieldIDs["blurbEmail"]);
var emailField = document.getElementById("FIELD_" + FieldIDs["blurbEmail"]);
//possibly use regex to verify email better than just empty
if(emailField.value){
	//set the profile field to the entered email
	var userEmail = emailField.value;
	var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
	var userProfileField = CallSINIMethod("SetValue", ["UserField", "blurbEmail", user_id, userEmail]);
	emailFieldVar.style.display = "none";
	window.open("http://www.blurb.com/yearbook-photo-books","_blank");
}
else{
	alertMSG++;
	emailFieldVar.style.display = "";
	emailFieldVar.innerHTML = "Please enter a valid email address.";
	notifyUser();
}
//this page has no nav buttons or pdf so no return is needed. It actually breaks the process if done
//var bool = alertMSG ? false : true;
//return bool;
}
</script>

