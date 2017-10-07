const CHEDDAR_IMG="./imgs/cheddar.jpg"
const CHOCO_IMG="./imgs/choco.jpg"
const HAWAIIAN_IMG="./imgs/hawaiian.jpg"
const MEAT_IMG="./imgs/meat.jpg"
const VEGGIE_IMG="./imgs/veggie.jpg"
const DEFAULT_IMG="./imgs/pizza.jpg"

function test() {
  console.log('on function test')
}

function onFlavourClick(elt) {
  switch (elt.id) {
    case "acheddar":
      changeImg(CHEDDAR_IMG)
      break;
    case "achoco":
      changeImg(CHOCO_IMG)
      break;
    case "ahawaiian":
      changeImg(HAWAIIAN_IMG)
      break;
    case "ameat":
      changeImg(MEAT_IMG)
      break;
    case "aveggie":
    changeImg(VEGGIE_IMG)
      break;
    default:
      changeImg(DEFAULT_IMG)
      break;
  }
}

function changeImg(img) {
  document.getElementById("pizzaImage").src = img;
}