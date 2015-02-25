<script type="text/javascript" src="JSINI.js"></script>
<script type="text/javascript">
//put this in Page_FormFill_Bottom.html
//This changes the header bar for the product to display the name if it was limited by the system
var headerName = $('div.areaTitle:contains("Create a Document")');//If the strings file has this changed it won't work
//no need to do all the work if the site is already correct
if(headerName) {
    //JSINI needs a three step process to get doc level data
    //Dont change this one, it gets the UserID
    var user_id = CallSINIMethod("GetValue", ["SystemProperty", "LoggedOnUserID", null]);
    //This gets the current transaction ID. It may differ from the Doc ID
    var docID = CallSINIMethod("GetValue", ["SystemProperty", "CurrentUserDocument", user_id]);
    //this is the products name in the system and does not have the 50 character limit
    var docName = CallSINIMethod("GetValue", ["DocumentProperty", "ProductName", docID]);

    //sets the text to the real name
    headerName.text(docName);
}

//this is to fix the R mark not being superscripted in the default font
$(function(){
    var registeredMark = String.fromCharCode(174);

    var regText = $('div.areaTitle:contains(' + registeredMark + ')');

    if(regText.length){
        var newValue = regText.html().replace(registeredMark, "<sup>"+ registeredMark + "</sup>")
        regText.html(newValue);
    }
});
</script>