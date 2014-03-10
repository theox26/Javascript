<script type="text/javascript" src="jSINI.js"></script>
<script src="https://js.worksmartsuite.com/all.js" type="text/javascript"></script>
<script>

//get the chosen ship field values
var user_ID = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID",null]);
var orderId = CallSINIMethod("GetValue", ["SystemProperty", "PendingOrder",user_ID]);
var shipmentId = CallSINIMethod("GetListValue",["OrderListProperty", "Shipments", orderId]);

var firstName = CallSINIMethod("GetValue", ["ShipmentField", "ShippingFirstName",shipmentId[0]]);
var lastName = CallSINIMethod("GetValue", ["ShipmentField", "ShippingLastName",shipmentId[0]]);
var address1 = CallSINIMethod("GetValue", ["ShipmentField", "ShippingAddress1",shipmentId[0]]);
var address2 = CallSINIMethod("GetValue", ["ShipmentField", "ShippingAddress2",shipmentId[0]]);
var shipCity = CallSINIMethod("GetValue", ["ShipmentField", "ShippingCity",shipmentId[0]]);
var shipCountry = CallSINIMethod("GetValue", ["ShipmentField", "ShippingCountry",shipmentId[0]]);
var shipState = CallSINIMethod("GetValue", ["ShipmentField", "ShippingState",shipmentId[0]]);
var shipZip = CallSINIMethod("GetValue", ["ShipmentField", "ShippingPostalCode",shipmentId[0]]);

var dFname = FormGetFieldValue("PaymentFirstName");
var dLname = FormGetFieldValue("PaymentLastName");
var dAdd1 = FormGetFieldValue("PaymentAddress1");
var dAdd2 = FormGetFieldValue("PaymentAddress2");
var dCity = FormGetFieldValue("PaymentCity");
var dCountry = FormGetFieldValue("PaymentCountry");
var dState = FormGetFieldValue("PaymentState");
var dZip = FormGetFieldValue("PaymentPostalCode");


function StorefrontEvaluateFieldsHook(field){

//set the values if they chose to

var copyShip = FormGetField('CopyShipping');
if (field.id == copyShip.id){
	if (copyShip.checked)
	{
	FormSetFieldValue("PaymentFirstName",firstName);
	FormSetFieldValue("PaymentLastName",lastName);
	FormSetFieldValue("PaymentAddress1",address1);
	FormSetFieldValue("PaymentAddress2",address2);
	FormSetFieldValue("PaymentCity",shipCity);
	FormSetFieldValue("PaymentCountry",shipCountry);
	FormSetFieldValue("PaymentState",shipState);
	FormSetFieldValue("PaymentPostalCode",shipZip);
	}
	else {
	FormSetFieldValue("PaymentFirstName",dFname);
	FormSetFieldValue("PaymentLastName",dLname);
	FormSetFieldValue("PaymentAddress1",dAdd1);
	FormSetFieldValue("PaymentAddress2",dAdd2);
	FormSetFieldValue("PaymentCity",dCity);
	FormSetFieldValue("PaymentCountry",dCountry);
	FormSetFieldValue("PaymentState",dState);
	FormSetFieldValue("PaymentPostalCode",dZip);
	}
}
//alert('User ID: '+ user_ID + '\nOrder ID: '+ orderId + '\nShipmentID: '+ shipmentId + '\nLast Name: '+lastName);
}
</script>
pp460





