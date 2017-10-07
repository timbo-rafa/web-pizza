const CHEDDAR_IMG="./imgs/cheddar.jpg"

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