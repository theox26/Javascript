function clearText()
{
   
	for(i=0,j=arguments.length;i<j;i++)
	{
	for(a=1;a<6;a++){
		document.getElementById("FIELD_" + FieldIDs[arguments[i] + a]).value = "";
   }
   }
   FormUpdatePreview ();
   PFSF_ShowHideConditionalFields();
}

function splitText(self,fieldInfo)
{
   var str= document.getElementById(self).value;
   var arry= str.split(".");
   var a,i=0;
	while (i<=4)
	{
	a=i+1;
		if(arry[i]){
		document.getElementById("FIELD_" + FieldIDs[fieldInfo + a]).value = arry[i];
		}
		else { 
		document.getElementById("FIELD_" + FieldIDs[fieldInfo + a]).value = "";
		}
	i++;
   }
   FormUpdatePreview ();
   PFSF_ShowHideConditionalFields();
}