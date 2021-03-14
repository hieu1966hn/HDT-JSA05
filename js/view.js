const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "welcomeScreen":
            document.getElementById('app').innerHTML = component.welcomeScreen;
            break;
    }
}
