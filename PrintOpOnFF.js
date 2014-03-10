/**********
This requires the use of the Print Options on Form Filling extension

both of these would go into an HTML literal field on the form
**********/

/**********
This version puts the price above your bitmap image preview
***********/
<script src="https://js.worksmartsuite.com/1.8.3.jquery.min.js"></script>
<script type="text/javascript">
$(function() {
    //The first thing we do is setup a placeholder div.
    $(".formFilling-preview").prepend("<div id='pricePlaceHolder'></div>");
});

//this is needed to not conflict with the main ajax call on the page
function StorefrontPostAjaxHook(){
	//this prevents the usage of the last price chosen
	$.ajaxSetup({ cache: false });
	//Now we get our price information
	$.get("UserEditPrintingUpdate.aspx", function(data) {
		var text = $(data).text();
		var html = $(text).html();
		//Here we jam it into our placeholder div
		if ($("#pricePlaceHolder").length > 0) {
			$("#pricePlaceHolder").html(html);
		}
	});
}
</script>

/**********
This version puts the price in the form where you put this field
***********/

<div id='pricePlaceHolder'></div>
<script src="https://js.worksmartsuite.com/1.8.3.jquery.min.js"></script>
<script type="text/javascript">
//this is needed to not conflict with the main ajax call on the page
function StorefrontPostAjaxHook(){
	//this prevents the usage of the last price chosen
	$.ajaxSetup({ cache: false });
	//Now we get our price information
	$.get("UserEditPrintingUpdate.aspx", function(data) {
		var text = $(data).text();
		var html = $(text).html();
		//Here we jam it into our placeholder div
		if ($("#pricePlaceHolder").length > 0) {
			$("#pricePlaceHolder").html(html);
		}
	});
}
</script>