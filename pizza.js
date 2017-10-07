const CHEDDAR_IMG="./imgs/cheddar.jpg"
const CHOCO_IMG="./imgs/choco.jpg"
const HAWAIIAN_IMG="./imgs/hawaiian.jpg"
const MEAT_IMG="./imgs/meat.jpg"
const VEGGIE_IMG="./imgs/veggie.jpg"
const DEFAULT_IMG="./imgs/pizza.jpg"

function test() {
  console.log('on function test')
}

function onFlavourNav() {
  onCancel()
}

function onFlavourClick(elt) {
  /*
  switch (elt.id) {
    case "cheddar":
      changeImg(CHEDDAR_IMG)
      break;
    case "choco":
      changeImg(CHOCO_IMG)
      break;
    case "hawaiian":
      changeImg(HAWAIIAN_IMG)
      break;
    case "meat":
      changeImg(MEAT_IMG)
      break;
    case "veggie":
    changeImg(VEGGIE_IMG)
      break;
    default:
      changeImg(DEFAULT_IMG)
      break;
  }
  */
  changeImg("./imgs/" + elt.id + ".jpg")
  sessionStorage.setItem("flavour", elt.id)
  console.log(sessionStorage)
  document.getElementById("details").style.display = "block";
  showFlavourDetails(elt.id);
}

function showFlavourDetails(flavour) {
  // hide other flavour descriptions
  hideFlavours();
  // show details section
  showOnlySection("details");
  console.log("FLAVOUR:" + flavour);
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
    if (document.getElementById(topping).checked) {
      sessionStorage.setItem(topping, "true")
    }
  })
  console.log(sessionStorage)
}

function showOnlySection(section) {
  hideSections();
  document.getElementById(section).style.display = "block"
}

function hideSections() {
  document.getElementById("flavours").style.display = "none";
  document.getElementById("details").style.display = "none";
  document.getElementById("order").style.display = "none";
}

function changeImg(img) {
  document.getElementById("pizzaImage").src = img;
}