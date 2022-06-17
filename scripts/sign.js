var Signin=JSON.parse(localStorage.getItem("Sign"))|| []

function data(n,c,e,p)
{
   this.Name=n;
   this.Contact=c;
   this.Email=e;
   this.Password=p;
}

function getSign(event)
{
   event.preventDefault()
   let form =document.getElementById("signData");

   let Name =form.name.value;
   let Contact=form.contact.value;
   let Email=form.email.value;
   let Password=form.password.value;
  
   console.log(Name,Contact,Email,Password)

   let s1= new data(Name,Contact,Email,Password)
   Signin.push(s1)
   //console.log(Signin)
   localStorage.setItem("Sign",JSON.stringify(Signin))
   window.location.href="Login.html"
}

