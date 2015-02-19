<div style="width:300px;" ></div>
<script>
function StorefrontEvaluateFieldsHook(field) {
    if( window.FieldIDs && FieldIDs.Promail_Available_PO ){
        if(field.id === "FIELD_"+FieldIDs["PrintingQuantity"]){
            var qty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["PrintingQuantity"]);
            var maxQty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["Promail_Available_PO"]);
            //var qtyValidation = document.getElementById("VALID_VAR_" + FieldIDs["PrintingQuantity"]);
             
            if ( +qty > +maxQty ) {
                var message = "You have chosen more than are currently in inventory; this item will be backordered. There are currently " + maxQty + " in inventory.";
                alert(message);
            }
        }
    }
}
</script>