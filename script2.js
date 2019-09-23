function play(){
		let a = document.getElementById("game");
		let b = a.options[a.selectedIndex].value;
		var int = Math.floor(Math.random()*3) + 1;


			if(b==1&&int==1){
				document.getElementById("i").innerHTML = ("draw");
			}else if(b==1&&int==2){
				document.getElementById("i").innerHTML = ("You lose");
			}else if(b==1&&int==3){
				document.getElementById("i").innerHTML = ("You won");
			} else if(b==2&&int==2){
				document.getElementById("i").innerHTML = ("draw");
			}else if(b==2&&int==3){
				document.getElementById("i").innerHTML = ("You lose");
			}else if(b==2&&int==1){
				document.getElementById("i").innerHTML = ("You won");
			}else if(b==3&&int==3){
				document.getElementById("i").innerHTML = ("draw");
			}else if(b==3&&int==1){
				document.getElementById("i").innerHTML = ("You lose");
			}else if(b==3&&int==2){
				document.getElementById("i").innerHTML = ("You won");
			}else{
			console.log("error");
			};



}