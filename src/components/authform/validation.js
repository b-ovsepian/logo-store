
export function ValidateEmail(mail) 
    {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
     return (true);
   } else {
     const email = document.querySelector('.email-hint');
     let inputEmail = document.querySelector('.input-email');
     inputEmail.style.borderColor = "red";
     email.style.display = "block";
     return (false);
   }
}


export function ValidatePassword(password) 
{ 
let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.match(passw)) { 
    return (true);
} else
{ 
    const password = document.querySelector('.password-hint');
  password.style.display = "block";
       let inputPassword = document.querySelector('.input-password');

  inputPassword.style.borderColor = "red";
    return (false);
}
}