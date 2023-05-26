function valideazaForm(){
    let nume = $("#fname").val();
    let dataNasterii = $("#fdata").val();
    let varsta = $("#fvarsta").val();
    let email = $("#femail").val();
    let errorMessage = "";

    if(nume==""){
        $("#fname").css("border", "2px solid red");
        errorMessage+="Numele trebuie completat!/";
    }
    if(dataNasterii==""){
        $("#fdata").css("border", "2px solid red");
        errorMessage+="Data nasterii trebuie completata!/";
    }
    if(varsta==""){
        $("#fvarsta").css("border", "2px solid red");
        errorMessage+="Varsta trebuie completata!/";
    }
    if(varsta<0 || varsta>100){
        $("#fvarsta").css("border", "2px solid red");
        errorMessage+="Varsta trebuie sa fie un nume";
    }
    if(email==""){
        $("#femail").css("border", "2px solid red");
        errorMessage+="Emailul trebuie completat!/";
    }
    if(email.includes("@")==false || email.includes(".com")==false){
        $("#femail").css("border", "2px solid red");
        errorMessage+="Email invalid!/"
    }
    if(errorMessage!=""){
        window.alert(errorMessage);
    }
    else{
        $("#fname").css("border", "2px solid black");
        $("#fdata").css("border", "2px solid black");
        $("#fvarsta").css("border", "2px solid black");
        $("#femail").css("border", "2px solid black");
        window.alert("Datele sunt completate corect");
    }
}





