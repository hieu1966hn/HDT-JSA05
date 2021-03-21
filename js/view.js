const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "welcomeScreen":
            document.getElementById('app').innerHTML = component.welcomeScreen;
            break;


        case "registerScreen":
            document.getElementById('app').innerHTML = component.registerScreen;
            const registerForm= document.getElementById('register-form');
                registerForm.addEventListener('submit',(e)=>{
                    e.preventDefault();
                    const data = {
                        firstName: registerForm.firstName.value.trim(),
                        lastName: registerForm.lastName.value.trim(),
                        email: registerForm.email.value.trim(),
                        password: registerForm.password.value,
                        confirmPassword: registerForm.confirmPassword.value
                    }
                    console.log(data);
                    controller.register(data);  // để kiểm tra lỗi ở đây
                })
            break;
    }
}
