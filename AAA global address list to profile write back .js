<input type='button' name='Apply' value='Apply' onclick='AAA_Address_write();' />
</td></tr></table>
<script>

function AAA_Address_write(){

//Finds the value of the site location dropdown for the selected site ID number and assigns its value to the new variable: site_info_original_values by searching for the field by name in the DOM

var originalV = document.getElementById("FIELD_" +  FieldIDs["AAA_Site_Info"]);
var originalValue = originalV.options[originalV .selectedIndex].value;

var Substring = originalValue.split('/');

//writes over the current value of the indicated profile field (1: Site Name; 2.... etc.) after finding it by name in the DOM by replacing it with the substring pulled from the original site information
document.getElementById("FIELD_"+FieldIDs["AAA_Site_name"]).value = Substring[0] ? Substring[0] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_type"]).value = Substring[1] ? Substring[1] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_budget_center"]).value = Substring[2] ? Substring[2] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_phone"]).value = Substring[3] ? Substring[3] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_site_fax"]).value = Substring[4] ? Substring[4] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfileAddress1"]).value = Substring[5] ? Substring[5] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfileAddress2"]).value = Substring[6] ? Substring[6] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfileCity"]).value = Substring[7] ? Substring[7] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfileState"]).value = Substring[8] ? Substring[8] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfilePostalCode"]).value = Substring[9] ? Substring[9] : "";
document.getElementById("FIELD_"+FieldIDs["UserProfileCountry"]).value = Substring[10] ? Substring[10] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_hours_Mon_Fri"]).value = Substring[11] ? Substring[11] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_hours_Sat"]).value = Substring[12] ? Substring[12] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_hours_Sun"]).value = Substring[13] ? Substring[13] : "";
document.getElementById("FIELD_"+FieldIDs["AAA_Site_hours_Special"]).value = Substring[14] ? Substring[14] : "";

return false;
}
</script>