
function slideShow(id) {
  $("#" + id).slideToggle("slow")
  if ($("#" + id + "b").html == "Melumatlari goster") {
    $("#" + id + "b").html("Melumatlari gizlet");

  } else {


    $("#" + id + "b").html("Melumatlari goster");
  }
};
$(document).ready(() => {

  var orderGlobal = [];
  var orderGlobalString = localStorage.getItem("orders");
  if (orderGlobalString == null) {

  } else {
    orderGlobal = JSON.parse(orderGlobalString);
  }


  var userId = "";
  var currentUser = JSON.parse(localStorage.getItem("token"));
  userId = currentUser.userId;
  var id = 0;


  console.log(JSON.parse(localStorage.getItem("orders")));
  filter();
  function filter() {
    for (var a = 0; a < orderGlobal.length; a++) {
      var o = orderGlobal[a];
      id = a;
      for (var i = 0; i < o.basketProducts.length; i++) {
        var b = o.basketProducts[i];
        if (b.product.userId == userId) {
        } else {
          console.log("false");
          orderGlobal[id].basketProducts.splice(i, 1);
          i -= 1;
        }
      }
      if (o.basketProducts.length == 0) {
        orderGlobal.splice(a, 1);
      }
    }
    console.log(orderGlobal);
  }


  showOrders();
  function showOrders() {
    var orderString = "";
    var productString = "";
    for (var i = 0; i < orderGlobal.length; i++) {
      productString = "<ol>";
      var o = orderGlobal[i];
      var b = o.basketProducts;
      var totalPrice = 0;
      for (var a = 0; a < o.basketProducts.length; a++) {
        var currentB = b[a];
        id++;
        productString +=
          "" + "<li>" +
          currentB.product.name + "<br><button id=" + id + "b style='border: 2px solid white' onclick=slideShow(" + id + ")  class='btn btn-dark'>Melumatlari goster</button><div  id=" + id + " style='display:none'><ul><li>Qiymeti: " + currentB.product.price + " AZN</li></ul>" +
          "<ul><li>Miqdari: " + currentB.count + " eded</li></ul>" +
          "<ul><li>Umumi qiymet: " + currentB.count * currentB.product.price + " AZN</li></ul></div>" +
          " </li>";
        totalPrice += parseInt(currentB.count * currentB.product.price);
      }
    
    productString += "</ol>";

    orderString +=
      "<tr><td>" +
      o.id +
      "</td><td>" +
      o.register +
      "</td><td><ul><li>Ad: " +
      o.customer.name +
      "</li><li>Telefon: " +
      o.customer.telefon +
      "</li><li>Adres: " +
      o.customer.unvan +
      "</li><li>E-mail: " +
      o.customer.email +
      "</li></ul>" +
      "</td><td>" +
      productString +
      "</td><td>" +
      totalPrice +
      "</td><td>" +
      o.note +
      "</td></tr>";



    }



    $("#tbody").html(orderString);
  }
  $("#home").click(function () {
    window.location = "home.html";

  });


});