<div id="backorderWarning">
    <p>
        The selected item does not have sufficient inventory in stock to complete your order.  The current inventory is 
        <span id="VcQty" class="boQty" >0</span>.  If you wish to proceed, the item will be placed on 
        <span class="boBold" >BACKORDER</span>
         and will be fulfilled once the item is back in stock.
    </p>
</div>
<style>
#backorderWarning{
    position: absolute;
    width: 450px;
    display: none;
    z-index: 20;
    top: 300px;
    left: 500px;
    padding: 20px;
    border: 7px solid #9F000F;
}

#backorderWarning p{
    font-size: 1.5em;
}

.boBold{
    font-weight: bold;
    border-bottom: 1px solid #000;
}

.boQty{
    font-weight: bold;
}

</style>
<script>
function StorefrontEvaluateFieldsHook(field) {
    if( window.FieldIDs && FieldIDs.Promail_Available_PO ){
        var printFieldID = "FIELD_"+FieldIDs["PrintingQuantity"];
        if(field.id === printFieldID){
            var qty = PFSF_GetFieldValueByName(printFieldID),
                maxQty = PFSF_GetFieldValueByName("FIELD_"+FieldIDs["Promail_Available_PO"]),
                backorderDiv = document.getElementById("backorderWarning"),
                VcQty = document.getElementById("VcQty"),
                topPosition = $("td.areaComment").position().top + $("td.areaComment").outerHeight(true) + 20,
                leftPosition = $("#" + printFieldID).position().left +  $("#" + printFieldID).outerWidth(true) + 70;
             
            if ( +qty > +maxQty ) {
                VcQty.innerHTML = maxQty;
                backorderDiv.style.display = "block";
                backorderDiv.style.top = topPosition + "px";
                backorderDiv.style.left = leftPosition + "px";
            } else {
                backorderDiv.style.display = "none";
            }
        }
    }
}
</script>