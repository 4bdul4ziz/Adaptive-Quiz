
function validate(event){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("phno").value;
    if(!!email && !!password)
    {
        
        window.location.href="./start.html";   
    }
    else
    {
        alert("Enter a valid e-mail / phone number");
    }
}