function randomWords() {
  const words = [
    "kitten",
    "old prince",
    "speed",
    "ditella",
    "python",
    "kaggle",
    "swag",
    "jupyter",
    "github",
    "love",
    "kotlin",
    "responsive",
    "spotify",
    "twitter",
    "intellij",
    "slack",
    "dataset",
    "seaborn",
    "matplotlib",
    "pandas",
    "numpy",
    "scikitlearn",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  return word;
}
let palabraAleatoria;
let time = 10;
let score = 0;
function addToDom() {
  let h1 = document.getElementById("randomWord");
  palabraAleatoria = randomWords();
  h1.innerText = palabraAleatoria;
}
function updateScore() {
  let scoreS = document.querySelector("#score");
  score += 1;
  scoreS.innerText = score;
}
addToDom();
function gameOver() {
  let container = document.querySelector("#end-game-container");
  container.innerHTML = `<h1>Te quedaste sin tiempo</h1><p>Puntaje final: ${score}</p><button onClick="location.reload()">Volve a empezar</button>`;
}
let main = document.querySelector(".main");
function actualizarTiempo() {
  let timeS = document.querySelector("#timeSpan");
  if (time == 0) {
    clearInterval(0);
    main.remove();
    gameOver();
  } else {
    time -= 1;
    timeS.innerText = `${time}s`;
  }
}
if (time != 0) {
  let fr = setInterval(actualizarTiempo, 1000);
}
function sumarTiempo() {
  let timeS = document.querySelector("#timeSpan");
  time += 3;
  timeS.innerText = `${time}s`;
}
let input = document.querySelector("input");
input.addEventListener("input", function (e) {
  let palabraIngresada = e.target.value;
  if (palabraIngresada == palabraAleatoria) {
    sumarTiempo();
    input.value = "";
    addToDom();
    updateScore();
  }
});
