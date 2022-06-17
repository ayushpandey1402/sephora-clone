var login=JSON.parse(localStorage.getItem("Sign"))
    
function loginData(e)
{
    e.preventDefault();
    var enterEmail = document.querySelector("#email").value;
    var enterPass = document.querySelector("#password").value;
    var count =0;


for (var i = 0; i < login.length; i++) {
if (
    login[i].Email == enterEmail &&
    login[i].Password == enterPass

    
) {
 
  count++;
  break;

} 
}

if(count==0)
{
  alert("Invalid Credintial")
}
else{
  alert("login succesfull")
  window.location.href="index.html"
}
}
