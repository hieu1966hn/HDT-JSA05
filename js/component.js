const component = {};


component.welcomeScreen = `
    <h1>Welcome to my Screen</h1>
`;

component.registerScreen = `
<div class="register-container">
            <div class="aside-right">
                <div class="header">
                    <h3>Mindx Chat</h3>
                </div>

                <form id="register-form">
                    <div class="input-name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="Pls input your FN">
                            <div class="error" id="first-name-error"></div>
                        </div>

                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Pls input your LN">
                            <div class="error" id="last-name-error"></div>
                        </div>
                    </div>

                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Input your email">
                        <div class="error" id="email-error"></div>
                    </div>

                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Type your Password">
                        <div class="error" id="password-error"></div>
                    </div>

                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm your password">
                        <div class="error" id="confirm-password-error"></div>
                    </div>

                    <!-- xong het phan input -->

                    <div class="form-action">
                        <span class="cursor-pointer" id="redirect-to-login">Already have an account? Login</span>
                    </div>

                    <button class="btn" type="submit">
                        Register
                    </button>
                </form>


            </div>
        </div>
`