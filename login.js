let container = document.querySelector('.container');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let login = document.querySelector('.login');
let close = document.querySelector('.close');
let eyeLogin = document.querySelector('.eye-login');
let passwordLogin = document.querySelector('.password-login');
let eyeRegister = document.querySelector('.eye-register');
let passwordRegister = document.querySelector('.password-register');

registerLink.addEventListener('click' , function(){
    container.classList.add('active');
})
loginLink.addEventListener('click' , function(){
    container.classList.remove('active');
})


login.addEventListener('click' , function(){
    container.classList.add('show-poup');
})
close.addEventListener('click' , function(){
    container.classList.remove('show-poup');
})
eyeLogin.addEventListener('click' , function(){
    if(passwordLogin.type =="password"){
        passwordLogin.type = "text";
        eyeLogin.name = "eye-off-outline";
    }else{
        passwordLogin.type ="password";
        eyeLogin.name = "eye-outline";
    }
})
eyeRegister.addEventListener('click' , function(){
    if(passwordRegister.type =="password"){
        passwordRegister.type = "text";
        eyeRegister.name = "eye-off-outline";
    }else{
        passwordRegister.type ="password";
        eyeRegister.name = "eye-outline";
    }
})