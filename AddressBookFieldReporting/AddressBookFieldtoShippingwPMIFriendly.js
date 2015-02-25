<script src="https://js.worksmartsuite.com/1.8.3.jquery.min.js"></script>
<script src="https://js.worksmartsuite.com/all.js"></script>
<script>
//requires an ID to be set on the needed field in the Address Label Display like this: <div id="ShipCo" ><AddressBook:ShippingCompany></div>
//This fills in a field named CompanyName
var ShipCo = $("#ShipCo").text();

dataSet = {
         "Code" :["Custom_01", "Custom_02", "Custom_03", "Custom_04", "Custom_05", "Custom_06"],
         "Name" :["Third Party UPS Next Day Early AM", "Third Party UPS Worldwide Expedited", "Third Party UPS Next Day Air", "Third Party UPS 3-Day Select", "Third Party UPS Worldwide Express", "Third Party UPS Ground"]
}

dataArray = new Array();
dataArray[0] = new Array("Custom_01","U60","1","4"); //Next Day Air Early AM
dataArray[1] = new Array("Custom_02","U54","1","4"); //Worldwide Expedited
dataArray[2] = new Array("Custom_03","U01","1","4"); //Next Day Air
dataArray[3] = new Array("Custom_04","U21","1","7"); //3-Day Select
dataArray[4] = new Array("Custom_05","U49","1","6"); //Worldwide Express
dataArray[5] = new Array("Custom_06","U11","1","2"); //Ground

 $(function(){    
//set the Company Name field
		FormSetFieldValue("CompanyName",ShipCo);
		$('#'+FormGetField('ShippingDeliveryMethod').id).click(function(){
StreamlineEvaluateFieldsHook();
});
});

function StorefrontEvaluateFieldsHook(field){
	pmshipmethod();
	ShipCo = $("#ShipCo").text();
	//set the Company Name field
	FormSetFieldValue("CompanyName",ShipCo);
	if (field.id == 'FIELD_' + FieldIDs['ShippingDeliveryMethod'])
	{
	var sdMethod = FormGetFieldValue('ShippingDeliveryMethod');
	if(sdMethod){
	for(i=0; i<dataSet.Code.length;i++){
		if(dataSet.Code[i] ==  sdMethod){
			FormSetFieldValue('ShippingDeliveryMethodName',dataSet.Name[i]);
        	  break;
        }
      }
    }
  }
}

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

</script>