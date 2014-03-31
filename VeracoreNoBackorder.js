<div style="width:300px;" ></div>
<script>
function StorefrontValidatorHook() {
    var qty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["PrintingQuantity"]);
    var maxQty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["Promail_Available_PO"]);
    var qtyValidation = document.getElementById("VALID_VAR_" + FieldIDs["PrintingQuantity"]);
 
    if ( +qty > +maxQty ) {
        qtyValidation.style.display = "";
        qtyValidation.innerHTML = "The quantity must be less than available inventory. There are currently " + maxQty + " in inventory.";
        return false;
    } else if (qty > 500) {
        qtyValidation.style.display = "";
        qtyValidation.innerHTML = "The quantity must be less than 500.";
        return false;
    } else {
        return true;
    }
}
</script>