/****************
Image uploads and any AJAX call on a FormFilling page will cause the fields populated with
the StateDropdownObject to be wiped out since the server doesn't know those fields exist. 

This is a method to save those values to a JSON object and save it in a field then reverse that after
the AJAX call is processed and the form is repopulated.

Requirements: all.js

****************/

var fauxFix = {
	//put the names of the fields that hold the lost values here
	saveFields : [],
	//this field name is also hard written in JSONValuesToFields
	JSONfield : FormGetField("JSONfield"),

	fieldValuesToJSON : function() {
	//the number of arguments does not matter
		var allFields = {};
		for (var i = 0, j=fauxFix.saveFields.length; i < j; i++) {
			allFields[fauxFix.saveFields[i]] = FormGetFieldValue(fauxFix.saveFields[i]);
		}	
		fauxFix.JSONfield.value = JSON.stringify(allFields);
	},

	JSONValuesToFields : function() {
		var allValues = JSON.parse(fauxFix.JSONfield.value);
		for (field in allValues) {
			//we only create dropdowns or checkboxes. This should look at others if you use them
			var fieldObj = FormGetField(field);
			if(fieldObj){
				var fieldType = fieldObj.type ? fieldObj.type.toUpperCase() : "";
				if(fieldType == "CHECKBOX" || fieldType == "RADIO"){
					//var valueArray = allValues[field].split("\n");
					for (box in fieldObj){
						if(allValues[field].indexOf(fieldObj[box].value) > -1){
							fieldObj[box].checked = true;
						}
					}
				} else {
					FormSetFieldValue(field, allValues[field]);
				}
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