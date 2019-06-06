function validate(){
	var reg= /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z_\-\.]){1,}\.([A-Za-z]){2,4}$/;
	var reg1=/^([A-Za-z0-9_\-\.\@]){8,}$/;
	var username = document.getElementById("ename").value;
	var password = document.getElementById("password").value;

	if (reg.test(username)==true && reg1.test(password)==true){
		window.location = "home.html"; 
		alert ("Login successfully");
		return false;
	}
	else if (reg.test(username)==true || reg1.test(password)==false) {	
			document.getElementById("demo1").innerHTML ="Invalid password";
	}
	else if(reg.test(username)==false || reg1.test(password)==true)
	{
		document.getElementById("demo").innerHTML ="Invalid Email";
	}
	else{
		document.getElementById("demo").innerHTML ="Invalid Email";
		document.getElementById("demo1").innerHTML ="Invalid password";
	}
}

