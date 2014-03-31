function returnXAT(Date1, StartTime1, StartTime1AMPM, EndTime1, EndTime1AMPM, EventLocation1, Add1, City1, State1, Zip1, Date2, StartTime2, StartTime2AMPM, EndTime2, EndTime2AMPM, EventLocation2, Add2, City2, State2, Zip2, Date3, StartTime3, StartTime3AMPM, EndTime3, EndTime3AMPM, EventLocation3, Add3, City3, State3, Zip3){
	var x = 0;

if(Date1 || StartTime1 || StartTime1AMPM || EndTime1 || EndTime1AMPM || EventLocation1 || Add1 || City1 || State1 || Zip1){
	x++;
}

if(Date2 || StartTime2 || StartTime2AMPM || EndTime2 || EndTime2AMPM || EventLocation2 || Add2 ||  City2 || State2 || Zip2){
	x++;
}

if(Date3 || StartTime3 || StartTime3AMPM || EndTime3 || EndTime3AMPM || EventLocation3 || Add3 ||  City3 || State3 || Zip3){
	x++;
}


	if(x > 2){
		return '3_Selections.xat';
	} else if(x > 1){
		return '2_Selections.xat';
	} else {
		return '1_Selections.xat';
	}

}