let rojo = document.querySelector("#rojo");
let azul = document.querySelector("#azul");
let div = document.querySelector("div");
let acum1 = 0;
let acum2 = 0;
window.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    acum1 += 100;
    azul.style.marginLeft = acum1 + "px";
  }
  if (event.key === "d") {
    acum2 += 100;
    rojo.style.marginLeft = acum2 + "px";
  }
  let divWith = div.clientWidth;
  if (azul.clientWidth + acum1 >= divWith) {
    alert("gano azul");
  } else if (rojo.clientWidth + acum2 >= divWith) {
    this.alert("gano rojo");
  }
});
