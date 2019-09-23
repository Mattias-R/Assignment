function calculate(){
	let a = document.getElementById("money").value;
	let b = document.getElementById("tip").value;
	c = a * (b/100);
	document.getElementById("result").innerHTML=("You want to tip " +c+ " €")
	if(b<10){
		document.getElementById("littleSquare").style.backgroundColor = "red";
		document.getElementById("message").innerHTML=("Your tip is below average");
	}else if(b == 10){
		document.getElementById("littleSquare").style.backgroundColor = "yellow";
		document.getElementById("message").innerHTML=("Your tip is average");
	}else if(b>10){
		document.getElementById("littleSquare").style.backgroundColor = "green";
		document.getElementById("message").innerHTML=("Your tip is generous");
	}else{
		document.getElementById("littleSquare").style.backgroundColor = "red";
		document.getElementById("message").innerHTML=("You did not entered all information proberly");
	}
}