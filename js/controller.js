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
    else if (data.confirmPassword.trim() !== data.password.trim()) {
        document.getElementById('confirm-password-error').innerText = "Password does not match"
    }
    else {
        document.getElementById('confirm-password-error').innerText = ""
    }


    /// bươc kiểm tra điều kiện đăng kí
    if (data.firstName !== "" &&
        data.lastName !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.password === data.confirmPassword
    ) {
        model.register(data); // truyền dữ liệu mình nhập vào model.js
    }
}



controller.login = (dataLogin) => {
    if (dataLogin.email.trim() === "") {
        document.getElementById('email-error').innerText = "please input email";
    }
    else {
        document.getElementById('email-error').innerText = "";
    }

    if (dataLogin.password.trim() === "") {
        document.getElementById('password-error').innerText = "please type password";
    }
    else {
        document.getElementById('password-error').innerText = "";
    }


    if (dataLogin.email !== "" && dataLogin.password !== "") {
        model.login(dataLogin); // dữ liệu đã được lọc sạch. => gửi lên firebase xác thực
    }

}

controller.createConversationScreen = (newConversation)=>{
    if(newConversation.conversationTitle.trim() === ""){
        document.getElementById('conversation-name-error').innerText='Please input conversation Name ...';
    }
    else{
        document.getElementById('conversation-name-error').innerText='';
    }

    if(newConversation.conversationEmail.trim() === ""){
        document.getElementById('conversation-email-error').innerText='Please input conversation Email ...';
    }
    else{
        document.getElementById('conversation-email-error').innerText='';
    }


    if(newConversation.conversationTitle.trim() === "" && newConversation.conversationEmail.trim() === ""){
        const data={
            title: newConversation.conversationTitle,
            users: [newConversation.conversationEmail, model.currentUser.email],
            createdAt: (new Date()).toISOString(), // lay ra thoi gian tao cuoc tro truyen
            message: []
        }
        // sau khi tao xong data chua thong tin can thiet, ta gui no toi firebase thong qua model
        model.createConversation(data);
    }
}