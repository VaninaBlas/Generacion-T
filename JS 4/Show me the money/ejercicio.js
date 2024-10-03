let boton = document.querySelectorAll("button");
let img = document.querySelectorAll("img");
for (let i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", function () {
    img[i].classList.toggle("oculto");
  });
}
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    this.classList.add("oculto");
  });
}
