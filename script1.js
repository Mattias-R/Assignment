function paint(){
	let b = document.getElementById("color").value;
	document.getElementById("square").style.backgroundColor=b;

	if(document.getElementById("square").style.backgroundColor == b){
		document.getElementById("success").innerHTML = ("The square is now " + b);
	}else if(document.getElementById("square").style.backgroundColor != b){
		document.getElementById("success").innerHTML = (b + " is not a defined color");
	}else{
		alert("error");
	}


}