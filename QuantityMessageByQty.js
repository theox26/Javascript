<div id="QuantityMessage" style="width:300px;display:none;" >Please allow 3 days plus shipping time.</div>
<script>
function StorefrontEvaluateFieldsHook() {
    var qty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["PrintingQuantity"]),
        qtyValidation = document.getElementById("QuantityMessage");
 
    if ( +qty > 1999 ) {
        qtyValidation.style.display = "";
        qtyValidation.innerHTML = "Please allow 5 days for shipping time.";
    } else {
        qtyValidation.style.display = "";
        qtyValidation.innerHTML = "Please allow 3 days plus shipping time.";
    }
}
</script>