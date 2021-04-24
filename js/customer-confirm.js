
var nameError = document.getElementById("name-error");
var surnameError = document.getElementById("surname-error");
var adresError = document.getElementById("adres-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var noteError = document.getElementById("note-error")
var modal = document.getElementById('modal');
var customername = document.getElementById('user-name');
var customersurname = document.getElementById('user-surname');
var customeradres = document.getElementById('user-adres');
var customertelefon = document.getElementById('user-Telefon');
var customeremail = document.getElementById('user-Email');
var customernote = document.getElementById('user-note');

var basketProductsString = localStorage.getItem("basketProducts");
if (basketProductsString == null) {
  localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
} else {
  basketProducts = JSON.parse(basketProductsString);
}
var ordersString = localStorage.getItem("orders");
if (ordersString == null) {
  var orders = [];
  localStorage.setItem("orders", JSON.stringify(orders));
} else {
  orders = JSON.parse(ordersString);
}
var usersString=localStorage.getItem('users');
    if(usersString==null){localStorage.setItem('users','[]');}else{
        users=JSON.parse(usersString);}
 function orderError(){
         $("#modal2").fadeIn(650);

        $("#modal2").fadeOut(3000);}

        
function saveOrder() {

     if (customername.classList.item(0)=="form-content-error"){orderError();return; }
    if (customersurname.classList.item(0)=="form-content-error"){orderError();return;}
    if (customeradres.classList.item(0)=="form-content-error"){orderError();return;}
    if (customeremail.classList.item(0)=="form-content-error"){orderError();return;}

    if (customertelefon.classList.item(0)=="form-content-error"){orderError();return;}
   
        

    
  var now = new Date();
  var clockString = '';
  clockString += now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, 0) + '-' + now.getDate();
  clockString += ' ' + now.getHours() + ':' + now.getMinutes();
var userId=basketProducts[0].product.userId;
  var totalprice = 0;
  for (let index = 0; index < basketProducts.length; index++) {
    const b = basketProducts[index];
    totalprice += (b.product.price * b.count);

  }
  var customer = {
    name: customername.value,
    surname: customersurname.value,
    unvan: customeradres.value,
    telefon: customertelefon.value,
    email: customeremail.value
  };
  var currentUser = JSON.parse(localStorage.getItem("token"));
  var order = {
    id: orders.length + 1,
    basketProducts: basketProducts, 
    customer: customer, 
    note: customernote.value, 
    totalprice: totalprice, 
    register: clockString,
    userId:currentUser.userId
  };

  orders.push(order);


  localStorage.setItem('orders', JSON.stringify(orders));
  console.log(orders);

 
 
document.getElementById("lightbox").style.display="none";
    localStorage.setItem('basketProducts', '[]');
   
    $("#modal3").fadeIn(650);

        $("#modal3").fadeOut(1000);

setTimeout(function(){ window.location.href = 'customer.html';},1000);
}

function nameFocusOut(){
 var x=customername.value;
    try{
        if(x == "") throw "Adi boş qoymaq olmaz";
        if(x.length < 5) throw "Ad minimum 5 simvol olmalıdır.";
        if(x.length > 30) throw "Ad maksimum 30 simvol olmalıdır.";
        customername.classList.remove("form-content-error");
        customername.classList.add("form-content");
        nameError.innerHTML = "";
    }
     catch(err){
        customername.classList.remove("form-content");
        customername.classList.add("form-content-error");
        nameError.innerHTML = err;
    }
}

function surnameFocusOut(){
    var x=customersurname.value;
    try{
        if(x == "") throw "Soyadi boş qoymaq olmaz";
        if(x.length < 5) throw "Soyad minimum 5 simvol olmalıdır.";
        if(x.length > 30) throw "Soyad maksimum 30 simvol olmalıdır.";
        customersurname.classList.remove("form-content-error");
        customersurname.classList.add("form-content");
        surnameError.innerHTML = "";
    }
     catch(err){
        customersurname.classList.remove("form-content");
        customersurname.classList.add("form-content-error");
        surnameError.innerHTML = err;
    }
}

function adresFocusOut(){
   var x=customeradres.value;
    try{
        if(x == "") throw "Adresi boş qoymaq olmaz";
        if(x.length < 5) throw "Adres minimum 5 simvol olmalıdır.";
        if(x.length > 30) throw "Adres maksimum 30 simvol olmalıdır.";
        customeradres.classList.remove("form-content-error");
        customeradres.classList.add("form-content");
        adresError.innerHTML = "";
    }
     catch(err){
        customeradres.classList.remove("form-content");
        customeradres.classList.add("form-content-error");
        adresError.innerHTML = err;
    }
    
}

function phoneFocusOut(){
    var isphone = /((\(\d{3}\))|\d{3})(\-|\s)?(\d{2})(\-|\s)?(\d{2})$/.test(customertelefon.value);
     try{
          if(customertelefon.value=="") throw "Nomreni boş qoymaq olmaz";
        if(!isphone) throw "Yazdiginiz nomre yazilis qaydasina uygun deyil<br>Meselen:050-216-48-06";
        
         
        customertelefon.classList.remove("form-content-error");
        customertelefon.classList.add("form-content");
        phoneError.innerHTML = "";
    }
     catch(err){
        customertelefon.classList.remove("form-content");
        customertelefon.classList.add("form-content-error");
        phoneError.innerHTML = err;
    }  
}
function emailFocusOut(){
    var isemail =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(customeremail.value);
   try{
       if(customeremail.value=="") throw "Emaili boş qoymaq olmaz";
        if(!isemail) throw "Yazdiginiz email yazilis qaydasina uygun deyil<br>Meselen:alicavid826@gmail.com";
        
        customeremail.classList.remove("form-content-error");
        customeremail.classList.add("form-content");
        emailError.innerHTML = "";
    }
     catch(err){
        customeremail.classList.remove("form-content");
        customeremail.classList.add("form-content-error");
        emailError.innerHTML = err;
    }  
}



