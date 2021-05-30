const component = {};


component.chatScreen = `
<div class="chat-container">
<div class="header">
    <h1>MindX chat</h1>
</div>
<div class="side-bar">

</div>
<div id="sign-out" class="cursor" style="border: none; background-color: rgb(207,23,23);
 position: absolute; 
 top: 15px;
 right: 15px;
 font-size: 20px;
 width: fit-content;
 height: line-height: 30px;
 border-radius: 5px;" > 
    Sign-out
</div>
<div class="main">
    <div class="aside-left">
        <div class="create-conversation">
            <button class="btn">
                + New conversation
            </button>
        </div>
        <div class="list-conversation">
            <div class="conversation current cursor-pointer">
                <div class="conversation-title">First conversation</div>
                <div class="conversation-num-user">2 users</div>
            </div>
        </div>
    </div>
    <div class="conversation-detail">
        <div class="conversation-header">
            First conversation
        </div>
        <div class="list-messages">
            <div class="message-container mine">
                <div class="content">
                    hello world
                </div>
            </div>

            <div class="message-container their">
                <div class="owner">
                    abcxyz@gmail.com
                </div>
                <div class="content">
                    hiiiiiiiii
                </div>
            </div>
        </div>
        <form id="send-messages-form">
            <div class="input-wrapper">
                <input type="text" autocomplete="off" name="message" placeholder="Type a message">
            </div>
            <button class="btn" type="submit">
                Send
            </button>
        </form>
    </div>
    <div class="aside-right">
        <div class="list-users">

        </div>
        <form id="add-user-form">
            <div class="input-wrapper">
                <input type="text" placeholder="Input friend email" name="email">
                <div class="error" id="add-user-email-error"></div>
            </div>
            <button class="btn" type="submit">Save</button>
        </form>
    </div>
</div>
</div>
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
                            <input type="text" name="firstName" placeholder="Pls input your first name">
                            <div class="error" id="first-name-error"></div>
                        </div>

                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Pls input your last name">
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


component.loginScreen = `
<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h3>Mindx Chat</h3>
    </div>

    <form id="login-form">
        

        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Input your email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Type your Password">
            <div class="error" id="password-error"></div>
        </div>

        

        <!-- xong het phan input -->

        <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">Don't have an account? register</span>
        </div>

        <button class="btn" type="submit">
            Login
        </button>
    </form>


</div>
</div>
`


component.createConversation=`
<div class="create-conversation-container">
        <div class="header">
            MindX chat
        </div>
        <div class="main" style="padding: 50px 30%">
            <form id="create-conversation-form">
                <div>
                    Create a new conversation
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Conversation name" name="conversationTitle">
                    <div class="error" id="conversation-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Friend name" name="conversationEmail">
                    <div class="error" id="conversation-email-error"></div>
                </div>
                <button class="btn" type="submit">Save</button>
                <button class="btn btn-light" type="button" id="back-to-chat">Cancel</button>
            </form>
        </div>
    </div>
`