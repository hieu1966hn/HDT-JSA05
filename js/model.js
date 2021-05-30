const model = {};
model.currentUser = undefined;


// 2 cái dưới dùng để lưu dữ liệu cuộc trò chuyện
model.conversations = undefined;
//Thuộc tính lưu lại nhưng cuộc trò chuyện và đặt vào trong conversations

/// Cuôc trò chuyện đang được hiện thị lên trên màn hình (cuộc trò chuyện hiện tại)
model.currentConversations = undefined;

// lưu cái này để add tên collection của mình trên firebase
model.collectionName = "conversations"


model.register = async (data) => {
    //async - await: để đợi server trả về giá trị rồi mới thực hiện tiếp code
    // và bây giờ setup firebase

    // = bắt buộc đợi firebase gửi trả về kết quả thành công 
    try {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);
        // đã tạo xong user


        //cập nhật lại thông tin user hiện tại
        firebase.auth().currentUser.updateProfile({
            displayName: data.lastName + " " + data.firstName
        });



        // gửi mail xác thực email đã đăng kí
        firebase.auth().currentUser.sendEmailVerification();

        // Hiển thị thông báo để người dùng check gmail
        alert('Your email has been registered, please check your email');

        //sau khi thông báo xong. Thì chuyển người dùng về màn hình đăng nhập
        view.setActiveScreen('loginScreen');

    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}

model.login = async (dataLogin) => { // thao tác với firebase
    try {
        const response = await firebase // await để đợi firebase phản hồi
            .auth()
            .signInWithEmailAndPassword(dataLogin.email, dataLogin.password);

    } // chay xong try la da login
    catch (err) { // err: là 1 object chứa rất nhiều trường trong đó
        // xet loi email truoc
        console.log("err", err);
        if (err.code == 'auth/user-not-found'  // day là các tin nhắn mặc định của firebase
            || err.code == "auth/invalid-email"   // sẽ có video giải thích vì sao lại vậy
        ) 
        {
            document.getElementById('email-error').innerText = err.message;
        }

        else if (err.code == 'auth/wrong-password') {
            console.log("err:", err);
            document.getElementById('password-error').innerText = err.message;
        }
    }
}

model.createConversation = (data)=>{
    firebase.firestore().collection(model.collectionName).add(data);
    view.setActiveScreen('chatScreen',true);
    //them true để tránh hàm lắng nghe thay đổi nó thêm 1 lần nữa

}

model.addMessage = (message)=>{ // nhan vao 1 tin nhan
    const dataToUpDate = {
        messages: firebase.firestore.FieldValue.arrayUnion(message)
        // cu phap cua firebase de update them vao trong cac truong cua no
    }

    firebase.firestore()
    .collection(model.collectionName)
    .doc("FWf31Go1tS3XIKx2k7Fr")
    .update(dataToUpDate);
}