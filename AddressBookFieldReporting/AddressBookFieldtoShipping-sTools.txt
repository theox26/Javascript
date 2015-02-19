<script>
//requires an ID to be set on the needed field in the Address Label Display like this: <div id="ShipCo" ><AddressBook:ShippingCompany></div>
//This fills in a field named CompanyName
var ShipCo = $("#ShipCo").text();

 $(function(){    
//set the Company Name field
		sl("CompanyName").value(ShipCo);
});

sl.onChange(function(field){
	ShipCo = $("#ShipCo").text();
	//set the Company Name field
	sl("CompanyName").value(ShipCo);
});

</script>