<script src="https://js.worksmartsuite.com/1.8.2.jquery.min.js" type="text/javascript"></script>
<script src="https://js.worksmartsuite.com/jquery.cookie.js"></script>
<script>
      var cookie = $.cookie('PagesUsed');
      	$ (document).ready (function(){
      		if (cookie){
      			//fills in the contents of the div with id 'pages' with the contents of the cookie.
      			$("#pages").html(cookie);	
      		}
      	});
      </script>
