//shopping cart need to be set to only show quantity and not allow it to be editable
/*In promail XML add <SellPrice><PrintingField:PerPiece></SellPrice> to the section:
<DocumentLoop>
	<PurchaseOrderItemDetail>

*/

//this is for Print Options step only
<script src="http://js.worksmartsuite.com/1.8.3.jquery.min.js" type="text/javascript"></script>
<script src="https://js.worksmartsuite.com/all.js" type="text/javascript"></script>
<script>
function StorefrontEvaluateFieldsHook(field) {

 //Here we make sure to save the form data in case the dynamic setting isn't enabled
    PFSF_AjaxUpdateForm();
    //Now we get out price information
    $.get("UserEditPrintingUpdate.aspx", function(data) {
        var text = $(data).text();
        var html = $(text).html();
		//this grabs the number for perPiece
		var arry= html.split("$");
		var cost = arry[1].replace(/[^0-9\.]/g,""); // Only grabbing the numbers //
//grab the quantity, do the math and set the field
var quant = FormGetFieldValue("PrintingQuantity");
var perPiece1 = Number(cost) / quant;
var perPiece = (perPiece1).toFixed(4);
FormSetFieldValue("PerPiece",perPiece);
    });
}

function StorefrontValidatorHook() {
//Here we make sure to save the form data in case the dynamic setting isn't enabled
    PFSF_AjaxUpdateForm();
    //Now we get out price information
    $.get("UserEditPrintingUpdate.aspx", function(data) {
        var text = $(data).text();
        var html = $(text).html();
		//this grabs the number for perPiece
		var arry= html.split("$");
		var cost = arry[1].replace(/[^0-9\.]/g,""); // Only grabbing the numbers //
//grab the quantity, do the math and set the field
var quant = FormGetFieldValue("PrintingQuantity");
var perPiece1 = Number(cost) / quant;
var perPiece = (perPiece1).toFixed(4);
FormSetFieldValue("PerPiece",perPiece);
    });
	return true;
}
</script>


//for use with price on form filling step.

<div id='pricePlaceHolder'></div>
<script src="http://js.worksmartsuite.com/1.8.3.jquery.min.js" type="text/javascript"></script>
<script src="https://js.worksmartsuite.com/all.js" type="text/javascript"></script>
<script  type="text/javascript">
//Tie into the StorefrontEvaluateFieldsHook to get our code called after every field update
function StorefrontEvaluateFieldsHook(field) {
   //Here we make sure to save the form data in case the dynamic setting isn't enabled
    PFSF_AjaxUpdateForm();
    //Now we get out price information
    $.get("UserEditPrintingUpdate.aspx", function(data) {
        var text = $(data).text();
        var html = $(text).html();
		 //Here we jam it into out placeholder div
        if ($("#pricePlaceHolder").length > 0) {
            $("#pricePlaceHolder").html(html);
        }
		//this grabs the number for perPiece
		var arry= html.split("$");
		var cost = arry[1].replace(/[^0-9\.]/g,""); // Only grabbing the numbers //
//grab the quantity, do the math and set the field
var quant = FormGetFieldValue("FFQuantity");
var perPiece1 = Number(cost) / quant;
var perPiece = (perPiece1).toFixed(4);
FormSetFieldValue("PerPiece",perPiece);

    });
}

function StorefrontValidatorHook() {
//Here we make sure to save the form data in case the dynamic setting isn't enabled
    PFSF_AjaxUpdateForm();
    //Now we get out price information
    $.get("UserEditPrintingUpdate.aspx", function(data) {
        var text = $(data).text();
        var html = $(text).html();
		//this grabs the number for perPiece
		var arry= html.split("$");
		var cost = arry[1].replace(/[^0-9\.]/g,""); // Only grabbing the numbers //
//grab the quantity, do the math and set the field
var quant = FormGetFieldValue("FFQuantity");
var perPiece1 = Number(cost) / quant;
var perPiece = (perPiece1).toFixed(4);
FormSetFieldValue("PerPiece",perPiece);
    });
	return true;
}
</script>

</script>