function validatefirstname(){
    var fn=document.getElementById('First-Name').value;
    if(fn.length<5){
        document.getElementById('firstname').innerHTML='POOR';
        document.getElementById('firstname').style.color='red';
    }
    else{
        document.getElementById('firstname').innerHTML='Good';
        document.getElementById('firstname').style.color='green';
    }
}
function validatelastname(){
    var ln=document.getElementById('Last-Name').value;
    if(ln.length<5){
        document.getElementById('lastname').innerHTML='POOR';
        document.getElementById('lastname').style.color='red';
    }
    else{
        document.getElementById('lastname').innerHTML='Good';
        document.getElementById('lastname').style.color='green';
    }
}
function validatemail(){
    var mail=document.getElementById('E-Mail').value;
    if(mail.length<5){
        document.getElementById('mail').innerHTML='POOR';
        document.getElementById('mail').style.color='red';
    }
    else{
        document.getElementById('mail').innerHTML='Good';
        document.getElementById('mail').style.color='green';
    }
}
function validatepassword(){
    var pass=document.getElementById('Password').value;
    if(pass.length<6){
        document.getElementById('pass').innerHTML='POOR';
        document.getElementById('pass').style.color='red';
    }
    else{
        document.getElementById('pass').innerHTML='Good';
        document.getElementById('pass').style.color='green';
    }
}
function validaterepassword(){
    var repass=document.getElementById('Repassword').value;
    if(repass.length<6){
        document.getElementById('repass').innerHTML='POOR OR MISMATCH';
        document.getElementById('repass').style.color='red';
    }
    else{
        document.getElementById('repass').innerHTML='Good';
        document.getElementById('repass').style.color='green';
    }
}
function validateage(){
    var age=document.getElementById('AGE').value;
    if(age.length<1){
        document.getElementById('age').innerHTML='POOR';
        document.getElementById('age').style.color='red';
    }
    else{
        document.getElementById('age').innerHTML='Good';
        document.getElementById('age').style.color='green';
    }
}
function validatephonenumber(){
    var phno=document.getElementById('Phone#').value;
    if(phno.length<10){
        document.getElementById('phone').innerHTML='POOR';
        document.getElementById('phone').style.color='red';
    }
    else{
        document.getElementById('phone').innerHTML='Good';
        document.getElementById('phone').style.color='green';
    }
}
function validateaddress(){
    var add=document.getElementById('Address').value;
    if(add.length<10){
        document.getElementById('address').innerHTML='POOR';
        document.getElementById('address').style.color='red';
    }
    else{
        document.getElementById('address').innerHTML='Good';
        document.getElementById('address').style.color='green';
    }
}
function validatestate(){
    var state=document.getElementById('State').value;
    if(state.length<5){
        document.getElementById('state').innerHTML='POOR';
        document.getElementById('state').style.color='red';
    }
    else{
        document.getElementById('state').innerHTML='Good';
        document.getElementById('state').style.color='green';
    }
}
function validate(){
    var fn=document.getElementById('First-Name').value;
    var ln=document.getElementById('Last-Name').value;
    var mail=document.getElementById('E-Mail').value;
    var pass=document.getElementById('Password').value;
    var repass=document.getElementById('Repassword').value;
    var age=document.getElementById('AGE').value;
    var phno=document.getElementById('Phone#').value;
    var add=document.getElementById('Address').value;
    var state=document.getElementById('State').value;
    if(fn.length<5 ||ln.length<5 ||mail.length<5 ||pass.length<6 || repass.length<6 || age.length<1 || phno.length<10 || add.length<10 || state.length<5){
        return false;
    }
    return true;
}