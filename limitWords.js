function limitWords(field, amount){
  var text = document.createElement("span");
  text.innerHTML = "<br><small>(Maximum: " + amount + " words.)</small>";
  field.parentNode.appendChild(text);
  field.onkeyup=function(){    
  var wordCount = this.value.split(' ');	
       if( wordCount.length > amount){
         alert("Maximum: " + amount + " words.");
		 wordCount.length = amount;
         this.value = wordCount.join(' ');
		 FormUpdatePreview();
     }
	 
     text.innerHTML = "<br><small>(Maximum: " + amount + " words.) <br>Used: " + wordCount.length  + "</small>";
  }
  field.onmouseover = field.onkeyup;
}