var D=new Date();
var E=new Date();

var Bday= {
	bizDays: function(d1,d2){
		d1= new Date(d1);
		d2= new Date(d2);
		var interval= Math.abs(d1-d2);
		var days= Math.floor(interval/8.46e7);
		var tem= days%7;
		var weeks= Math.floor(days/7);
		var temp= tem;
		var wd1= d1.getDay();
		var wd2= d2.getDay();
		if(wd1== 6) tem-= 2;
		else if(wd1=== 0) tem-= 1;
		if(wd2=== 0) tem-= 1;
		var diff= Bday.holBetween(d1,d2);
		tem-= diff[0];
		return weeks*5+tem;
	},
	getdayOffset:function(y,wot){
		var month,count,D,temp;
		if(wot.length>3){
			if(y< wot[3]) return false;
			if(wot[4] && y >wot[4]) return false;
		}
		day= wot[1];
		if(wot[0]== 'last'){
			month= wot[2];
			count= -1;
		}
		else{
			count= wot[0]-1;
			month= wot[2]-1;
		}
		D= new Date(y,month,1);
		while(D.getDay()!= day) D.setDate(D.getDate()+1);
		D.setDate((7*count)+D.getDate());
		return [D.getMonth(),D.getDate()];
	},
	getHolidays: function(year){
		year= year || new Date().getFullYear();
		if(Bday.holidays['y_'+year]) return Bday.holidays['y_'+year];

		var hol= [ //months are indexed by +1
		['New Years Day',[1,1]],
        ['Good Friday',[4,3]],
		['Independence Day',[7,4]],
		['Christmas Day',[12,25]],
		['Thanksgiving Day', [4,4,11]],
		['Columbus Day',[2,1,10]],
		['Labor Day',[1,1,9]],
		['Martin Luther King Day',[3,1,1]],
		['Presidents Day',[3,1,2]],
		['Memorial Day',['last',1,5]]
		];
		if(year<1796)hol= [];
		else{
			var I= year-1937;
			if(I>0 && I%4=== 0) hol.push(['Inauguration Day', [1,20]]);
		}
		if(year<1900)hol.splice(4);
		if(year<1861)hol.splice(3);
		return Bday.setHolArray(year,hol);
	},
	holBetween:function (d1,d2){
		var A= [],tem,day,count= 0;
		while(d2-d1> 0){
			d1.setDate(d1.getDate()+1);
			tem= d1.isHoliday();
			if(!tem) continue;
			A.push(tem);
			day= d1.getDay();
			if(day!== 0 && day!= 6)++count;
		}
		return [count,A];
	},
	holidays:{},
	setHolArray: function(y,hol){
		var L= hol.length;
		var A= [],name,temp;
		for(var i= 0; i< 12; i++) A[i]= [];
		for(var i= 0; i< L; i++){
			name= hol[i][0];
			temp= hol[i][1];
			if(!temp) continue;
			if(temp.length >= 3){
				temp= Bday.getdayOffset(y,temp);
			}
			else temp[0]-= 1;
			A[temp[0]][temp[1]]= name;
		}
		return A;
	}
};
Date.prototype.isHoliday= function(){
	var y= this.getFullYear();
	var ys= 'y_'+y;
	if(!Bday.holidays[ys]){
		Bday.holidays[ys]= Bday.getHolidays(y);
	}
	var hol= Bday.holidays[ys];
	var m= this.getMonth();
	var d= this.getDate();
	if(hol[m] && hol[m][d])return hol[m][d];
	return false;
};
Date.prototype.addbizDays=function(n){
	var D=this;
	var num=Math.abs(n);
	var tem,count=0;
	var dir= (n<0)? -1: 1;
	while(count< num){
		D= new Date(D.setDate(D.getDate()+dir));
		if(D.isHoliday())continue;
		tem=D.getDay();
		if(tem!==0 && tem!=6) ++count;
	}
	return D;
    
};
Date.prototype.addbizDays=function(n){
	var E=this;
	var num=Math.abs(n);
	var tem,count=0;
	var dir= (n<0)? -1: 1;
	while(count< num){
		E= new Date(E.setDate(E.getDate()+dir));
		if(E.isHoliday())continue;
		tem=E.getDay();
		if(tem!==0 && tem!=6) ++count;
	}
	return E;
    
};

//adds business days - no weekends or holidays
var today = new Date();
var threedays = D.addbizDays(3);
var fivedays = E.addbizDays(5);

//date formatting
var dd = today.getDate();
var mm = today.getMonth() + 1;
var y = today.getFullYear();
today = mm + '/'+ dd + '/'+ y;

var dd = threedays.getDate();
var mm = threedays.getMonth() + 1;
var y = threedays.getFullYear();
threedays = mm + '/'+ dd + '/'+ y;

var dd = fivedays.getDate();
var mm = fivedays.getMonth() + 1;
var y = fivedays.getFullYear();
fivedays = mm + '/'+ dd + '/'+ y;

//Output
document.getElementById("date").innerHTML = today;
document.getElementById("threedays").innerHTML = threedays;
document.getElementById("fivedays").innerHTML = fivedays;