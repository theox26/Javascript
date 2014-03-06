function makeCertifications ()

{

carray = [];   // Creates the empty array variable "carray".

if (PFGetValue("CertLEEDAPBDCCheckbox")   != "")  {carray.push (" LEED AP BD+C")};          // If the checkbox is clicked (variable "CertLEEDAPBDCCheckbox" is not empty), add the text " LEED AP BD+C" to the array. Note the space after the quote, since the join() command doesn't add spaces.
if (PFGetValue("CertLEEDAPOMCheckbox")    != "")  {carray.push (" LEED AP O+M")};           // The "push" method adds new items to the end of an array.
if (PFGetValue("CertLEEDFacultyCheckbox") != "")  {carray.push (" LEED FACULTY")};          //etc.
if (PFGetValue("CertLEEDFellowCheckbox")  != "")  {carray.push (" LEED FELLOW")};           //etc.
if (PFGetValue("CertLEEDGREENCheckbox")   != "")  {carray.push (" LEED GREEN ASSOCIATE")};  //etc.
if (PFGetValue("CertLEEDEDACCheckbox")    != "")  {carray.push (" LEED EDAC")};             //etc.
if (PFGetValue("CertOtherCheckbox")       != "")  {carray.push ((" " + PFGetValue("CertOtherText")))};  // If the "other" checkbox is clicked (variable "CertLEEDAPBDCCheckbox" is not empty), grab the value from a blank field named "CertOtherText" " LEED AP BD+C" to the array.

var cresult = carray.join();  //this method takes the "carray" variable that we've been adding chunks of text to, and 'smushes" it together into one long text string, with each chunk separated by commas. How convenient.

return cresult;  // returns the result of our join()

}
