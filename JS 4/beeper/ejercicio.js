let boton = document.querySelector("button");
boton.addEventListener("click", seEjecutaEnEvento);
function seEjecutaEnEvento() {
  document.body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
  document.body.classList.toggle("color");
}
