
function currentPage(){
var pages = document.getElementById('txtPageNumber').innerHTML;
return pages.split(" ")[1];
}

function comparePage(thisSection, pageOfSection) {
//if all sections are shown then the pages 9,11, and 12 need flipped
var checkIDs = ['01','02','03','04','05','06','07','08','09','10','11','12','13'];
var pagesPerSection = [2,4,2,2,2,2,2,2,2,2,2,2,2];
var pageCount = +pageOfSection;
	for (var i=0, j=thisSection - 1; i < j; i++) {
		if (document.getElementById(checkIDs[i]).checked) {
		pageCount += +pagesPerSection[i];
		}
	}
	return pageCount;
}

function goToPage(thisSection, pageOfSection) {
var checkIDs = ['01','02','03','04','05','06','07','08','09','10','11','12','13'];
var pagesPerSection = [2,4,2,2,2,2,2,2,2,2,2,2,2];
var pageCount = +pageOfSection;
	for (var i=0, j=thisSection - 1; i < j; i++) {
		if (document.getElementById(checkIDs[i]).checked) {
		pageCount += +pagesPerSection[i];
		}
	}
	return GotoPageN(pageCount);
}
	
function StorefrontPostAjaxHook(){
	if (currentPage() == comparePage(4,1) || currentPage() == comparePage(5,1) || currentPage() == comparePage(5,2) ) {
		$("img.formFillingPreview").css({ 
			'transform': 'rotate(90deg)',
			'-moz-transform': 'rotate(90deg)',
			'-webkit-transform': 'rotate(90deg)',
			'-o-transform': 'rotate(90deg)',
			'-ms-transform': 'rotate(90deg)'
		});
	} else {
		$("img.formFillingPreview").css({ 
			'transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'-webkit-transform': 'rotate(0deg)',
			'-o-transform': 'rotate(0deg)',
			'-ms-transform': 'rotate(0deg)'
		});
	}	
}

//correct form of date and timepicker in one
$("#"+FormGetField('potentialMembersDate').id).datetimepicker({
        timeFormat: 'h tt',          
        ampm: true,
        stepHour:1,                     // allow to choose every hour
        stepMinute: 15                  // allow to choose every 15 mins
    });
