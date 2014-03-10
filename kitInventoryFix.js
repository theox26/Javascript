<script src="https://js.worksmartsuite.com/all.js"></script>
<script>
//This will make Inventory properly apply the kit quantity chosen, it will break pricing and is not needed unless this product is a kit and the Streamline Inventory extension is used. This must be applied on the Options page even if you use the FFquantity extension. The options page must be shown to the user.
//each set in [] is the number used in KitQuantity followed by the default quantity needed
//Only include those you want to be modified. This will not modify anything not specifically in this array
var QuantityArray = [
[1,1],
[2,6],
[3,3]
];

function StorefrontValidatorHook() {
// set m to the quantity chosen by the user
var m = Number(FormGetFieldValue('PrintingQuantity'));
for (i=0,j=QuantityArray.length;i<j;i++) {
//grab the current field in the loop
var currenta = FormGetField('PrintingQuantityKitPart'+QuantityArray[i][0]);
//set the value of current field to the default quantity times the chosen quantity
currenta.value = Number(QuantityArray[i][1]) * m;
}
return true;
}
</script>