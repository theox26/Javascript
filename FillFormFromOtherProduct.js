<script type="text/javascript">

function AddCart() {

    var totalprice = 0;
    // get the user id
    var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
    //This gets the current transaction ID. It may differ from the Doc ID
    var docID = CallSINIMethod("GetValue", ["SystemProperty", "CurrentUserDocument", user_id]);
    //this is the products name in the system
    var docName = CallSINIMethod("GetValue", ["DocumentProperty", "ProductName", docID]);

	// get all documents in Cart
    var cart = CallSINIMethod("GetListValue", ["UserListProperty", "DocumentsInShoppingCart", user_id]);
	//Loop through Cart
    $.each(cart, function () {
		// Get name of each item
        var docname = CallSINIMethod("GetValue", ["DocumentProperty", "ProductName", this]);
		// If no price, return $0.00
        if (!price) {
            price = "0.00";
        }
		//Print out each item
        $("#mini_shoppingcart table tbody").append("<tr><td class='tbr'>" + docname + "</td><td> $" + price + "</td></tr>");
		//Add each item up to find Total Price
        totalprice += parseFloat(price);

    });
	//Print out total
    $("#mini_shoppingcart table tfoot").append("<tr><td class='tbr'>Total</td><td> $" + totalprice + "</td></tr>");
	$("#total_cart span").html('$' + totalprice);
	$("#whole_cart").hover(function() {
			$("#mini_shoppingcart").stop().toggle("slow");
			});
}

$(function () {
    AddCart();
});
</script>
<style type="text/css">
#mini_shoppingcart {
display:none;
background:#fff;
padding:5px;
clear:right;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
height:auto;
}
#mini_shoppingcart table {
border-collapse:collapse;
}
#mini_shoppingcart td{
min-width:50px;
 max-width:300px;
 padding:5px;
}
#mini_shoppingcart tfoot td{
 font-weight:bold;
 border-top-style: double;
border-top-width: 2px;
border-top-color: black;
}
#mini_shoppingcart tr td:first{
border:left 1px solid black;
}
#mini_shoppingcart td.tbr{
border-right:1px solid black;
}
#whole_cart {
position:absolute;
right:30px;
top:20px;
padding:10px;
}
#total_cart{
cursor:pointer;
float:right;
clear:both;
vertical-align: top;
font-size: 17px;
}
#total_cart span{
vertical-align:top;
font-weight:bold;
padding-left:10px;
}
	  </style>
	  <div id="whole_cart"><a href="/UserContentShoppingCart.aspx"><div id="total_cart"><img src="Custom\Themes\ExceliiAdmin\Inserts\images\icon-cart.png" alt="Shopping"><span></span></div></a>
	  <div id="mini_shoppingcart"><table><thead><tr><th>Product</th><th>Price</th></tr></thead><tbody></tbody><tfoot></tfoot></table></div>
</div>