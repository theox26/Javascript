<script src="https://js.worksmartsuite.com/1.8.3.jquery.min.js"></script>
<script src="https://js.worksmartsuite.com/all.js"></script>
<script>
//requires an ID to be set on the needed field in the Address Label Display like this: <div id="ShipCo" ><AddressBook:ShippingCompany></div>
//This fills in a field named CompanyName
var ShipCo = $("#ShipCo").text();

 $(function(){    
//set the Company Name field
		FormSetFieldValue("CompanyName",ShipCo);
});

function StorefrontEvaluateFieldsHook(field){
	ShipCo = $("#ShipCo").text();
	//set the Company Name field
	FormSetFieldValue("CompanyName",ShipCo);
}

</script>