const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {



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
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault(); // tránh load lại trình duyệt 
                const dataLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(dataLogin);// chưa có, giờ mình đi tạo. Để xét các trương hợp có lỗi, if(lỗi ) => ko cho submit
            })

            break;

        case "chatScreen":
            // console.log(model.currentUser);

            document.getElementById('app').innerHTML = component.chatScreen;
            const sendMessageForm = document.getElementById('send-messages-form');
            sendMessageForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const message = {
                    owner: model.currentUser.email, // hien thi email cua nguoi chat
                    content: sendMessageForm.message.value
                }

                const myLove ={
                    owner: "Ngọc Trinh",
                    content: sendMessageForm.message.value + " too"
                }

                view.addMessage(message); // de day no vao list chat
                view.addMessage(myLove);
                sendMessageForm.message.value = "";
            });

            break;
    }
}


view.addMessage = (message) => {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-container');
    if (model.currentUser.email === message.owner) {
        messageWrapper.classList.add('mine');
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>
        `
    } else {
        messageWrapper.classList.add('their');
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }

    document.querySelector(".list-messages").appendChild(messageWrapper);
}