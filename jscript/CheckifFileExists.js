function getPlanPDF(planNumber, option){
	
	var fso;
	fso = new ActiveXObject("Scripting.FileSystemObject");
	
	planNumber = planNumber.replace(" ", "");
	
	if(planNumber == "100437"){
		if(option == 1){
		return planNumber + "_RMD Kit - First Year.pdf";
		}
		else{
			return planNumber + "_RMD Kit - Subsequent Year.pdf";
		}
	}
	if(planNumber == "104405"){
		if(option == 1){
			return planNumber + "_RMD 1st Year.pdf";
		}
		else{
			return planNumber + "_RMD Subsequent Year.pdf";
		}
	}
	if(planNumber == "104556"){
		if(option == 1){
			return planNumber + "_RMD Active.pdf";
		}
		else{
			return planNumber + "_RMD.pdf";
		}
	}
	if(planNumber == "105219"){
		if(option == 1){
			return planNumber + "_RMD Subsequent.pdf";
		}
		else{
			return planNumber + "_RMD.pdf";
		}
	}
	
	planNumber += "_RMD.pdf";
	
	if(fso.FileExists(planNumber)){
		return planNumber;
	}
	else{
		return "000000_RMD.pdf";
	}

}
function cityStateZip(city, state, zip){

	zip = zip.replace(/-/g,"");
	zip = zip.replace(/ /g,"");
	
	checkLength = zip.length;
	
	if(checkLength == 4){
		zip =  "0" + zip;
	}
	else if(checkLength == 8){
		zip = "0" + zip.substr(0,4) + "-" + zip.substr(4,4);
	}
	else if(checkLength == 9){
		zip = zip.substr(0,5) + "-" + zip.substr(5,4);
	}

	return city + ", " + state + " " + zip;
	
}
function getW4(country, taxYesNo){

	if((country.toUpperCase() == "US" || country.toUpperCase() == "UNITED STATES") && taxYesNo == "yes"){
		return "fw4.pdf";
	}
	else{
		return "";
	}
}
function getW8(country, taxYesNo){

	if(!(country.toUpperCase() == "US" || country.toUpperCase() == "UNITED STATES") && taxYesNo == "yes"){
		return "fw8ben.pdf";
	}
	else{
		return "";
	}
}
function getW9(country, taxYesNo){

	if(!(country.toUpperCase() == "US" || country.toUpperCase() == "UNITED STATES") && taxYesNo == "yes"){
		return "fw9.pdf";
	}
	else{
		return "";
	}
}