
<script src="https://js.worksmartsuite.com/all.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.15/themes/smoothness/jquery-ui.css" type="text/css" media="all" />
<script src="https://js.worksmartsuite.com/jquery.cookie.js"></script>
<script>
/*
This shows the PDF images based on the choices in FormFilling.
It also writes those with the quantity chosen to another field for production instructions
There are fields with the same name as the img id attribute that show based on the choices on FormFilling
*/
var pdfChosen = [];
      var cookie = $.cookie('PagesUsed');
        $(document).ready(function(){
          if (cookie){
            var tempArray = cookie.split(" ");
            for(var i = 0; i < tempArray.length; ++i){
              if(tempArray[i]){
                $('#' + tempArray[i]).show();
              	pdfChosen.push(tempArray[i]);
              }
            }
            FormSetFieldValue("pdfsChosen", cookie); //this is the field that drive the show/hide of the Qty selection
PFSF_ShowHideConditionalFields(); //needed to make the previous line take effect
          }
        });
      </script>

<p><b>You Selected:</b></p>
<div style="width:625px;">
<img id='AFresh' style='display:none;' src="custom/CustomerFiles/A Fresh.jpg" width="200" border="1"/>
<img id='HSA' style='display:none;' src="custom/CustomerFiles/HSA.jpg" width="200" border="1"/>
<img id='FSA' style='display:none;' src="custom/CustomerFiles/FSA.jpg" width="200" border="1"/>
<img id='HRA' style='display:none;' src="custom/CustomerFiles/HRA.jpg" width="200" border="1"/>
<img id='Mobile' style='display:none;' src="custom/CustomerFiles/Mobile.jpg" width="200" border="1"/>
</div><br><br>

<script>

function StorefrontEvaluateFieldsHook() {
var flyerQty = 0,
	  flyerInstructions = "";

for(var i=0;i<pdfChosen.length;++i){
	flyerQty += +FormGetFieldValue(pdfChosen[i]);
	flyerInstructions += pdfChosen[i] + ": " + FormGetFieldValue(pdfChosen[i]) + "\n";
}
FormSetFieldValue("flyerInstructions", flyerInstructions); //field for production instructions

if(flyerQty){
	FormSetFieldValue("PrintingQuantityKitPart1", flyerQty); //field used by PF for cost calcs
} else {
	FormSetFieldValue("PrintingQuantityKitPart1", 1);
}
}
</script>