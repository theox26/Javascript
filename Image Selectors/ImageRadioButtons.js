Select a Photo</br>
<a href="javascript:void(0)" onclick="selectPic('pic1.jpg');"><img src="custom/images/pic1.jpg" width="122" height="75" border="0"/></a>
<a href="javascript:void(0)" onclick="selectPic('pic2.jpg');"><img src="custom/images/pic2.jpg" width="122" height="75" border="0"/></a>
<script type="text/javascript" src="FormScripts.js"></script>
<script language="JavaScript">
function selectPic(mySelection)
{
         var selectPic;
     selectPic = mySelection;
     FormSetFieldValue("myPic", selectPic);
     FormUpdatePreview ();
}
</script>