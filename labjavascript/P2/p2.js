function valideazaForm(){
	let nume=document.forms[0]["fname"].value;
	let dataNasterii=document.forms[0]["fdata"].value;
	let varsta=document.forms[0]["fvarsta"].value;
	let email=document.forms[0]["femail"].value;
	let errorMessage="";
	if(nume==""){
		document.getElementById("fname").style.border="2px solid red";;
		errorMessage+="Numele trebuie completat!/";
	}
	if(dataNasterii==""){
		document.getElementById("fdata").style.border="2px solid red";;
		errorMessage+="Data nasterii trebuie completata!/";
	}
	if(varsta==""){
		document.getElementById("fvarsta").style.border="2px solid red";;
		errorMessage+="Varsta trebuie completata!/";
	}
	if(varsta<0 || varsta>100){
		document.getElementById("fvarsta").style.border="2px solid red";;
		errorMessage+="Varsta trebuie sa fie un nume";
	}
	if(email==""){
		document.getElementById("femail").style.border="2px solid red";
		errorMessage+="Emailul trebuie completat!/";
	}
	if(email.includes("@")==false || email.includes(".com")==false){
		document.getElementById("femail").style.border="2px solid red";
		errorMessage+="Email invalid!/"
	}
	if(errorMessage!=""){
		window.alert(errorMessage);
	}
	else{
		document.getElementById("fname").style.border="2px solid black";
		document.getElementById("fdata").style.border="2px solid black";
		document.getElementById("fvarsta").style.border="2px solid black";
		document.getElementById("femail").style.border="2px solid black";
		window.alert("Datele sunt completate corect");
	}
}