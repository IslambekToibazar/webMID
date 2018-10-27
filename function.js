	function change(){
		document.querySelector("header .navigation").style.backgroundColor = "white";
		document.querySelector("header .navigation .logo h3").style.color = "black";
		var x = document.querySelectorAll("header .navigation nav ul li")
		for (let i = 0; i < x.length; i++) {
			x[i].style.color = "black"; 
		}
		if(document.body.scrollTop < 30){
			backChange();
		}
		console.log("Hi")
	}
	function backChange(){
		document.querySelector("header .navigation").style.backgroundColor = "white";
		document.querySelector("header .navigation .logo h3").style.color = "black";
		var x = document.querySelectorAll("header .navigation nav ul li")
		for (let i = 0; i < x.length; i++) {
			x[i].style.color = "black"; 
		}
	}	
