/* 
Written by Jason Peltier
Edited for general use in jScript by Aaron Oxenrider
*/
function stripPhone(field){
	// uses only the numbers in a phone for vCard purposes
	var tempField = field.replace(/ /g, "");
	var tmpPhone = tempField.replace(/[^0-9]/g,""); // Only grabbing the numbers
	return tmpPhone;
}

function buildVcard(firstName,lastName,title,main,direct,fax,mobile,address,address2,city,state,zip,country,email){
	var main1 = stripPhone(main);
	var direct1 = stripPhone(direct);
	var fax1 = stripPhone(fax);
	var mobile1 = stripPhone(mobile);
	
	var start = "BEGIN:VCARD";
	var vName = "\nN:" + lastName + ";" + firstName;
	var vFullName = "\nFN:" + firstName + " " + lastName;
	var vTitle = title ? "\nTITLE:" + title : "";
	
	//var vMain2 = "\nTEL;WORK;VOICE:" + main1;
	//var vFax2 = "\nTEL;WORK;FAX:" + fax1;
	//var vCell2 = "\nTEL;CELL:" + mobile1;

	var vMain = main1 ? "\nTEL;TYPE=WORK,VOICE:" + main1 : "";
	var vDirect = direct1 ? "\nTEL;X-Direct:" + direct1 : "";
	var vFax = fax1 ? "\nTEL;TYPE=WORK,FAX:" + fax1 : "";
	var vCell = mobile1 ? "\nTEL;TYPE=CELL:" + mobile1 : "";
	
	var vEmail = email ? "\nEMAIL;INTERNET;WORK:" + email : "";
	var vAdr = "\nADR;WORK:;;"+address+";"+address2+";"+city+";"+state+";"+zip+";"+country;
	
	var end2 = "\nVERSION:2.1\nEND:VCARD";
	var end3 = "\nVERSION:3.0\nEND:VCARD";
	
	var fullVcard = start + vName + vFullName + vTitle + vMain + vDirect + vFax + vCell + vEmail + vAdr + end2;
	
	return fullVcard;

}

/*

BEGIN:VCARD
N;CHARSET=utf-8:Peltier;Jason;;;
FN;CHARSET=utf-8:Jason Peltier
ORG;CHARSET=utf-8:Sogeti
TITLE;CHARSET=utf-8:Consultant
TEL;WORK:9799220586
TEL;CELL:9799220586
TEL;WORK;FAX:1111111111
EMAIL;INTERNET;WORK;CHARSET=utf-8:jpeltier@cgx.com
ADR;WORK;CHARSET=utf-8:;;1221 Lamar St, Ste 1331;Houston;TX;77002;USA
URL;WORK;CHARSET=utf-8:http://www.cgx.com
VERSION:2.1
END:VCARD
*/

function buildMEcard(firstName,lastName,tel,address,address2,city,state,zip,email){
	var tel1 = stripPhone(tel);
		
	var start = "MECARD:";
	var vName = "N:" + lastName + "," + firstName + ";";
	
	var vMain = tel1 ? "TEL:" + tel1 + ";" : "";
	var vEmail = email ? "EMAIL:" + email + ";" : "";
	var vAdr = "ADR:"+address+","+address2+","+city+","+state+" "+zip+ ";";
	
	var end =  ";";
	
	var fullMEcard = start + vName + vAdr + vMain + vEmail + end;
	
	return fullMEcard;

}

/*
http://www.nttdocomo.co.jp/english/service/developer/make/content/barcode/function/application/addressbook/index.html
MECARD:N:Owen,Sean;ADR:76 9th Avenue, 4th Floor, New York, NY 10011;TEL:+12125551212;EMAIL:srowen@example.com;; 

*/