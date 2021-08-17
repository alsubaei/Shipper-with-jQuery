const signup_form = document.forms["signup_form"];
const signup_formlogin_form = document.forms["login_form"];

const signup = document.getElementsByClassName("signup_btn");
const login = document.getElementsByClassName("login_btn");


document.getElementById("forgot_password").style.visibility = "hidden";
document.getElementById("enter_password").style.visibility = "hidden";
document.getElementById("signup_form").style.display = "none";
document.getElementById("FurnitureShipping_form").style.display = "none";
document.getElementById("CarShipping_form").style.display = "none";

const Furniture = document.getElementsByClassName("Furniture");
const Car = document.getElementsByClassName("Car");


//******************************************************************************* */
//display "color of empty fields"

function background_pink() {
    if (!document.getElementById("email").value)
        document.getElementById("email").style.background = "pink";

    for (let i = 0; i < signup_form.length - 1; i++) {
        if (!document.getElementById(signup_form.elements[i].id).value)
            document.getElementById(signup_form.elements[i].id).style.background = "pink";
    }
}

document.getElementById("submit_login").addEventListener("click", background_pink);
document.getElementById("submit_signup").addEventListener("click", background_pink);


//******************************************************************************* */
//display "forgot Password?"

const forgot_password = function() {
    document.getElementById("email").style.background = "white";
    document.getElementById("forgot_password").style.visibility = "visible"; //hidden
};

document.getElementById("pwd").addEventListener("focus", forgot_password);


//******************************************************************************* */
//display "enter the password"

const enter_password = function() {
    if (!document.getElementById("pwd").value && document.getElementById("email").value) {
        document.getElementById("pwd").required;
        document.getElementById("enter_password").style.visibility = "visible"; //hidden
        document.getElementById("pwd").style.background = "pink";
    }
};

document.getElementById("submit_login").addEventListener("click", enter_password);


//******************************************************************************* */
//display Signup

const display_signup = function() {
    document.getElementById("signup_form").style.display = "block";
    document.getElementById("login_form").style.display = "none";
};

for (let i = 0; i < signup.length; i++)
    signup[i].addEventListener("click", display_signup);


//******************************************************************************* */
//display Login

const display_login = function() {
    document.getElementById("login_form").style.display = "block";
    document.getElementById("signup_form").style.display = "none";
};

for (let i = 0; i < login.length; i++)
    login[i].addEventListener("click", display_login);


//******************************************************************************* */
//disdisplay "color of empty fields of sign up"

function background_White(y) {
    document.getElementById(y).style.background = "white";
}

for (let i = 0; i < signup_form.length - 1; i++) {

    signup_form.elements[i].addEventListener("change", function() {
        background_White(signup_form.elements[i].id)
    });
}


//******************************************************************************* */
//display FurnitureShipping from login or signup

const display_FurnitureShipping = function(x) {
    let flag = 0;
    for (let i = 0; i < x.length - 1; i++) {
        if (!document.getElementById(x.elements[i].id).value) flag++;
    }
    if (flag == 0) {
        document.getElementById("login_form").style.display = "none";
        document.getElementById("signup_form").style.display = "none";
        document.getElementById("FurnitureShipping_form").style.display = "block";
    }
};

document.getElementById("submit_login").addEventListener("click", function() {
    display_FurnitureShipping(login_form)
});
document.getElementById("submit_signup").addEventListener("click", function() {
    display_FurnitureShipping(signup_form)
});


//******************************************************************************* */
//display CarShipping_form

const display_CarShipping_form = function() {
    document.getElementById("FurnitureShipping_form").style.display = "none";
    document.getElementById("CarShipping_form").style.display = "block";
};

for (let i = 0; i < Car.length; i++) {
    Car[i].addEventListener("focus", display_CarShipping_form);
}


//******************************************************************************* */
//display FurnitureShipping_form

const display_FurnitureShipping_form = function() {
    document.getElementById("FurnitureShipping_form").style.display = "block";
    document.getElementById("CarShipping_form").style.display = "none";
};

for (let i = 0; i < Furniture.length; i++) {
    Furniture[i].addEventListener("focus", display_FurnitureShipping_form);
}