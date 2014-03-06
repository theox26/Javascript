<script>
var fieldArray = ["Subhead_Text","Color","WF_Center_Name"];

function StorefrontEvaluateFieldsHook(field) {

var j = fieldArray.length;
for(i=0;i<j;i++){

if (pageInfo != undefined && pageInfo[0] != undefined) {
if(field.id == "FIELD_"+FieldIDs[fieldArray[i]]){
GotoPageN(2);
return false;
}else{
GotoPageN(1);
return false;
}
}
}
}
</script>
