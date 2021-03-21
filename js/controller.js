const controller = {};
controller.register = (data) => {
    if (data.firstName.trim() === "") { // nếu như firstName là rỗng
        document.getElementById('first-name-error').innerText = 'please input first name'
    }
    else {
        document.getElementById("first-name-error").innerText = "";
    }

    if(data.lastName ===""){
        document.getElementById('last-name-error').innerText = 'please input last name'
    }
    else{
        document.getElementById('last-name-error').innerText = ''
    }

    if(data.email ===""){
        document.getElementById('email-error').innerText="please input email"
    }
}