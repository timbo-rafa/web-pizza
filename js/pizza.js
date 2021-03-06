/* Rafael Timbo Matos
 * Student Number 300962678
 * JavaScript file for pizza.html, mainly with onClick functions.
 * Handles data input and state changes. Uses sessionStorage.
 * v1.0
 */

const CHEDDAR_IMG="./imgs/cheddar.jpg"
const CHOCO_IMG="./imgs/choco.jpg"
const HAWAIIAN_IMG="./imgs/hawaiian.jpg"
const MEAT_IMG="./imgs/meat.jpg"
const VEGGIE_IMG="./imgs/veggie.jpg"
const DEFAULT_IMG="./imgs/pizza.jpg"

const pizzaIdToTitle = {
  cheddar:   "Cheddar Supreme",
  hawaiian: "Super Hawaiian",
  meat:     "Meat Supreme",
  veggie:   "Veggie",
  choco:    "Chocolate Tropical"
}

function test() {
  console.log('on function test')
}

function onFlavourNav() {
  onCancel()
}

function onFlavourClick(elt) {
  changeImg("./imgs/" + elt.id + ".jpg")
  sessionStorage.setItem("flavour", elt.id)
  var price = document.getElementById(elt.id + "Price").innerText;
  sessionStorage.setItem("price", price.replace("$",""))
  console.log(sessionStorage)
  document.getElementById("details").style.display = "block";
  showFlavourDetails(elt.id);
}

function showFlavourDetails(flavour) {
  // hide other flavour descriptions
  hideFlavours();
  // show details section
  showOnlySection("details");
  document.getElementById(flavour + "Title").style.display = "block";
  document.getElementById(flavour + "Description").style.display = "block";
}

function hideFlavours() {
  document.getElementById("cheddarTitle").style.display = "none"
  document.getElementById("cheddarDescription").style.display = "none"
  document.getElementById("hawaiianTitle").style.display = "none"
  document.getElementById("hawaiianDescription").style.display = "none"
  document.getElementById("meatTitle").style.display = "none"
  document.getElementById("meatDescription").style.display = "none"
  document.getElementById("veggieTitle").style.display = "none"
  document.getElementById("veggieDescription").style.display = "none"
  document.getElementById("chocoTitle").style.display = "none"
  document.getElementById("chocoDescription").style.display = "none"
}

function onCancel() {
  changeImg(DEFAULT_IMG);
  sessionStorage.clear()
  console.log('Items saved on sessionStorage:', sessionStorage.length)
  showOnlySection("flavours");
}

function onDetailsConfirm() {
  ["extraCheese", "spinach", "blackOlives"].forEach( function saveToppings(topping) {
    var isChecked;
    isChecked = "No";
    if (document.getElementById(topping).checked) {
      isChecked = "Yes";
      sessionStorage.setItem("price",
        parseFloat(sessionStorage.getItem("price")) + 0.39
      )
    }
    sessionStorage.setItem(topping, isChecked);
  })
  console.log(sessionStorage);
  showOnlySection("order")
}

function tax() {
  var oldPrice = parseFloat(sessionStorage.getItem("price"))
  sessionStorage.setItem("price",
   Math.trunc(( oldPrice + 0.13 * oldPrice ) * 100.0)/100.0
  )
}

function onSubmit(form) {
  ["name", "address", "phone", "creditCardType", "creditCardExpiryDate", "creditCardNumber"]
    .forEach(function saveCustomerData(field) {
      sessionStorage.setItem(field, form[field].value)
    })
  tax()
  console.log(sessionStorage)
  showOnlySection("receipt")

  printReceipt()
  return false
}

function printReceipt() {
  var receiptNumber = Math.round((Math.random() * 100000000) + 1000000)
  var receiptText = "Your order was placed successfully.<br>" +
  "Order: "              + receiptNumber                         + ".<br>" +
  "Customer: "           + sessionStorage.getItem("name")        + ".<br>" +
  "Delivery Address: "   + sessionStorage.getItem("address")     + ".<br>" +
  "Price:"               + "$" + sessionStorage.getItem("price") + ".<br>" +
  "Pizza:"               + pizzaIdToTitle[ sessionStorage.getItem("flavour") ] + ".<br>" +
  "Toppings:<br>"        +
  "&emsp;Extra cheese: " + sessionStorage.getItem("extraCheese") + ".<br>" +
  "&emsp;Spinach: "      + sessionStorage.getItem("spinach")     + ".<br>" +
  "&emsp;Black Olives: " + sessionStorage.getItem("blackOlives") + ".<br>"

  document.getElementById("receiptText").innerHTML = receiptText
}

function showOnlySection(section) {
  hideSections();
  document.getElementById(section).style.display = "block"
}

function hideSections() {
  document.getElementById("flavours").style.display = "none";
  document.getElementById("details").style.display = "none";
  document.getElementById("order").style.display = "none";
  document.getElementById("receipt").style.display = "none";
}

function changeImg(img) {
  document.getElementById("pizzaImage").src = img;
}