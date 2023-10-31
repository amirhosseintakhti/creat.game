const tank1 = document.querySelector(".tank1");
const tank2 = document.querySelector(".tank2");

let turn;
function gameInitialization() {
  tank1.style.left = "25px";
  tank1.style.top = "250px";
  tank2.style.right = "25px";
  tank2.style.top = "250px";
  turn = 1;
}

gameInitialization();

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowUp":
      moveUp();

      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      break;
  }
};

function moveUp() {
    alert ('up');
}
function moveDown() {
    alert ('Down');
}
function moveLeft() {
    alert ('left');
}
function moveRight() {
    alert ('Right');
}

