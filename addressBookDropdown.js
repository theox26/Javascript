<script type="text/javascript" src="jSINI.js"></script>
<script>
//Set a dropdown of Labels from the users available address books
var addressBookItems = {},
thisLabel;

//Dont change this one, it gets the UserID
var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
//all the addresses available to the user returned as an array of IDs
var addressIds = CallSINIMethod("GetListValue",["UserListProperty", "AddressBookItems", user_id]);

for(var i = 0; i < addressIds.length; i++){
thisLabel = CallSINIMethod("GetValue", ["AddressBookItemProperty", "Label", addressIds[i] ]); 
addressBookItems[thisLabel] = {};

//these fields can vary based on the site's settings
addressBookItems[thisLabel].add1 = CallSINIMethod("GetValue", ["AddressBookItemField", "ShippingAddress1", addressIds[i] ]);
addressBookItems[thisLabel].add2 = CallSINIMethod("GetValue", ["AddressBookItemField", "ShippingAddress2", addressIds[i] ]);
addressBookItems[thisLabel].city = CallSINIMethod("GetValue", ["AddressBookItemField", "ShippingCity", addressIds[i] ]);
addressBookItems[thisLabel].state = CallSINIMethod("GetValue", ["AddressBookItemField", "ShippingState", addressIds[i] ]);
addressBookItems[thisLabel].zip = CallSINIMethod("GetValue", ["AddressBookItemField", "ShippingPostalCode", addressIds[i] ]);
}


//populates the dropdown
var setDropdown = function( fieldName ) {
	//can be used alone when other criteria is needed. Mainly used with this.dropdown()
	var dependentSel = PFSF_Find('FIELD_' + FieldIDs[fieldName]),
	opt;

	while (dependentSel.hasChildNodes()) {
	dependentSel.removeChild(dependentSel.childNodes[0]);
		//dependentSel.childNodes[0] = null;
	}
	//insert default empty option
	var defOpt = new Option('- Select -','');
	//append the default option to the list (should be first but just in case)
			try {
				dependentSel.add(defOpt,null);
			} catch (e) {
				//for IE7 and earlier
				if (e.name == "TypeError") {
					dependentSel.options[dependentSel.options.length] = defOpt;
				} else {
					throw e;
				}
			}
	//add all appropriate options from object
	for(var i in addressBookItems){
			opt = new Option(i);
			//append the option to the list
			try {
				dependentSel.add(opt,null);
			} catch (e) {
				//for IE7 and earlier
				if (e.name == "TypeError") {
					dependentSel.options[dependentSel.options.length] = opt;
				} else {
					throw e;
				}
			}	
	}
}

//loop through the address books
setDropdown('locationName');


function StorefrontEvaluateFieldsHook(field){
	if(field.id == "FIELD_" + FieldIDs["locationName"]){
		var locName = field.value;
		//this holds the address in one field. Split out if needed.
		var compiledAddress = addressBookItems[locName].add1 + (addressBookItems[locName].add2 ? ", " + addressBookItems[locName].add2 : "") + ", " + addressBookItems[locName].city + ", " + addressBookItems[locName].state + " " + addressBookItems[locName].zip;
		FormSetFieldValue("locationAddress", compiledAddress);
	}
}

</script>