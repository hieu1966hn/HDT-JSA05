const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "welcomeScreen":
            document.getElementById('app').innerHTML = component.welcomeScreen;
            break;


        case "registerScreen":
            document.getElementById('app').innerHTML = component.registerScreen;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
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
            });

            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginScreen');
            });

            break;
        case "loginScreen":
            document.getElementById('app').innerHTML = component.loginScreen;

            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            });

            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit',(event)=>{
                event.preventDefault(); // tránh load lại trình duyệt 
                const dataLogin = {
                    email: loginForm.email.value,
                    password:loginForm.password.value
                }
                controller.login(dataLogin);// chưa có, giờ mình đi tạo. Để xét các trương hợp có lỗi, if(lỗi ) => ko cho submit
            })

            break;
    }
}
