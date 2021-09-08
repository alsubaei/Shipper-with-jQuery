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
const GoodsShipping_form = document.getElementById("GoodsShipping_form");

const focus = document.getElementsByClassName("form-check-inline");

const Furniture = document.getElementsByClassName("Furniture");
const Car = document.getElementsByClassName("Car");
const Goods = document.getElementsByClassName("Goods");

let g;

const Header_Links = document.getElementsByClassName("nav-active");

//******************************************************************************* */
// first actions

if (document.readyState === "loading") {
    document.getElementById("forgot_password").style.visibility = "hidden";
    document.getElementById("enter_password").style.visibility = "hidden";
    signup_form.style.display = "none";
    FurnitureShipping_form.style.display = "none";
    CarShipping_form.style.display = "none";
    GoodsShipping_form.style.display = "none";
    login_form.style.display = "block";
}

// //******************************************************************************* */.
// //focus and blur background color of radio button

const bg_radio_button = function(x) {
    const buttons = x.querySelectorAll('input[type="radio"]');
    const bg_button = x.getElementsByClassName("form-check-inline");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            bg_button[i].classList.remove("focus_color");
            bg_button[i].classList.remove("blur_color");
            bg_button[i].classList.add("focus_color");
        } else {
            bg_button[i].classList.remove("focus_color");
            bg_button[i].classList.remove("blur_color");
            bg_button[i].classList.add("blur_color");
        }
    }
};

// const bg_radio_button = function(x) {
//     const buttons = x.querySelectorAll('input[type="radio"]');
//     const bg_button = x.getElementsByClassName("form-check-inline");
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('change', function() {
//             this.classList.remove("focus_color");
//             this.classList.remove("blur_color");
//             if (this.checked) {

//                 this.classList.add("focus_color");
//             } else {

//                 this.classList.add("blur_color");
//             }
//         });
//     }
// }

// $('.input-group').on('click', '.button-plus', function(e) {
//     incrementValue(e);
// });


// $('.input-group').on('click', '.button-minus', function(e) {
//     decrementValue(e);
// });

function addClass(currentElement, addedClassname) {
    currentElement.classList.add(addedClassname);
}



//******************************************************************************* */.
//The style of active links in header
//made by Eng_yaserhadi

for (let i = 0; i < Header_Links.length; i++) {
    Header_Links[i].addEventListener("click", function() {
        removeClass(Header_Links, "nav-active-style");
        addClass(this, "nav-active-style");
    });
}

function removeClass(elemnts, removedCalssName) {
    for (let i = 0; i < elemnts.length; i++) {
        elemnts[i].classList.remove(removedCalssName);
    }
}

function addClass(currentElement, addedClassname) {
    currentElement.classList.add(addedClassname);
}


//******************************************************************************* */.
//display FurnitureShipping_form

const display_FurnitureShipping_form = function() {
    CarShipping_form.style.display = "none";
    GoodsShipping_form.style.display = "none";
    FurnitureShipping_form.getElementsByClassName("Furniture")[0].checked = "true";
    if (g != 1)
        FurnitureShipping_form.getElementsByClassName("Furniture")[1].checked = "true";
    if (g == 1)
        bg_radio_button(FurnitureShipping_form);
    FurnitureShipping_form.style.display = "block";
};

for (let i = 0; i < Furniture.length; i++) {
    Furniture[i].addEventListener("click", display_FurnitureShipping_form, true);
}


//******************************************************************************* */
//display "color of empty fields"

function background_pink() {

    if (!document.getElementById("email").value) {
        document.getElementById("email").style.background = "pink";
    }


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

document.getElementById("submit_login").addEventListener("click", enter_password);


//******************************************************************************* */
//display Signup

const display_signup = function() {
    login_form.style.display = "none";
    FurnitureShipping_form.style.display = "none";
    CarShipping_form.style.display = "none";
    GoodsShipping_form.style.display = "none"
    signup_form.style.display = "block";
};

for (let i = 0; i < signup.length; i++)
    signup[i].addEventListener("click", display_signup);


//******************************************************************************* */
//display Login

const display_login = function() {
    signup_form.style.display = "none";
    FurnitureShipping_form.style.display = "none";
    CarShipping_form.style.display = "none";
    GoodsShipping_form.style.display = "none"
    login_form.style.display = "block";
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
        for (let i = 0; i < Furniture.length; i++) {
            Furniture[i].checked = "true";
        }
        bg_radio_button(FurnitureShipping_form);
        FurnitureShipping_form.style.display = "block";
    }
};

document.getElementById("submit_login").addEventListener("click", function() {
    if (!enter_password())
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
    display_FurnitureShipping(signup_form);
});

document.getElementById("submit_signup").addEventListener("submit", function(event) {
    event.preventDefault();
});


//******************************************************************************* */
//display CarShipping_form

const display_CarShipping_form = function() {
    FurnitureShipping_form.style.display = "none";
    GoodsShipping_form.style.display = "none";
    CarShipping_form.getElementsByClassName("Car")[0].checked = "true";
    CarShipping_form.getElementsByClassName("Car")[1].checked = "true";
    bg_radio_button(CarShipping_form);
    CarShipping_form.style.display = "block";
};

for (let i = 0; i < Car.length; i++) {
    Car[i].addEventListener("click", display_CarShipping_form, true);
}

//******************************************************************************* */
//display GoodsShipping_form

const display_GoodsShipping_form = function() {
    CarShipping_form.style.display = "none";
    FurnitureShipping_form.style.display = "none";
    GoodsShipping_form.getElementsByClassName("Goods")[0].checked = "true";
    GoodsShipping_form.getElementsByClassName("Goods")[1].checked = "true";
    bg_radio_button(GoodsShipping_form);
    GoodsShipping_form.style.display = "block";
};

for (let i = 0; i < Goods.length; i++) {
    if (i !== 1) {
        Goods[i].addEventListener("click", display_GoodsShipping_form, true);
    } else {
        g = 1;
        Goods[i].addEventListener("click", display_FurnitureShipping_form, true);
    }
}


//******************************************************************************* */
//functions of plus and minus button

// function incrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

//     if (!isNaN(currentVal)) {
//         parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//         parent.find('input[name=' + fieldName + ']').val(0);
//     }
// }

// function decrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
//     if (!isNaN(currentVal) && currentVal > 0) {
//         parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//         parent.find('input[name=' + fieldName + ']').val(0);
//     }
// }
// //******************************************************************************* */.
//yh 04/09/2021

//increase/decrease Bedrooms functions  
function add_Bedrooms() {
    var value = parseInt(document.getElementById('Bedrooms_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('Bedrooms_number').value = value;
}

function sub_Bedrooms() {
    var value = parseInt(document.getElementById('Bedrooms_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('Bedrooms_number').value = value;
}

//increase/decrease Bedrooms functions
function add_Apartment() {
    var value = parseInt(document.getElementById('Apartment_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('Apartment_number').value = value;
}

function sub_Apartment() {
    var value = parseInt(document.getElementById('Apartment_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('Apartment_number').value = value;
}
//increase/decrease Bedrooms functions
function add_Electronic() {
    var value = parseInt(document.getElementById('Electronic_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('Electronic_number').value = value;
}

function sub_Electronic() {
    var value = parseInt(document.getElementById('Electronic_number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('Electronic_number').value = value;
}