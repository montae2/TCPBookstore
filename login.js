 //Login
 var form=document.getElementById('formlog');
 form.addEventListener('submit',function(event){
   event.preventDefault();
 var username=document.getElementById('username').value;
   console.log(username);
 var pwd=document.getElementById('pwd').value;
   console.log(pwd);
 })

function userLogin(){
 var username = document.getElementById('username').value;
 var pwd = document.getElementById('pwd').value;
     if(username=="employee" && pwd=="1234"){
       window.location.href="employee.html";
   }
     else if(username=="manager" && pwd=="5678"){
       window.location.href="manager.html";
   }
     else{
       alert("Invalid Login Credentials");
     }
   }

//show Login window
var form=document.getElementById('formlog');
form.addEventListener('click', logIn);
function logIn() {
  formlog.style.display = 'block';
}