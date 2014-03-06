/*
this can be a field with a number or just put your number here.
Ex:
var DaysToPass = 120; 
Ex:
var DaysToPass = parseInt(FormGetFieldValue("TurnTime")); 
*/
var DaysToPass = parseInt(FormGetFieldValue("YourDaysField")); 

var workingDate = new Date();
workingDate.setDate(workingDate.getDate() + DaysToPass);
/*
Modify the FormattedDate variable as needed, some examples below
formats the date as 01/01/2013
var FormattedDate = ("0"+(workingDate.getMonth()+1)).slice(-2)+"/"+("0"+(workingDate.getDate())).slice(-2)+"/"+workingDate.getFullYear();

formats the date as 1/1/2013
var FormattedDate = (workingDate.getMonth()+1)+"/"+workingDate.getDate()+"/"+workingDate.getFullYear();

formats the date as 01.01.2013
var FormattedDate = ("0"+(workingDate.getMonth()+1)).slice(-2)+"."+("0"+(workingDate.getDate())).slice(-2)+"."+workingDate.getFullYear();
*/
//formats the date as 01/01/13
var FormattedDate = ("0"+(workingDate.getMonth()+1)).slice(-2)+"/"+("0"+(workingDate.getDate())).slice(-2)+"/"+workingDate.getFullYear().toString().substring(2,4);
//sets your field to the needed date. Replace YourDateField with the field you would like the date placed in.
FormSetFieldValue("YourDateField",FormattedDate);