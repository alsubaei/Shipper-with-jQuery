//******************************************************************************* */
// global variables 


const signup_form = document.forms["signup_form"];
const login_form = document.forms["login_form"];

const signup = document.getElementsByClassName("signup_btn");
const login = document.getElementsByClassName("login_btn");

//input of password of login form
const password = document.getElementById("pwd");

const FurnitureShipping_form = document.getElementById("FurnitureShipping_form");
const CarShipping_form = document.getElementById("CarShipping_form");

const focus = document.getElementsByClassName("form-check-inline");

const Furniture = document.getElementsByClassName("Furniture");
const Car = document.getElementsByClassName("Car");


//******************************************************************************* */
// first actions

if (document.readyState === "loading") {
    document.getElementById("forgot_password").style.visibility = "hidden";
    document.getElementById("enter_password").style.visibility = "hidden";
    signup_form.style.display = "none";
    FurnitureShipping_form.style.display = "none";
    CarShipping_form.style.display = "none";
}


//******************************************************************************* */
//focus color
// if (FurnitureShipping_form.style.display == "block") {}
// if (CarShipping_form.style.display == "block") {}
 
//******************************************************************************* */
//display "color of empty fields"

function background_pink() {

    if (!document.getElementById("email").value){
        document.getElementById("email").style.background = "pink";
    }
        

    for (let i = 0; i < signup_form.length - 1; i++) {
        if (!document.getElementById(signup_form.elements[i].id).value)
            document.getElementById(signup_form.elements[i].id).style.background = "pink";
    }
}

//document.getElementById("submit_login").addEventListener("click", background_pink);
document.getElementById("submit_signup").addEventListener("click", background_pink);


//******************************************************************************* */
//display "forgot Password?"

const forgot_password = function() {
    document.getElementById("email").style.background = "white";
    document.getElementById("forgot_password").style.visibility = "visible"; //hidden
};

password.addEventListener("focus", forgot_password);


//******************************************************************************* */
//display "enter the password"

const enter_password = function() {
    if (!password.value && document.getElementById("email").value) {
        password.required;
        document.getElementById("enter_password").style.visibility = "visible"; //hidden
        password.style.background = "pink";
        return false;
    }
    return true;
};

//document.getElementById("submit_login").addEventListener("click", enter_password);


//******************************************************************************* */
//display Signup
 
const display_signup = function() {
    signup_form.style.display = "block";
    login_form.style.display = "none";
};

for (let i = 0; i < signup.length; i++)
    signup[i].addEventListener("click", display_signup);

 
//******************************************************************************* */
//display Login
 
const display_login = function() {
    login_form.style.display = "block";
    signup_form.style.display = "none";
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
        login_form.style.display = "none";
        signup_form.style.display = "none";
        FurnitureShipping_form.style.display = "block";
        if (focus[0].className.includes("focus_color") == false && focus[4].className.includes("focus_color") == false) {
            focus[0].className += " focus_color";
            focus[4].className += " focus_color";
        }
    }
};



document.getElementById("submit_login").addEventListener("click", function() {
    if(!enter_password())
        background_pink();
    else
        display_FurnitureShipping(login_form);
});

 /**Yh 20082021 start:try onsubmit */
document.getElementById("submit_login").addEventListener("submit", function(event) {
        event.preventDefault();
});

/**Yh 20082021 End:try onsubmit */

document.getElementById("submit_signup").addEventListener("click", function() {
    display_FurnitureShipping(signup_form)
});


//******************************************************************************* */
//display CarShipping_form

const display_CarShipping_form = function() {
    FurnitureShipping_form.style.display = "none";
    CarShipping_form.style.display = "block";

    if (focus[7].className.includes("focus_color") == false && focus[10].className.includes("focus_color") == false) {
        focus[7].className += " focus_color";
        focus[10].className += " focus_color";
    }
};

for (let i = 0; i < Car.length; i++) {
    Car[i].addEventListener("focus", display_CarShipping_form, true);
}


//******************************************************************************* */.
//display FurnitureShipping_form

const display_FurnitureShipping_form = function() {
    FurnitureShipping_form.style.display = "block";
    CarShipping_form.style.display = "none";
};

for (let i = 0; i < Furniture.length; i++) {
    Furniture[i].addEventListener("focus", display_FurnitureShipping_form, true);
}


//******************************************************************************* */.

function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
});