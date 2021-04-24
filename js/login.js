 
var userPassword=document.getElementById('user-password');
var userName=document.getElementById('user-name');
     
var usersString=localStorage.getItem('users');
var users =JSON.parse(usersString); 
		 
		 
		 
function onLogin(){
var username=userName.value.trim();
var password=userPassword.value.trim();
 var successLogin=false;
 for(var i=0;i<users.length;i++){
	 if(users[i].username===username && users[i].password===password){
		 localStorage.setItem('token',JSON.stringify({username:username,password:password,userId:users[i].id}));
		 successLogin=true;break;
		 
	 }
	 
 }
 
 if(successLogin){
	 window.location.href='home.html';
 }else{
	 alert('login failed');
 }

}