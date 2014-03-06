<table><tr><td colspan=2><b>Sections to Include:</b></td></tr>
<tr>
<td><input type="checkbox" id='01' onclick="toggleChoice('01');" checked><img src="custom/CustomerFiles/gifs/01.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='02' onclick="toggleChoice('02');" checked><img src="custom/CustomerFiles/gifs/02.gif" width="200" border="1"/></td>
</tr> 
<tr>
<td><input type="checkbox" id='03' onclick="toggleChoice('03');" checked><img src="custom/CustomerFiles/gifs/03.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='04' onclick="toggleChoice('04');" checked><img src="custom/CustomerFiles/gifs/04.gif" width="200" border="1"/></td>
</tr>
<tr>
<td><input type="checkbox" id='05' onclick="toggleChoice('05');" checked><img src="custom/CustomerFiles/gifs/05.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='06' onclick="toggleChoice('06');" checked><img src="custom/CustomerFiles/gifs/06.gif" width="200" border="1"/></td>
</tr>
<tr>
<td><input type="checkbox" id='07' onclick="toggleChoice('07');" checked><img src="custom/CustomerFiles/gifs/07.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='08' onclick="toggleChoice('08');" checked><img src="custom/CustomerFiles/gifs/08.gif" width="200" border="1"/></td>
</tr>
<tr>
<td><input type="checkbox" id='09' onclick="toggleChoice('09');" checked><img src="custom/CustomerFiles/gifs/09.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='10' onclick="toggleChoice('10');" checked><img src="custom/CustomerFiles/gifs/10.gif" width="200" border="1"/></td>
</tr>
<tr>
<td><input type="checkbox" id='11' onclick="toggleChoice('11');" checked><img src="custom/CustomerFiles/gifs/11.gif" width="200" border="1"/></td>
<td><input type="checkbox" id='12' onclick="toggleChoice('12');" checked><img src="custom/CustomerFiles/gifs/12.gif" width="200" border="1"/></td>
</tr>
<tr>
<td><input type="checkbox" id='13' onclick="toggleChoice('13');" checked><img src="custom/CustomerFiles/gifs/13.gif" width="200" border="1"/></td>
<td></td>
</tr>
</table>

<script src="https://js.worksmartsuite.com/all.js" type="text/javascript"></script>
<script type="text/javascript">

function toggleChoice(section) {
	var toggleField = document.getElementById("FIELD_" + FieldIDs['page_showhide']);
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

</script>
