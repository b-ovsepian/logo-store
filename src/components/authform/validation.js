

const authRefs = {
  form: document.querySelector('.auth-form'),
  enterAccountBtn: document.querySelector('.enterAccount'),
  registerAccountBtn: document.querySelector('.registerAccount'),
  buttons:document.querySelector('.authbuttons')
}


 export function ValidateEmail(mail) {
  let inputEmail = document.querySelector('.input-email');
  const email = document.querySelector('.email-hint');

   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
     inputEmail.style.borderColor = "green";
     email.style.display = "none";
     return true;
   } else if(mail.length < 6){
    inputEmail.style.borderColor = "grey";
     email.style.display = "none";
     return false;
   } else {
     inputEmail.style.borderColor = "red";
     email.style.display = "block";
     return false;
   }
}

export function ValidatePassword(password) {
  let passw = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
  const passwordhint = document.querySelector('.password-hint');
  let inputPassword = document.querySelector('.input-password');

  if (password.match(passw)) {
      passwordhint.style.display = "none";
  inputPassword.style.borderColor = "green";
    return true;
}  if(password.length < 4){
  inputPassword.style.borderColor = "grey";
  passwordhint.style.display = "none";
  return false;
} else {
  passwordhint.style.display = "block";
    inputPassword.style.borderColor = "red";
     return false;
}
}