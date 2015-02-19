<style>
.slValidationErrorTab {
    background: url(https://js.worksmartsuite.com/sTools/notice-round.gif) no-repeat right bottom;
}

.slValidationErrorField {
    background: url(https://js.worksmartsuite.com/sTools/notice-icon.gif) no-repeat right;
    border: 2px solid #cc0a0c;
}
</style>
<script>
//postAJAX find the validation divs that are showing. Then find the parent that has the right class
//use that to find the accordion or tab to highlight with the slValidationError class

if(window.StorefrontPostAjaxHook){
    //this works to preserve the existing possible functions and add new
    var backupExisting = StorefrontPostAjaxHook;

    var StorefrontPostAjaxHook = function(){
        backupExisting();

        //requires jQuery but if you have tabs or accordion then that is already loaded    
        var errorTabs = [],
            tabs = false,
            $parent,
            visualErrorFunction = function(){}; //accordion or tabs

        if( $("div#tabs").length ){
            $("div#tabs li").find("a").removeClass('slValidationErrorTab');
            tabs = true;
            visualErrorFunction = function(index){
                $parent = $(this).parent().parent();
                if ( $parent.hasClass("ui-tabs-panel") ){
                    errorTabs.push( $parent.attr( "id" ) );
                } else {
                    //I'm not sure what to do here if anything
                }
            };
        } else if( $("div#accordion").length ){
            $("div#accordion").find(".ui-accordion-header").removeClass('slValidationErrorField');
            visualErrorFunction = function(index){
                $parent = $(this).parent().parent();
                if ( $parent.hasClass("ui-accordion-content") ){
                    $parent.prev().addClass('slValidationErrorField');
                } else {
                    //I'm not sure what to do here if anything
                }

            }
        } else {
            return; //there is no enclosure so nothing needs done
        }

        $("div[id*='VALID_VAR_']").filter(function( index ) {
            return this.style.display !== "none"; // :visible doesn't work since the accordion hides them
         }).each(visualErrorFunction);

        if(tabs){
            for (var i = 0, j= errorTabs.length; i < j; i++) {
                $("div#tabs").find("li[aria-controls='" + errorTabs[i] + "'] a").addClass('slValidationErrorTab');
            };
        }
    }

} else {

    var StorefrontPostAjaxHook = function() {
    //requires jQuery but if you have tabs or accordion then that is already loaded    
        var errorTabs = [],
            tabs = false,
            $parent,
            visualErrorFunction = function(){}; //accordion or tabs

        if( $("div#tabs").length ){
            $("div#tabs li").find("a").removeClass('slValidationErrorTab');
            tabs = true;
            visualErrorFunction = function(index){
                $parent = $(this).parent().parent();
                if ( $parent.hasClass("ui-tabs-panel") ){
                    errorTabs.push( $parent.attr( "id" ) );
                } else {
                    //I'm not sure what to do here if anything
                }
            };
        } else if( $("div#accordion").length ){
            $("div#accordion").find(".ui-accordion-header").removeClass('slValidationErrorField');
            visualErrorFunction = function(index){
                $parent = $(this).parent().parent();
                if ( $parent.hasClass("ui-accordion-content") ){
                    $parent.prev().addClass('slValidationErrorField');
                } else {
                    //I'm not sure what to do here if anything
                }

            }
        } else {
            return; //there is no enclosure so nothing needs done
        }

        $("div[id*='VALID_VAR_']").filter(function( index ) {
            return this.style.display !== "none"; // :visible doesn't work since the accordion hides them
         }).each(visualErrorFunction);

        if(tabs){
            for (var i = 0, j= errorTabs.length; i < j; i++) {
                $("div#tabs").find("li[aria-controls='" + errorTabs[i] + "'] a").addClass('slValidationErrorTab');
            };
        }
    }

}
</script>