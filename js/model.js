const model = {};

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

model.login = () => {

}