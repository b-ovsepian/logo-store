 export function ValidateEmail(mail) 
    {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


export function ValidatePassword(password) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.match(passw)) 
{ 
alert('Correct')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}