//all for changes to JAB on the finish step.

var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
var docID = CallSINIMethod("GetValue", ["SystemProperty", "CurrentUserDocument", user_id]);
var exID = CallSINIMethod("GetValue", ["DocumentProperty", "ExternalID", docID]);
//grab last 5 of docID and append the variable Event Name to end.
var ID = (exID.substring(exID.length-5,exID.length));



$(document).ready(function(){
	var currentName = document.getElementById('ctl00_ctl00_ContentPlaceHolderBody_StepArea1_ContentPlaceHolderStepArea_DocDescription_box').value;
	var finalName = currentName.substring(7);
	var finalID = (ID+" - "+finalName);

	//This changes the ID: to last 5 of the var ID.
	$("#ctl00_ctl00_ContentPlaceHolderBody_StepArea1_ContentPlaceHolderStepArea_DocID_text").html(ID);
	//This changes the Description field to the var finalID.
	$('td.fieldCell input').attr("value",finalID);		
});
	