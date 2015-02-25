<script src="https://js.worksmartsuite.com/1.8.2.jquery.min.js" type="text/javascript"></script>
<script src="https://js.worksmartsuite.com/jquery.cookie.js"></script>

<script>
	function setCookie(){
		var pagesUsed = FormGetFieldValue('page_showhide');
		$.cookie('PagesUsed', pagesUsed, { expires: 7, path: '/'});
	}

	function StorefrontValidatorHook() {
		setCookie();
		//other code can go here too
		return true;
	}
</script>

