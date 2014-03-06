//shopping cart need to be set to only show quantity and not allow it to be editable

//this is for Print Options step only

<script src="http://js.worksmartsuite.com/1.8.3.jquery.min.js" type="text/javascript"></script>
<script src="https://js.worksmartsuite.com/all.js" type="text/javascript"></script>
<script>
function StorefrontEvaluateFieldsHook(field) {
	if(field.id == FormGetField("PrintingQuantityA").id){
	var price = FormGetFieldValue("PrintingQuantityA");
	FormSetFieldValue("PrintingQuantity",price);
	} else if(field.id == FormGetField("PrintingQuantityB").id){
	var price = FormGetFieldValue("PrintingQuantityB");
	FormSetFieldValue("PrintingQuantity",price);
	}
}

function StorefrontValidatorHook() {
	var price = FormGetField("PrintingQuantity");
	var price1 = FormGetFieldValue("PrintingQuantityA");
	var price2 = FormGetFieldValue("PrintingQuantityB");
	if(!price1 && !price2){
		alert('Please choose a quantity!');
		return false;
	}
	
	if (!price.value){
		price.value = price1 ? price1 : price2;
	}
	return true;
}
</script>