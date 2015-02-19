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
	var fedex = $('#DIV_38 span').html().split(':');

	$('#DIV_38 span').html(fedex[0]);
}

</script>