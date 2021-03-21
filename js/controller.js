const controller = {};
controller.register = (data) => {
    if (data.firstName.trim() === "") { // nếu như firstName là rỗng
        document.getElementById('first-name-error').innerText = 'please input first name'
    }
    else {
        document.getElementById("first-name-error").innerText = "";
    }

    if (data.lastName === "") {
        document.getElementById('last-name-error').innerText = 'please input last name'
    }
    else {
        document.getElementById('last-name-error').innerText = ''
    }

    if (data.email === "") {
        document.getElementById('email-error').innerText = "please input email"
    }
    else {
        document.getElementById('email-error').innerText = ""
    }

    if (data.password === "") {
        document.getElementById('password-error').innerText = "please input password"
    }
    else {
        document.getElementById('password-error').innerText = ""
    }

    if (data.confirmPassword === "") {
        document.getElementById('confirm-password-error').innerText = "please input confirm password"
    }
    else if(data.confirmPassword.trim() !== data.password.trim()){
        document.getElementById('confirm-password-error').innerText = "Password does not match"
    }
    else{
        document.getElementById('confirm-password-error').innerText = ""
    }


    
}