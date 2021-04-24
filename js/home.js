
var users = [
  { id: 1, username: "u1", password: "p1" },
  { id: 2, username: "u2", password: "p2" },
  { id: 3, username: "u3", password: "p3" },
];

var usersString = localStorage.getItem("users");
if (usersString == null) {
  localStorage.setItem("users", JSON.stringify(users));
} else {
  users = JSON.parse(usersString);
}

var productString = localStorage.getItem("products");
   if (productString == null) {
var products=[
{id:1,name:'product 1',price:14,description:'kitab 1',userId:1,imagePath:'images/01.jpg'},
{id:2,name:'product 2',price:15,description:'kitab 2',userId:1,imagePath:'images/02.jpg'},
{id:3,name:'product 3',price:18,description:'kitab 3',userId:2,imagePath:'images/03.jpg'},
{id:4,name:'product 4',price:34,description:'kitab 4',userId:2,imagePath:'images/04.jpg'},
{id:5,name:'product 5',price:44,description:'kitab 5',userId:3,imagePath:'images/05.jpg'},
{id:6,name:'product 6',price:54,description:'kitab 6',userId:3,imagePath:'images/06.jpg'}
];


 

localStorage.setItem('products',JSON.stringify(products));

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


 

function saveModels(){

	localStorage.setItem('products',JSON.stringify(products));
}

saveModels();




    
	
	
	
	var products=[
{id:1,name:'product 1',price:14,description:'kitab 1',userId:1,imagePath:'images/01.jpg'},
{id:2,name:'product 2',price:15,description:'kitab 2',userId:1,imagePath:'images/02.jpg'},
{id:3,name:'product 3',price:18,description:'kitab 3',userId:2,imagePath:'images/03.jpg'},
{id:4,name:'product 4',price:34,description:'kitab 4',userId:2,imagePath:'images/04.jpg'},
{id:5,name:'product 5',price:44,description:'kitab 5',userId:3,imagePath:'images/05.jpg'},
{id:6,name:'product 6',price:54,description:'kitab 6',userId:3,imagePath:'images/06.jpg'}
];


for(var i=7;i<=100;i++){
	products.push(
	{id:i,name:'product '+i,price:(3*i),description:'kitab '+i,userId:3,imagePath:'images/06.jpg'}
	);
	
}

for(var i=101;i<=130;i++){
	products.push(
	{id:i,name:'product 200',price:(3*i),description:'kitab '+i,userId:3,imagePath:'images/06.jpg'}
	);
	
}


  localStorage.setItem('products',JSON.stringify(products));
  }
  
  var loggedIn=true;
var loginButton=document.getElementById('login-button');
var logoutButton=document.getElementById('logout-button');
var productsButton=document.getElementById('products-button');
var ordersButton=document.getElementById('orders-button');

var token=localStorage.getItem('token');

if(token==null){
	logoutButton.style.display='none';
	productsButton.style.display='none';
	ordersButton.style.display='none';
	
}else{
	loginButton.style.display='none';
	
}
function customerPage(){
 
	window.location.href='customer.html';
}


function steps(){
	window.location.href='steps.html';
}


function showButtonsIfLogin(){
	if(loggedIn){
		loginButton.style.display='none';
	}else{
		 logoutButton.style.display='none';
		 productsButton.style.display='none';
		 ordersButton.style.display='none';
	}
}


function login(){
 
	window.location.href='login.html';
}


function logout(){
 localStorage.removeItem('token');
	window.location.href='';
}

function onShowProducts(){
	window.location.href='products.html';
}

function ordersPage(){
	window.location.href='orders.html';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
setInterval(function(){ showSlides(slideIndex);slideIndex++; }, 2000);
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//showButtonsIfLogin();


function resetInfo(){
  localStorage.clear();
}