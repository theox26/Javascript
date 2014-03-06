
function addFields(f1,f2,f3) {
//the number of arguments does not matter
var totalValue = 0;
	for (var i=0, j=arguments.length; i < j; i++) {
		var fieldValue = document.getElementById('FIELD_' + FieldIDs[arguments[i]]).value;
		totalValue += +fieldValue;
	}
	document.getElementById('FIELD_' + FieldIDs['FFQuantity').value = totalValue;
}

function StorefrontEvaluateFieldsHook(field) {
//add fields on any change
addFields('WinbackMailing','NeighborsMailing','PureProspectsMailing');
}
