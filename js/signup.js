 
    function showLoginPage(){
	
	window.location.href='login.html';
}


var newStudentModel=document.getElementById('new-student-modal');
var modalCloseButton=document.getElementById('modal-close-button');
var userName=document.getElementById('user-name');
var userPassword=document.getElementById('user-password');
var username=document.getElementById('user-name');
    var usersurname=document.getElementById('user-surname');
        var useristifadeciname=document.getElementById('user-istifadeci-name');
            var useremail=document.getElementById('user-email');
                var userpassword=document.getElementById('user-sifre');

var users=[
{id:1,username:'u1',password:'p1'},
{id:2,username:'u2',password:'p2'},
{id:3,username:'u3',password:'p3'}
];

var usersString=localStorage.getItem('users');
    if(usersString==null){localStorage.setItem('users','[]');}else{
        users=JSON.parse(usersString);}
var products=[
{id:1,name:'product 1',price:14,description:'',userId:1,imagePath:'images/01.jpg'},
{id:2,name:'product 2',price:15,description:'',userId:1,imagePath:'images/02.jpg'},
{id:3,name:'product 3',price:18,description:'',userId:2,imagePath:'images/03.jpg'},
{id:4,name:'product 4',price:34,description:'',userId:2,imagePath:'images/04.jpg'},
{id:5,name:'product 5',price:44,description:'',userId:3,imagePath:'images/05.jpg'},
{id:6,name:'product 6',price:54,description:'',userId:3,imagePath:'images/06.jpg'}
];

var basketProducts=[
{id:1,count:3,productId:2},
{id:2,count:5,productId:4},
{id:3,count:7,productId:6}
];

var order={
id:1,basketProducts:basketProducts,
customer:{id:1,name:'Customer-1',phone:'055-555-5555',
address:'Address-1',email:'email@gmail.com'},
register:new Date(),notes:'qeyd-1',totalPrice:1234
};

var orders=[];
orders.push(order);


function login(){
var username=userName.value.trim();
var password=userPassword.value.trim();

var successLogin=true;
var userId=1;
if(successLogin){
window.location.href='home.html';
}else{alert('login failed');}

}

function saveModels(){

	localStorage.setItem('products',JSON.stringify(products));
}

saveModels();

function validation123(deyer,name){
    var setir=document.getElementById(name);
   var  htmltext="";
  if(deyer.length>25){
htmltext="<p style='color:red'> 25 herfden boyuk ola bilmez</p>";   
}
 if(deyer.length<5){
 htmltext="<p style='color:red'> 5 herfden balaca ola bilmez</p>";     
}      if(deyer.length==0){
 htmltext="<p style='color:red'> Bos qoymaq olmaz</p>";           
}
   if(deyer.length>4 && deyer.length<26){
      htmltext="<p style='color:green'> Dogrudur</p>";  
       
   }
   setir.innerHTML=htmltext;
}

function validationAdd(deyer){ 
    
    if(deyer.length>25){ return false;} 
    if(deyer.length<5){ return false;}
    return true;}
console.log(users);
function saveuser(){
    var id=users.length;
    var booll=true;
 
    var nm,srnm,email,password,username12;
    
    if(validationAdd(username.value)==true){nm=username.value}else{showNewStudentModal('Melumatlari dogru yaz:Ad','red');booll=false;}
    
if(validationAdd(usersurname.value)==true){srnm=usersurname.value}else{showNewStudentModal('Melumatlari dogru yaz:SoyAd','red');booll=false;}
    
if(validationAdd(userpassword.value)==true){password=userpassword.value}else{showNewStudentModal('Melumatlari dogru yaz:Password','red');booll=false;}
    
if(validationAdd(useristifadeciname.value)==true){username12=useristifadeciname.value}else{showNewStudentModal('Melumatlari dogru yaz:username','red'); booll=false;}
    email=useremail.value;
   
    if(booll==true){
        var booll2=true;
        for (var i=0;i<users.length;i++){
       if(username12==users[i].username){
        booll2=false;
        showNewStudentModal('Bu Istafadeci ad istifade olunur','red')   
           
       }
                  
        }}
        
           if(booll2==true){
                 id++;
         var user={id:id,username:username12,password:password,name:nm,surname:srnm,email:email};
        users.push(user);console.log(users);
    	localStorage.setItem('users',JSON.stringify(users));
                 showNewStudentModal('Ugurla qeyd olundu','green');   
           }        

}
modalCloseButton.addEventListener("click",function(){
    newStudentModel.style.display="none";
})
function showNewStudentModal(yazi,reng){
newStudentModel.style.display="block";
    var text=document.getElementById('error-modal');
    text.innerHTML="<p style='color:"+reng+"'> "+yazi+"</p>"
}
 
    