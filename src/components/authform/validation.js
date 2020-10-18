import { authRefs } from './authform';
export function ValidateEmail(mail) {
  let inputEmail = document.querySelector('.input-email');
  const email = document.querySelector('.email-hint');

   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
     inputEmail.style.borderColor = "grey";
     email.style.display = "none";
     return true;
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
  inputPassword.style.borderColor = "grey";
    return true;
} else
{ 
  passwordhint.style.display = "block";
    inputPassword.style.borderColor = "red";
    authRefs.form.elements.password.value="";
     return false;
}
}