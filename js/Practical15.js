const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInputs();

});

function checkInputs(){
    // get the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue =email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


if(usernameValue === ''){
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank")
}else{
    // add success class
    setSuccessFor(username);
}
if(email === ''){
    //show error
    //add error class
    setErrorFor(email, "email cannot be blank")
}else{
    // add success class
    setSuccessFor(email);
}
if(password === ''){
    //show error
    //add error class
    setErrorFor(password, "password cannot be blank")
}else{
    // add success class
    setSuccessFor(password);
}
if(password2 === ''){
    //show error
    //add error class
    setErrorFor(password2, "password2 cannot be blank")
}else{
    // add success class
    setSuccessFor(password2);
}
}
function setErrorFor(input, message){
    const formControl = input.parentElament; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElament;
    formControl.className = 'form-control success';

}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')});