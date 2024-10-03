let parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("click", function () {
    this.classList.toggle("resaltado");
  });
}
