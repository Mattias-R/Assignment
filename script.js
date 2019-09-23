/*function calculate will start when the button with the id calculate is pressed!*/
function calculate(){
	/* var n gets the value of the input field*/
	var n = document.getElementById("number").value;
	/* var e gets the select menu */
	let e = document.getElementById("gewicht");
	/* var b gets the value of the used option in the select menu */
	let b = e.options[e.selectedIndex].value;
	/* var a gets the select menu */
	let a = document.getElementById("gewicht2");
	/* var c gets the value of the used option in the select menu */
	let c = a.options[a.selectedIndex].value;
	/*this convert every input into gramm */
	if(b==1){
		var neu = n;
	}else if(b==2){
		var neu = n*10;
	}else if(b==3){
		var neu = n*1000;
	}else if(b==4){
		var neu = n*1000000;
	}else{
		alert("error");
	};
	/*this convert gramm into the selected unit */
	if(c==1){
		var neu1 = neu;
	}else if(c==2){
		var neu1 = neu/10;
	}else if(c==3){
		var neu1 = neu/1000;
	}else if(c==4){
		var neu1 = neu/1000000;
	}else{
		alert("error");
	};
	/*innerHTML shows the result in the paragraph i */
	document.getElementById("i").innerHTML = (neu1);
	}


