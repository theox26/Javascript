<script type="text/javascript">
dataSet = {
         "Code" :["Custom_01", "Custom_02", "Custom_03", "Custom_04", "Custom_05", "Custom_06", "Custom_07", "FDXE_PRIORITYOVERNIGHT", "FDXE_STANDARDOVERNIGHT", "FDXE_INTERNATIONALECONOMY", "FDXG_FEDEXGROUND", "FDXG_GROUNDHOMEDELIVERY", "UPS_01", "UPS_03", "UPS_11"],
         "Name" :["UPS Ground", "UPS Next Day Air", "UPS Overnight", "COBA - Dow Internal Mail", "Internal Delivery", "Styron Shipping Account", "Third Party Shipping Account Number", "FedEx Priority Overnight", "FedEx Standard Overnight", "FedEx International Economy", "FedEx Ground", "FedEx Ground Home Delivery", "UPS Next Day Air", "UPS Ground", "UPS Standard"]
}
function StorefrontEvaluateFieldsHook(field){
  if (field.id == 'FIELD_' + FieldIDs['ShippingDeliveryMethod'])
  {
    var sdMethod = FormGetFieldValue('ShippingDeliveryMethod');
    if(sdMethod){
      for(i=0; i<dataSet.Code.length;i++){
	if(dataSet.Code[i] ==  sdMethod){
	  FormSetFieldValue('ShippingDeliveryMethodName',dataSet.Name[i]);
	  break;
        }
      }
    }
  }

pmshipmethod();
}

function pmshipmethod(){
  var code = FormGetFieldValue("ShippingDeliveryMethod");
  for(i=0;i<dataArray.length;i++){
    if(code == dataArray[i][0]){
      FormSetFieldValue("freight",dataArray[i][1]);
      FormSetFieldValue("pmcarrier",dataArray[i][2]);
      FormSetFieldValue("pmservice",dataArray[i][3]);
    }
  }
}

$(function(){
  $('#'+FormGetField('ShippingDeliveryMethod').id).click(function(){
    StorefrontEvaluateFieldsHook();
  });
});
</script>
