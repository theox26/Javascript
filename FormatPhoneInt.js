function formatPhoneInt(field,number) {
/**********
1: USA: 000.000.0000
2: England: +44 00 0000 0000 (+44 is already being pulled in from the array)
3: Belgium: +32 000 00 00 00 (+32 is already being pulled in from the array)
4: French: +33 0 00 00 00 00 (+33 is already being pulled in from the array)
5: Netherlands: +31 00 00000000 (+31 is already being pulled in from the array)
**********/

   field.value = field.value.replace(/ /g, "");
   var tmpPhone = field.value.replace(/[^0-9]/g,""); // Only grabbing the numbers //
   var tmpBadChars = field.value.toLowerCase().replace(/[^a-z]/g,""); // grabbing all characters //

   if (tmpPhone.length == 0 && tmpBadChars.length == 0) { return true; } // End the function if no numbers //
   if (tmpBadChars.length > 0) {
      alert('Only numbers are allowed in this field. \nPlease enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);
      return false;
   }
   // formating based upon parameter passed //
   if (number == 1) { //000.000.0000
      if (tmpPhone.length != 10) {
      alert('Please enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);     
     return false;
   }
      field.value = tmpPhone.substr(0, 3) + '.' + tmpPhone.substr(3, 3) +  '.' + tmpPhone.substr(6, 4);

   } else if (number == 2) { //+01 23 4567 8900
      if (tmpPhone.length != 11) {
      alert('Please enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);     
     return false;
   }
      field.value = '+' + tmpPhone.substr(0, 2) + ' ' + tmpPhone.substr(2, 2) +  ' ' + tmpPhone.substr(4, 4) +  ' ' + tmpPhone.substr(8, 4);

   } else if (number == 3) { //+01 234 56 78 90
      if (tmpPhone.length != 10) {
      alert('Please enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);     
     return false;
   }
      field.value = '+' + tmpPhone.substr(0, 2) + ' ' + tmpPhone.substr(2, 3) +  ' ' + tmpPhone.substr(5, 2) +  ' ' + tmpPhone.substr(7, 2) +  ' ' + tmpPhone.substr(9, 2);
   
   } else if (number == 4) { //+01 2 34 56 78 90
      if (tmpPhone.length != 10) {
      alert('Please enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);     
     return false;
   }
      field.value = '+' + tmpPhone.substr(0, 2) + ' ' + tmpPhone.substr(2, 1) +  ' ' + tmpPhone.substr(3, 2) +  ' ' + tmpPhone.substr(5, 2) +  ' ' + tmpPhone.substr(7, 2) +  ' ' + tmpPhone.substr(9, 2);

   } else if (number == 5) { //+01 23 45678900
      if (tmpPhone.length != 11) {
      alert('Please enter a valid 10 digit phone number.');
      setTimeout(function(){field.select();},10);
      setTimeout(function(){field.focus();},10);     
     return false;
   }
      field.value = '+' + tmpPhone.substr(0, 2) + ' ' + tmpPhone.substr(2, 2) +  ' ' + tmpPhone.substr(4, 8);

   } 
   return true;
}