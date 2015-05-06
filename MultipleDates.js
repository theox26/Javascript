$("#FIELD_"+FieldIDs["e_date"]).datepicker({
  maxDate: "+1y",
  dateFormat: "mm/dd/yy"
});


function StorefrontEvaluateFieldsHook( field ) {
  var DaysToPass = [14,21];
  var fields = ["e_date2","e_date3"];

  if( field.id == "FIELD_" + FieldIDs["e_date"] ){
    var workingDate = $.datepicker.parseDate( "mm/dd/yy", FormGetFieldValue("e_date") );

    for (var i = 0, j = DaysToPass.length; i < j; i++) {
      
      workingDate = $.datepicker.parseDate( "mm/dd/yy", FormGetFieldValue("e_date") );

      workingDate.setDate(workingDate.getDate() + DaysToPass[i]);

      //formats the date as 01/01/2013
      var FormattedDate = $.datepicker.formatDate( "mm/dd/yy", workingDate );

      //sets your field to the needed date
      FormSetFieldValue(fields[i], FormattedDate);

    }
  }
}