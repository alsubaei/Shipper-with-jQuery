//******************************************************************************* */
// global variables 

const signup_form = $("form#signup_form");
const login_form = $("form#login_form");

const signup = $(".signup_btn");
const login = $(".login_btn");

//input of password of login form
const password = $("#pwd");

const FurnitureShipping_form = $("#FurnitureShipping_form");
const CarShipping_form = $("#CarShipping_form");
const GoodsShipping_form = $("#GoodsShipping_form");

const focus = $(".form-check-inline");

const Furniture = $(".Furniture");
const Car = $(".Car");
const Goods = $(".Goods");

let g;

const Header_Links = $(".nav-active");

//******************************************************************************* */
// first actions
$(document).ready(function() {
    $("#forgot_password").css("visibility", "hidden");
    $("#enter_password").css("visibility", "hidden");
    signup_form.css("display", "none");
    FurnitureShipping_form.hide();
    CarShipping_form.hide();
    GoodsShipping_form.hide();
    login_form.css("display", "block");
});


// //******************************************************************************* */.
// //focus and blur background color of radio button

const bg_radio_button = function(x) {
    const buttons = document.querySelectorAll(x.val() + 'input[type="radio"]');
    const bg_button = $("." + x.val() + "form-check-inline");
    console.log(bg_button);
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



//******************************************************************************* */.
//The style of active links in header
//made by Eng_yaserhadi

for (let i = 0; i < Header_Links.length; i++) {
    Header_Links[i].click(function() {
        Header_Links.removeClass("nav-active-style");
        Header_Links.addClass("nav-active-style");
    });
}


//******************************************************************************* */.
//display FurnitureShipping_form

const display_FurnitureShipping_form = function() {
    CarShipping_form.hide();
    GoodsShipping_form.hide();
    $("#FurnitureShipping_form .Furniture")[0].checked = "true";
    if (g != 1)
        $("#FurnitureShipping_form .Furniture")[1].checked = "true";
    if (g == 1)
        bg_radio_button(FurnitureShipping_form);
    FurnitureShipping_form.show();
};

for (let i = 0; i < Furniture.length; i++) {
    Furniture[i].addEventListener("click", display_FurnitureShipping_form);
}


//******************************************************************************* */
//display "color of empty fields"

function background_pink() {

    if (!$("#email").value) {
        $("#email").css("background-color", "pink");
    }


    for (let i = 0; i < signup_form.length - 1; i++) {
        if (!document.getElementById(signup_form.elements[i].id).value)
            document.getElementById(signup_form.elements[i].id).style.background = "pink";
    }
}

$("#submit_login").click(background_pink);
$("#submit_signup").click(background_pink);


//******************************************************************************* */
//display "forgot Password?"

const forgot_password = function() {
    $("#email").css("background-color", "white");
    $("#forgot_password").css("visibility", "visible"); //hidden
};

password.focus(forgot_password);


//******************************************************************************* */
//display "enter the password"

const enter_password = function() {
    if (!password.value && $("#email").value) {
        password.required;
        $("#enter_password").css("visibility", "visible"); //hidden
        password.css("background-color", "pink");
        return false;
    }
    return true;
};

$("#submit_login").click(enter_password);


//******************************************************************************* */
//display Signup

const display_signup = function() {
    login_form.css("display", "none");
    FurnitureShipping_form.hide();
    CarShipping_form.hide();
    GoodsShipping_form.hide();
    signup_form.css("display", "block");
};

for (let i = 0; i < signup.length; i++)
    signup[i].addEventListener("click", display_signup);


//******************************************************************************* */
//display Login

const display_login = function() {
    signup_form.css("display", "none");
    FurnitureShipping_form.hide();
    CarShipping_form.hide();
    GoodsShipping_form.hide();
    login_form.css("display", "block");
};

for (let i = 0; i < login.length; i++)
    login[i].addEventListener("click", display_login);


//******************************************************************************* */
//disdisplay "color of empty fields of sign up"

function background_White(y) {
    $("#" + y).css("background-color", "white");
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
        if (!$("#" + x.elements[i].id).value) flag++;
    }
    if (flag == 0) {
        login_form.css("display", "none");
        signup_form.css("display", "none");
        for (let i = 0; i < Furniture.length; i++) {
            Furniture[i].checked = "true";
        }
        bg_radio_button(FurnitureShipping_form);
        FurnitureShipping_form.show();
    }
};

$("#submit_login").click(function() {
    if (!enter_password())
        background_pink();
    else
        display_FurnitureShipping(login_form);
});

/**Yh 20082021 start:try onsubmit */
$("#submit_login").submit(function(event) {
    event.preventDefault();
});
/**Yh 20082021 End:try onsubmit */

$("#submit_signup").click(function() {
    display_FurnitureShipping(signup_form);
});

$("#submit_signup").submit(function(event) {
    event.preventDefault();
});


//******************************************************************************* */
//display CarShipping_form

const display_CarShipping_form = function() {
    FurnitureShipping_form.hide();
    GoodsShipping_form.hide();
    $("#CarShipping_form .Car")[0].checked = "true";
    $("#CarShipping_form .Car")[1].checked = "true";
    bg_radio_button(CarShipping_form);
    CarShipping_form.show();
};

for (let i = 0; i < Car.length; i++) {
    Car[i].addEventListener("click", display_CarShipping_form);
}

//******************************************************************************* */
//display GoodsShipping_form

const display_GoodsShipping_form = function() {
    CarShipping_form.hide();
    FurnitureShipping_form.hide();
    $("#GoodsShipping_form .Goods")[0].checked = "true";
    $("#GoodsShipping_form .Goods")[1].checked = "true";
    bg_radio_button(GoodsShipping_form);
    GoodsShipping_form.show();
};

for (let i = 0; i < Goods.length; i++) {
    if (i !== 1) {
        Goods[i].addEventListener("click", display_GoodsShipping_form);
    } else {
        g = 1;
        Goods[i].addEventListener("click", display_FurnitureShipping_form);
    }
}


//******************************************************************************* */
//functions of plus and minus button

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