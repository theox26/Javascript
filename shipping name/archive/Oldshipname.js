<script src="https://js.worksmartsuite.com/1.8.2.jquery.min.js" type="text/javascript"></script>
<script src="http://js.worksmartsuite.com/all.js"></script>
<script>
ShipArray = new Array();
ShipArray[0] = new Array("UPS_01","");
ShipArray[1] = new Array("UPS_02","");
ShipArray[2] = new Array("UPS_03","");
ShipArray[3] = new Array("UPS_07","");
ShipArray[4] = new Array("UPS_08","");
ShipArray[5] = new Array("UPS_11","");
ShipArray[6] = new Array("UPS_12","");
ShipArray[7] = new Array("UPS_13","");
ShipArray[8] = new Array("UPS_14","");
ShipArray[9] = new Array("UPS_54","");
ShipArray[10] = new Array("UPS_59","");
ShipArray[11] = new Array("UPS_65","");
ShipArray[12] = new Array("FDXE_EUROPEFIRSTINTERNATIONALPRIORITY","");
ShipArray[13] = new Array("FDXE_FEDEX1DAYFREIGHT","");
ShipArray[14] = new Array("FDXE_FEDEX2DAY","");
ShipArray[15] = new Array("FDXE_FEDEX2DAYFREIGHT","");
ShipArray[16] = new Array("FDXE_FEDEX3DAYFREIGHT","");
ShipArray[17] = new Array("FDXE_FEDEXFREIGHT","");
ShipArray[18] = new Array("FDXG_FEDEXGROUND","");
ShipArray[19] = new Array("FDXE_FEDEXINTERNATIONALFREIGHT","");
ShipArray[20] = new Array("FDXE_FIRSTOVERNIGHT","F01","3","4");
ShipArray[21] = new Array("FDXG_GROUNDHOMEDELIVERY","F02","3","2");
ShipArray[22] = new Array("FDXE_INTERNATIONALECONOMY","F69","3","2");
ShipArray[23] = new Array("FDXE_INTERNATIONALECONOMYFREIGHT","F75","3","2");
ShipArray[24] = new Array("FDXE_INTERNATIONALFIRST","F69","3","2");
ShipArray[25] = new Array("FDXG_INTERNATIONALGROUND","F69","3","2");
ShipArray[26] = new Array("FDXE_INTERNATIONALPRIORITY","F69","3","2");
ShipArray[27] = new Array("FDXE_INTERNATIONALPRIORITYFREIGHT","F74","3","4");
ShipArray[28] = new Array("FDXE_PRIORITYOVERNIGHT","F01","3","1");
ShipArray[29] = new Array("FDXE_STANDARDOVERNIGHT","F06","3","3");
ShipArray[30] = new Array("FDXE_SMARTPOST","F14","3","1");
ShipArray[31] = new Array("CUSTOM_01","Custom");
ShipArray[32] = new Array("CUSTOM_02","UPS Ground");
ShipArray[33] = new Array("CUSTOM_03","Fedex");
ShipArray[34] = new Array("CUSTOM_04","");
ShipArray[35] = new Array("CUSTOM_05","");
ShipArray[36] = new Array("CUSTOM_06","");
ShipArray[37] = new Array("CUSTOM_07","");
ShipArray[38] = new Array("CUSTOM_08","");
ShipArray[39] = new Array("CUSTOM_09","");
ShipArray[40] = new Array("CUSTOM_10","");


function shipmethodname(){
var code = FormGetFieldValue("ShippingDeliveryMethod");
for(i=0;i<ShipArray.length;i++){
if(code == ShipArray[i][0]){
FormSetFieldValue("MethodName",ShipArray[i][1]);
}
}
}
$(function(){
$('#'+FormGetField('ShippingDeliveryMethod').id).click(function(){
shipmethodname();
});
});
</script>

