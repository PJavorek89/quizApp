// bootstrap data - array
const quizList = [
  "HTML základní test",
  "CSS výzva",
  "JavaScript pro začátečníky",
  "React mini test",
  "Logické hádanky",
];

const scoreQuiz = [50, 10, 0, 5, 64];

const scoreAttmpt = [10, 6, 0, 1, 12];

const testArray = ["nazev oblasti", 2, 3];

//naplnění tabulek

//fce kde zadam pole a naplni se hodnotou a pripise jako radek do tabulky
const addRowWithValue = (arrayValue) => {
  const singlePlayerTable = document.getElementById("single-player-table");
  const tableRowElement = document.createElement("tr");
  singlePlayerTable.appendChild(tableRowElement);
  arrayValue.forEach((element) => {
    let value = element;
    const tableData = document.createElement("td");
    tableData.textContent = value;
    tableRowElement.appendChild(tableData);
  });
};

//fce pro vytvoření řádku z n arrany

const createRowFromArrays = (...arrays) => {
  const numberOfArguments = arrays.length; //zjisti pocet argumentu, poli, predanych funkci
  const numberOfNewRows = arrays[0].length; //predpokladam ze prvni pole, nazvy, nebudou nikdy null
  for (let i = 0; i < numberOfNewRows; i++) {
    const newArrayOfValue = arrays.map((element) => {
      //return element[i] || 0; //pro falsy vrat 0, muze byt uzitecne pro tahani hodnot z DB
      //return element[i] ?? 0; //null nebo undefined (nullish colescaling operator) vrat 0, muze byt uzitecne pro tahani hodnot z DB
      return element[i] !== undefined ? element[i] : 0; //osetreni pouze undefined
    });
    addRowWithValue(newArrayOfValue);
  }
  //potrebuji aby vzal postupne kazdy arrays, vzal prvek s indexem i a dal ho do noveho pole
  //na toto pole pote volam metodu addRowWithValue
};

//naplnění tabulky - singlePlayer

//array.forEach((element) => {});

//test
//createRowFromArrays(quizList, scoreQuiz, scoreAttmpt);
//console.log(scoreAttmpt[6]);
//addRowWithValue(testArray);
createRowFromArrays(quizList, scoreQuiz, scoreAttmpt);
