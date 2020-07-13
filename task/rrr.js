function rrr(){
var password=document.forms["signup"]["password"].value;
var firstname =document.forms["signup"]["firstname"].value;
var lastname =document.forms["signup"]["lastname"].value;

if (firstname==null || firstname.length<3){
    alert("firstName should be greater than 3");
    return(false);
}
if (lastname==null || lastname.length<3){

    alert("lastName should be greater than 3");
    return(false);
}
 if(password.length < 8)
 {
alert("password should be greater than 8");

 }

}