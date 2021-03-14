const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "welcomeScreen":
            document.getElementById('app').innerHTML = component.welcomeScreen;
            break;


        case "registerScreen":
            document.getElementById('app').innerHTML = component.registerScreen;
            break;
    }
}
