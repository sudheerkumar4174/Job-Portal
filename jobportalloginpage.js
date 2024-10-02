/*let obj = {
    spd: {
        "teja@gmail.com": 4248,
        "uday@gmail.com": 4245
    }
};

localStorage.setItem("portaldata",JSON.stringify(obj));*/
//localStorage.setItem("currentUser","teja@gmail.com");
let obj = JSON.parse(localStorage.getItem("portaldata"));


let myForm = document.getElementById("myForm");
let email = document.getElementById("email");
let emailErrorMsg = document.getElementById("emailErrorMsg");
let password = document.getElementById("password");
let passwordErrorMsg = document.getElementById("passwordErrorMsg");
let loginResult = document.getElementById("loginResult");
let submit = document.getElementById("submit");

let mySigninForm = document.getElementById("mySigninForm");
let email1 = document.getElementById("email1");
let emailErrorMsg1 = document.getElementById("emailErrorMsg1");
let password1 = document.getElementById("password1");
let passwordErrorMsg1 = document.getElementById("passwordErrorMsg1");
let loginResult1 = document.getElementById("loginResult1");
let confirmPassword1 = document.getElementById("confirmpassword1");
let confirmPasswordErrorMsg1 = document.getElementById("confirmPasswordErrorMsg1");
let submit1 = document.getElementById("submit1");

let signup = document.getElementById("signup");
let loginContainer = document.getElementById("loginContainer");
let signinContainer = document.getElementById("signinContainer");
let loginBack = document.getElementById("loginBack");

function signupStorage(obj) {
    localStorage.setItem("portaldata", JSON.stringify(obj));
}

function retrivesignupStorage() {
    obj = JSON.parse(localStorage.getItem("portaldata"));
}
loginBack.addEventListener("click", function() {
    event.preventDefault();
    loginContainer.classList.remove("d-none");
    signinContainer.classList.add("d-none");
})
signup.addEventListener("click", function(event) {
    event.preventDefault();
    loginContainer.classList.add("d-none");
    signinContainer.classList.remove("d-none");
});
email.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorMsg.textContent = "Required*";
    } else {
        emailErrorMsg.textContent = "";
    }
});
password.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrorMsg.textContent = "Required*";
    } else {
        passwordErrorMsg.textContent = "";
    }
});

function check() {
    if (email.value === "") {
        emailErrorMsg.textContent = "Required*";
    }
    if (password.value === "") {
        passwordErrorMsg.textContent = "Required*";
    }
    if (email.value !== "" && password.value !== "") {
        return 1;
    } else {
        return 0;
    }
}

function check1() {
    if (email1.value === "") {
        emailErrorMsg1.textContent = "Required*";
    }
    if (password1.value === "") {
        passwordErrorMsg1.textContent = "Required*";
    }
    if (confirmPassword1.value === "") {
        confirmPasswordErrorMsg1.textContent = "Required*";
    }
    if (email1.value !== "" && password1.value !== "" && confirmPasswordErrorMsg1 !== "") {
        emailErrorMsg1.textContent = "";
        passwordErrorMsg1.textContent = "";
        confirmPasswordErrorMsg1.textContent = "";
        return 1;
    } else {
        return 0;
    }
}
submit.addEventListener("click", function(event) {
    event.preventDefault();
    let val = check();
    if (val === 1) {

        if (typeof(obj.spd[email.value]) === "undefined") {
            //console.log(obj.spd[email.value]);
            console.log(loginResult);
            loginResult.textContent = "There is no account with this mail.";
            console.log("Hi");
        } else {
            loginResult.textContent = "";
            console.log(obj.spd[email.value]);
            if (password.value == obj.spd[email.value]) {
                localStorage.setItem("currentUser",JSON.stringify(email.value));
                location.href="jobportal.html"
            } else {
                
                loginResult.textContent = "Enter valid password";
            }
        }
    }
});
submit1.addEventListener("click", function(event) {
    event.preventDefault();
    let val = check1();
    if (val === 1) {
        loginResult1.textContent = "";
        if (typeof(obj.spd[email1.value]) === "undefined") {
            if (password1.value === confirmPassword1.value) {
                obj.spd[email1.value] = parseInt(password1.value);
                signupStorage(obj);
                retrivesignupStorage();
                console.log(obj, "success");
            } else {
                loginResult1.textContent = "Both Password and ConfirmPassword should be same";
            }
            //obj.spd[email1.value]=

        } else {
            loginResult1.textContent = "Already mail exists";
        }

    }
});