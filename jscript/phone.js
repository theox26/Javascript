function formatPhone(field) {
//this takes only the phone and must be formatted as needed below
if(field) {
   field = field.replace(/ /g, "");
   var tmpPhone = field.replace(/[^0-9]/g,""); // Only grabbing the numbers //
   return field = tmpPhone.substr(0, 3) + '/' + tmpPhone.substr(3, 3) +  '-' + tmpPhone.substr(6, 4);
   } else {
   return '';
   }
}