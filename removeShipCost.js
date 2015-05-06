<script>
$(function(){
	$('#'+FormGetField('ShippingDeliveryMethod').id).click(function(){
		StorefrontEvaluateFieldsHook();
	});
	removePrice();
});

function StorefrontEvaluateFieldsHook(field){
	removePrice();
}

function removePrice(){
	//radio button
	$('#DIV_38 span').each(function(){
		$(this).html( $(this).html().split(':')[0] );
	});

	//dropdown
	$('#DIV_38 option').each(function(){
		$(this).html( $(this).html().split(':')[0] );
	});
}

</script>