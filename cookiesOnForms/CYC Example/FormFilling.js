<script src="https://js.worksmartsuite.com/all.js"></script>
<link rel="stylesheet" href="https://js.worksmartsuite.com/1.8.15.jqueryui.css" type="text/css" media="all" />
<script src="https://js.worksmartsuite.com/1.8.2.jquery.min.js" ></script>
<script src="https://js.worksmartsuite.com/1.8.14.jquery-ui.min.js" ></script>
<script src="https://js.worksmartsuite.com/jquery.cookie.js"></script>
<script type="text/javascript">
//this is set to show the selected checkboxes (which write a value to a field) on the options step
//it also remembers the selections for the user if they leave then return from options
function toggleChoice(section) {
 var toggleField = document.getElementById("FIELD_" + FieldIDs['SellSheet']);
 var boxChecked = document.getElementById(section);
 if (boxChecked.checked) {
         toggleField.value += section + " ";
   }
   else {
   var tempArry = toggleField.value.split(' ');
   for (var i=0;i < tempArry.length;i++) {
    if(tempArry[i] == section) {
     tempArry[i] = '';
    }
   }
   toggleField.value = tempArry.join(' ');
   }
   
 FormUpdatePreview ();
 PFSF_ShowHideConditionalFields();
}

function resetChecks(){
  var toggleField = document.getElementById("FIELD_" + FieldIDs['SellSheet']);
  var allDocs = ['AFresh','HSA','FSA','HRA','Mobile'];
  if(toggleField.value){
    var tempArry = toggleField.value.split(' ');
    for (var i=0;i < allDocs.length;i++) {
        var matchVal = 0;
         for(var j = 0; j < tempArry.length; j++){
          if(tempArry[j] == allDocs[i]){
            matchVal++;
          }  
        if(matchVal){
          document.getElementById(allDocs[i]).checked = true;
         } else { 
          document.getElementById(allDocs[i]).checked = false;
          }
        }
    }
  }
}

//onLoad
$(function(){
formatPhone(FormGetField("Phone"),1);
resetChecks();
});
//onChange
function StorefrontEvaluateFieldsHook(field) {
if(field){
if(field.id == FormGetField("Phone").id){
formatPhone(field,1);
}
}
}

function setCookie(){
		var pagesUsed = FormGetFieldValue('SellSheet');
		$.cookie('PagesUsed', pagesUsed, { expires: 7, path: '/'});
	}

	function StorefrontValidatorHook() {
		setCookie();
		//other code can go here too
		return true;
	}

</script>


<table><tr><td colspan=2><b>Sections to Include:</b></td></tr>
<tr>
<td><input type="checkbox" id='AFresh' onclick="toggleChoice('AFresh');" checked><img src="custom/CustomerFiles/A Fresh.jpg" width="200" border="1"/></td>
<td><input type="checkbox" id='HSA' onclick="toggleChoice('HSA');" ><img src="custom/CustomerFiles/HSA.jpg" width="200" border="1"/></td>
<td><input type="checkbox" id='FSA' onclick="toggleChoice('FSA');" ><img src="custom/CustomerFiles/FSA.jpg" width="200" border="1"/></td>
</tr> 
<tr>
<td><input type="checkbox" id='HRA' onclick="toggleChoice('HRA');" ><img src="custom/CustomerFiles/HRA.jpg" width="200" border="1"/></td>
<td><input type="checkbox" id='Mobile' onclick="toggleChoice('Mobile');" ><img src="custom/CustomerFiles/Mobile.jpg" width="200" border="1"/></td>
<td></td>
</tr>
</table>