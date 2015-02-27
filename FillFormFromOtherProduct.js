<script>

var fillForm = function() {
//takes information from other bio in cart and fills in this product's form.
//the bio product IDs are the same with an added 'e' in the electronic version 
//i.e. 234260 - 234260e

var otherProdCode = "",
    loopPID = "",
    loopProdCode = "",
    tempValue = "";

    // get the user id
    var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
    //This gets the current transaction ID. It may differ from the Doc ID
    var docID = CallSINIMethod("GetValue", ["SystemProperty", "CurrentUserDocument", user_id]);
    //this is the products name in the system
    var currProdID = CallSINIMethod("GetValue", ["DocumentProperty", "ProductID", docID]);
    //var prodSKU =  CallSINIMethod("GetValue", ["ProductField", "PRODUCT_SKU", currProdID]);

    //this returns the product code from the product settings
    var prodCode = CallSINIMethod("GetValue", ["ProductProperty", "ProductCode", currProdID]);

    //convert to the ID needed by removing the last letter (in this case 'e')
    var matchID = prodCode.slice(0,-1);

	// get all documents in Cart as an array
    var cart = CallSINIMethod("GetListValue", ["UserListProperty", "DocumentsInShoppingCart", user_id]);
	//Loop through Cart

    //TODO change to product Code
    for (var i = 0, j = cart.length; i < j; i++) {
        // Get name of each item
        loopPID = CallSINIMethod("GetValue", ["DocumentProperty", "ProductID", cart[i] ]);

        loopProdCode = CallSINIMethod("GetValue", ["ProductProperty", "ProductCode", loopPID]);
        //this will catch the first one in the cart. May need to do something else if they have more than one
        if(loopProdCode === matchID){
            otherProdCode = loopProdCode;
            var otherDocID = cart[i];
            break;
        }
    }
    
	//if none match then do nothing. If it does, then fill in the form and set fields to read only.	
    if(otherProdCode){
        for(var fieldName in FieldIDs){
            //this might take a really long time to call all of these
            //using a cookie or one field with JSON might be better
            tempValue = CallSINIMethod("GetValue", ["VariableValue", fieldName, otherDocID]) || "";
            sl(fieldName).value( tempValue ).readOnly();
        }
    }


}

$(function () {
    fillForm();
});
</script>