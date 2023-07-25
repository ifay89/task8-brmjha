const login_login = document.querySelector('login-form login');

const password = document.getElementById('password');
const confirm = document.getElementById('confirm-password');
const confirmMessage = document.getElementById('confirm-password-input-message');

function check(){
    function check(){
        if(password.value !== confirm.value ){
            confirmMessage.textContent = "passwors don't match";
            confirmMessage.style.color = 'red'
            password.style.border = "1px #cf3737 solid";
            confirm.style.border = "1px #cf3737 solid";
        }else{
            message.textContent = "Your hard to guess password";
            password.style.border = "1px solid rgb(213, 206, 206)";
            confirmPass.style.border = "1px solid rgb(213, 206, 206)";
        }
    };
}
