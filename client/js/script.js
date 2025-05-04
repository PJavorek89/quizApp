//roletka pro výběr quizu
const quizSelect = document.getElementById("quizSelect");
const startBtn = document.getElementById("startBtn");
const selectedQuiz = document.getElementById("selectedQuiz");

//test data pro roletku z vyberu quizu
const quizList = [
  "HTML základní test",
  "CSS výzva",
  "JavaScript pro začátečníky",
  "React mini test",
  "Logické hádanky",
];

// První možnost bude vždy prázdná (pro výběr)

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.disabled = true;
defaultOption.selected = true;
defaultOption.textContent = "-- Vyberte kvíz --";
quizSelect.appendChild(defaultOption);

//roletka
quizList.forEach((quiz) => {
  const option = document.createElement("option");
  option.value = quiz;
  option.textContent = quiz;
  quizSelect.appendChild(option);
});

//zobrazeni start btn az po selectu
quizSelect.addEventListener("change", () => {
  if (quizSelect.value != "") {
    startBtn.classList.remove("hidden");
  } else {
    startBtn.classList.add("hidden");
    selectedQuiz.textContent = "";
  }
});

//vypsání quizu po kliknutí na start button
startBtn.addEventListener("click", () => {
  const chosenQuiz = quizSelect.value;
  selectedQuiz.textContent = `Zvolený kvíz: ${chosenQuiz}`;
});

//test - po vyzkouseni je mozno smazat

window.addEventListener("click", (event) => {
  console.log(event.target); // zobrazí, na co jsi klikl
});
