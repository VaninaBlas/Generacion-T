let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.style.backgroundColor = input.value;
  }
  if (event.key === "Backspace") {
    document.body.style.backgroundColor = "white";
  }
});
