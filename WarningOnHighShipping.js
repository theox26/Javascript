<div id=DIV_38 class='Form_Header'><p class='Form_Header'>Delivery Method</p><table cellpadding=0 cellspacing=0  style='width: 400px; '><tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_01' id='FIELD_38' name='FIELD_38'><span>PCA Shuttle: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_02' id='FIELD_38' name='FIELD_38'><span>Pickup: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_04' id='FIELD_38' name='FIELD_38'><span>PCA Shuttle: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_05' id='FIELD_38' name='FIELD_38'><span>FedEx 3rd Party 2-Day: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_06' id='FIELD_38' name='FIELD_38'><span>FedEx 3rd Party Priority: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_07' id='FIELD_38' name='FIELD_38'><span>3rd Party 2-Day: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_08' id='FIELD_38' name='FIELD_38'><span>3rd Party Priority: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='Custom_09' id='FIELD_38' name='FIELD_38'><span>A - UPS Ground: $ 0.00</span>
</td>
</tr>
<tr valign='top'  style='width: 400px; '><td style='width: 400px; ' ><input type='radio' value='ZeroWeight_01' id='FIELD_38' name='FIELD_38'><span>No Shipping: $ 0.00</span>
</td>
</tr>
</table>

 <script language="javascript">
  FieldIDs["ShippingDeliveryMethod"] = 38;
 </script>
<div class='validationError' style='display:none' id='VALID_VAR_38'></div>
</div>

var test1 = document.getElementById('DIV_38')
17:48:39.219 undefined
17:48:42.795 test1
17:48:42.797 [object HTMLDivElement]
17:49:59.015 test1.getElementsByTagName('span')
17:49:59.017 [object HTMLCollection]
17:51:50.194 var nodes = test1.getElementsByTagName('span')
17:51:50.196 undefined
17:52:26.561 nodes[0].textContent
17:52:26.563 "PCA Shuttle: $ 0.00"
17:52:49.625 nodes[0].textContent.split('$')[1]
17:52:49.627 " 0.00"
nodes[0].textContent.split('$')[1].trim()
17:52:49.627 "0.00"