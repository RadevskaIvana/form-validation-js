const fullNameInput = document.getElementById('fullName');
const userNameInput = document.getElementById('userName');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumber');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const otherInput = document.getElementById('other');
const submitBtn = document.getElementById('submitBtn');

const errorMessage = document.getElementById('errorMessage');
const lettersRegEx=/^[a-zA-Z ]+$/;
const emailRegEx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneNumberRegEx=/^((\(\d{3}\)))[ ]\d{3}[-]\d{4}$/;


submitBtn.addEventListener ('click', () =>{
    if(fullNameInput.value.length === 0 || 
        userNameInput.value.length === 0 ||
        emailInput.value.length === 0 ||
        phoneNumberInput.value.length === 0 ||
        passwordInput.value.length === 0 ||
        confirmPasswordInput.value.length === 0
        ){
          return errorMessage.innerHTML='Site polinja se zadolzitelni'
        }
    if(passwordInput.value !== confirmPasswordInput.value){
      return errorMessage.innerHTML='Lozinkite mora da bidat isti'
     }
     if(!lettersRegEx.test(fullNameInput.value)){
    return errorMessage.innerHTML='Full Name treba da sodrzi zamo bukvi'
     }
     if(!emailRegEx.test(emailInput.value)){
      return errorMessage.innerHTML='Nevaliden Email'
    }
    if(phoneNumberRegEx.test(phoneNumberInput.value)){
        return errorMessage.innerHTML='Nevaliden telefonski broj'  
    }
    if(!maleInput.checked && !femaleInput.checked && !otherInput.checked){
        return errorMessage.innerHTML='Odberete pol'
    }
    return errorMessage.innerHTML= ''
})