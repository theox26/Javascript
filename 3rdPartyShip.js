var repeated = 0;
var shipRetry;
function StorefrontEvaluateFieldsHook(field){
//3rd party ship remove prices
toggleShipOptions();
//shipRetry = setInterval(function(){setShip3rdParty()},1000);
//promail advanced writeback
pmshipmethod();
}

/*function StorefrontValidatorHook(){
var shipRetry = setInterval(function(){setShip3rdParty()},1000);
return true;
}
*/
//this allows the promail advanced writeback to still work
function pmshipmethod(){
	var code = FormGetFieldValue("ShippingDeliveryMethod");
	for(i=0;i<dataArray.length;i++){
		if(code == dataArray[i][0]){
			FormSetFieldValue("freight",dataArray[i][1]);
			FormSetFieldValue("pmcarrier",dataArray[i][2]);
			FormSetFieldValue("pmservice",dataArray[i][3]);
		}
	}	
}

function toggleShipOptions() {
var international = 0;
var test1 = FormGetFieldValue("Fedex3rdParty");
var AllOptions = document.getElementById("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]);

for(var i = 0; i < theForm.FIELD_38.length; i++) {
	if (theForm.FIELD_38[i].value == "FDXE_INTERNATIONALPRIORITY")
	{
	international++;
	}
}

var ShipCountry = $("#ShipCountry").text();
if (ShipCountry != "US")
	{
	international++;
	}

	if (test1 && international) {
	/* these do not work in IE
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option").hide();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_01']").show();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_06']").show();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_05']").show();*/
	//using radio buttons and vanilla js so it works in IE and all others
	for(var i = 0; i < theForm.FIELD_38.length; i++) {
		if (theForm.FIELD_38[i].value == "Custom_01" || theForm.FIELD_38[i].value == "Custom_05" || theForm.FIELD_38[i].value == "Custom_06")
		{
		theForm.FIELD_38[i].parentNode.style.display = "block";
		}
		else {
		theForm.FIELD_38[i].parentNode.style.display = "none";
		}
	}
	
	}
	else if (international) {
	//using radio buttons and vanilla js so it works in IE and all others
	for(var i = 0; i < theForm.FIELD_38.length; i++) {
		if (theForm.FIELD_38[i].value == "Custom_02" || theForm.FIELD_38[i].value == "Custom_03" || theForm.FIELD_38[i].value == "Custom_04" || theForm.FIELD_38[i].value == "Custom_05" || theForm.FIELD_38[i].value == "Custom_06" || theForm.FIELD_38[i].value == "Custom_07" || theForm.FIELD_38[i].value == "Custom_08")
		{
		theForm.FIELD_38[i].parentNode.style.display = "none";
		}
		else {
		theForm.FIELD_38[i].parentNode.style.display = "block";
		}
	}
	
	}
	
	else if (test1) {
	/*$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option").hide();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value^='Custom']").show();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_06']").hide();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_05']").hide();*/
	for(var i = 0; i < theForm.FIELD_38.length; i++) {
	if (theForm.FIELD_38[i].value == "Custom_01" || theForm.FIELD_38[i].value == "Custom_02" || theForm.FIELD_38[i].value == "Custom_03" || theForm.FIELD_38[i].value == "Custom_04" || theForm.FIELD_38[i].value == "Custom_07" || theForm.FIELD_38[i].value == "Custom_08")
	{
	theForm.FIELD_38[i].parentNode.style.display = "block";
	}
	else {
	theForm.FIELD_38[i].parentNode.style.display = "none";
	}
}
	
	}
	else {
	/*$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option").show();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value^='Custom']").hide();
	$("#FIELD_"+FieldIDs["ShippingDeliveryMethod"]+" option[value='Custom_01']").show();*/
	
		for(var i = 0; i < theForm.FIELD_38.length; i++) {
			if (theForm.FIELD_38[i].value == "Custom_02" || theForm.FIELD_38[i].value == "Custom_03" || theForm.FIELD_38[i].value == "Custom_04" || theForm.FIELD_38[i].value == "Custom_05" || theForm.FIELD_38[i].value == "Custom_06" || theForm.FIELD_38[i].value == "Custom_07" || theForm.FIELD_38[i].value == "Custom_08")
			{
			theForm.FIELD_38[i].parentNode.style.display = "none";
			}
			else {
			theForm.FIELD_38[i].parentNode.style.display = "block";
			}
		}
	}
}
//this is no longer called
function setShip3rdParty() {
var loading = document.getElementById("StepArea_UpdateProgress2");
repeated++;
//alert(repeated);
	if (loading.style.display == "block")
	{
	//set the ship options
	toggleShipOptions();
	}
	else
	{
	//set the ship options
	toggleShipOptions();
	alert(repeated);
	clearInterval(shipRetry);
	}
}

$(function(){
$('#'+FormGetField('ShippingDeliveryMethod').id).click(function(){
StorefrontEvaluateFieldsHook();
});
toggleShipOptions();
});
 