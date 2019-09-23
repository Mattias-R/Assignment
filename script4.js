window.onload = function(){
	let holiday = new Date("aug 17, 2020 00:00").getTime(); 
	let heute = new Date();
	let countdown = holiday - heute;
	let countdown2 = Math.floor(countdown/(1000*60*60*24));
	document.getElementById("date").innerHTML = ("noch " + countdown2+ " Tage bis zu deinem Urlaub");

/*
	let time = [
	["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],
	["Jänner","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
	["2019","2020","2021","2022","2023","2024","2025"]
	];

	for(time.length){
		console.log(time);
	};
	*/
}