const init = () => {
  console.log(" windown loaded");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDco_mHLZX61GSTIohHJLB3yW-rP-qZKjw",
    authDomain: "hdt-jsao5.firebaseapp.com",
    projectId: "hdt-jsao5",
    storageBucket: "hdt-jsao5.appspot.com",
    messagingSenderId: "1012506478897",
    appId: "1:1012506478897:web:2c32a3f4126a5d83e58810"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase.app().name);




  /// lắng nghe sự thay đổi của user
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) { // neu ton tai user thi =>
      console.log("user", user); // in ra user da
      view.setActiveScreen('chatScreen');
      // User is signed in.
    } else {
      // No user is signed in.
      view.setActiveScreen("loginScreen")
    }
  });
};


window.onload = init; // khi web chay xong  thì chạy vào đây