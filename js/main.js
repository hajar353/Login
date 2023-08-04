var inputName = document.querySelector('#inputName');
var inputEmail = document.querySelector('#inputEmail');
var inputPassword = document.querySelector('#inputPassword');
var buttonSignUp = document.querySelector('#buttonSignUp');
var inputEmailSignIn = document.querySelector('#inputEmailSignIn');
var inputPasswordSignIn = document.querySelector('#inputPasswordSignIn');
var buttonLogin = document.querySelector('#buttonLogin');

var userName = localStorage.getItem('name')






var errorMassege
var err = document.querySelector('#err');
var sucsses = document.getElementById('sucsses');




var inputs=[]
if (localStorage.getItem('inputs') != null) {
  inputs = JSON.parse(localStorage.getItem('inputs'));
}

function SignUp() {
    
    if (valdation() == true) {

        if (check() == false) {
            var inputValues = {
                name: inputName.value,
                email: inputEmail.value,
                password: inputPassword.value
            }
            inputs.push(inputValues)
            localStorage.setItem("inputs", JSON.stringify(inputs));
            err.innerHTML = ""
            sucsses.innerHTML = "sucsses"

            window.location.replace("signin.html");
        } else {
            alert('email is exist')
        }




    }
    else {
        errorMassege = valdation()
        err.innerHTML = errorMassege

    }

}

function check() {
    for (var i=0; i < inputs.length; i++) {
        if (inputEmail.value==inputs[i].email) {
            return true
        }
    }
    return false
}



function valdation() {
    var regexName = /[a-z]{3,20}/i
    var regexEmail = /[a-z0-9]@(gmail|yahoo)\.com/i
    var regexPassword = /[a-z0-9]{5,10}/i
    if (regexName.test(inputName.value) == false) {
        return "Enter name At least 3 carachters"
    }
    else if (regexEmail.test(inputEmail.value) == false) {
        return "Enter email like name@gmail/yahoo.com"
    }
    else if (regexPassword.test(inputPassword.value) == false) {
        return "Enter the same password "
    }
    return true;
}



// ======================================================================logIn=========================================





var users1 = [];

users1 = JSON.parse(localStorage.getItem('inputs'))


function logIn() {
 if(valdationLogin()==true){

    var email = inputEmailSignIn.value
    var password = inputPasswordSignIn.value
    console.log(email);
    for (var i = 0; i < users1.length; i++) {

        if (users1[i].email == email && users1[i].password == password) {
            localStorage.setItem('name', users1[i].name)
            // console.log('ok')
            window.location.replace("home.html");



        }
        // else {
        //     console.log('no');

        // }

    }
 }
 else{
    errorMassege = valdationLogin()
    err.innerHTML = errorMassege
 }

}
document.getElementById('gg').innerHTML = `welcome ${userName}`


function valdationLogin(){
    var Name = /[a-z]{3,20}/i
    var Password = /[a-z0-9]{5,10}/i

    if (Name.test(inputEmailSignIn.value) == false) {
        return "Enter email like name@gmail/yahoo.com"
    }
    else if (Password.test(inputPasswordSignIn.value) == false) {
        return  "Enter password from a to z or 0 to 9 only 10 charcters and At least 5 "
    }
    return true;
}