/****************
Image uploads and any AJAX call on a FormFilling page will cause the fields populated with
the StateDropdownObject to be wiped out since the server doesn't know those fields exist. 

This is a method to save those values to a JSON object and save it in a field then reverse that after
the AJAX call is processed and the form is repopulated.

Eventually, I'll mix this in with the main object and make a real oo method out of all of this

Requirements: all.js, I may need to use jquery but will try not to first

****************/

var fauxFix = {
	//put the names of the fields that hold the lost values here
	saveFields : [],
	//this field name is also hard written in JSONValuesToFields
	JSONfield : FormGetField("JSONfield"),

	fieldValuesToJSON : function() {
		var allFields = {};
		for (var i = 0, j=fauxFix.saveFields.length; i < j; i++) {
			var thisValue = FormGetFieldValue(fauxFix.saveFields[i]);
			if (thisValue !== ''){
				allFields[fauxFix.saveFields[i]] = FormGetFieldValue(fauxFix.saveFields[i]);
			}
		}
		//keep the data on a page reload after PDF upload
		if(allFields !== {})	
		fauxFix.JSONfield.value = JSON.stringify(allFields);
	},

	JSONValuesToFields : function() {
		var allValues = JSON.parse(fauxFix.JSONfield.value);
		for (var i = 0, j=fauxFix.saveFields.length; i < j; i++){
			//we only create dropdowns or checkboxes. This should look at others if you use them
			if(allValues[fauxFix.saveFields[i]]){
				var fieldObj = FormGetField(fauxFix.saveFields[i]);
				var fieldType = fieldObj.type ? fieldObj.type.toUpperCase() : "";
				if(fieldType === "" && fieldObj[0]){
					fieldType = fieldObj[0].type ? fieldObj[0].type.toUpperCase() : "";
				}
				if(fieldType == "CHECKBOX" || fieldType == "RADIO"){
					for (var box = 0; box < fieldObj.length; box++){
						if(fieldObj[box] && allValues[fauxFix.saveFields[i]].indexOf(fieldObj[box].value) > -1){
							fieldObj[box].checked = true;
						} //default is unchecked so no need for else
					}
				} else {
					FormSetFieldValue(fauxFix.saveFields[i], allValues[fauxFix.saveFields[i]]);
				}
				evaluateFields(fieldObj);
			}
		}
	}
}
//on change
function StorefrontEvaluateFieldsHook(field) {
	fauxFix.fieldValuesToJSON();
}

function StorefrontPostAjaxHook(){
	fauxFix.JSONValuesToFields();
}