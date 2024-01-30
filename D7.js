/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function newString(str1, str2) {
  const firstString = str1.substring(0, 2);
  const secondString = str2.slice(-3);
  const thirdString = firstString + secondString;
  const upperCaseString = thirdString.toUpperCase();

  /* console.log(upperCaseString); */
  return upperCaseString;
}

const computedString = newString("epicode", "welcome");
console.log(computedString);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function randomArray() {
  let numArr = [];

  for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 101);
    numArr.push(randNum);
  }

  return numArr;
}

const arrayCasuale = randomArray();
console.log(arrayCasuale);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenValues(array) {
  return array3.filter((num) => num % 2 === 0);
}

let numPari = evenValues(array3);
console.log(numPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arr = [20, 30, 45, 50, 70];
let sum = 0;

function total2(arr) {
  arr.forEach((each) => {
    sum += each;
  });
  return sum;
}

console.log(total2(arr));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const total = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(total);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const multiplyNumbers = function (n) {
  return array3.map((num) => num * n);
};
console.log(multiplyNumbers(5));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const array7 = ["EPICODE", "is", "great"];
const lenghts = array7.map(function (word) {
  return word.length;
});

console.log(lenghts);

function esercizio7(array) {
  return (newArray = array.map((arrayObj) => arrayObj.length));
}

console.log(esercizio7(array7));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const array8 = [];

for (let i = 1; i < 100; i += 2) {
  const oddNumbers = array8.push(i);
}

console.log(array8);

// OPPURE INSERITO IN UNA FUNZIONE

function getOdds() {
  const array8 = [];
  for (let i = 1; i < 100; i += 2) {
    array8.push(i);
  }
  return array8;
}

const oddValues = getOdds();
console.log(oddValues);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldestMovie = function (array) {
  //let result = {Year : 2100}; dobbiamo partire da una variabile, le assegniamo un valore molto alto e chiediamo un confronto numerico
  // dato che ci serve come risultato un oggetto, le affibiamo un oggeto arbitrario.
  // come valore arbitrario possiamo però darle il primo valore dell'array nel seguente modo:

  let result = array[0];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      // Dobbiamo selezionare l'elemento singolo all'interno di movies,
      // il quale all'interno della funzione è denominato array
      // array[i].year  oppure scritto con una costante
      const movie = array[i];
      const currentYear = parseInt(movie.Year); // trasformiamo la stringa in un numero

      if (currentYear < result.Year) {
        result = movie;
        // ogni elemento viene ciclato, si entrerà qui dentro solo per valori minori del result ad ogni ciclo
        // rimarrà quindi il valore più basso

        /* OPPURE
      array.forEach(movie => {
        const currentYear = parseInt(movie.Year);
        if (currentYear < result.Year) {
          result = movie;
        }
      }
        ) */
      }
    }
  }
  return result;
};

console.log(oldestMovie(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const nMovies = (arr) => arr.length;

console.log(nMovies(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const onlyTitles = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const movie = arr[i];

    newArr.push(movie.Title);
  }

  /*   oppure:

  arr.forEach(movie => newArr.push(movie.Title));

  oppure ancora: 
  
  (movie è semplicemente il nome del parametro, può essere sostituito da qualsiasi parola)
  const newArr = arr.map(movie => movie.Title);  */

  return newArr;
};

console.log(onlyTitles(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function onlyInThisMillennium(arr) {
  const filteredMovies = arr.filter((movie) => parseInt(movie.Year) >= 2000);
  return filteredMovies;
}

console.log(onlyInThisMillennium(movies));

// forma contratta:
// const onlyInThisMillennium = arr => arr.filter(movie => parseInt(movie.Year) >= 2000);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sumAllTheYears = (arr) => arr.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.Year), 0);
// l'accumulatore è un valore numero, currentvalue no, per questo viene trasformato in un numero con parseInt

console.log(sumAllTheYears(movies));
// sumAllTheYears è sempre una funzione, quindi va richiamata

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

// find ci trova un elemento, non come il filter che torna un array con un elemento dentro

const getMovieById = (arr, id) => {
  return arr.find((movie) => movie.imdbID === id);
};

/* forma ONELINER
const getMovieById = (arr, id) => arr.find(movie => movie.imdbID === id); 

rendendola ancora più stringente:
const getMovieById = (arr, id) => (typeof id === "string" && id.length >= 9 && id.startsWith("tt") ? arr.find(movie => movie.imdbID === id) : "id non valido");
*/
console.log(getMovieById(movies, "tt0087365"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const getMovieByYear = (arr, year) => {
  const yearToNum = parseInt(year); // permette di convertire una stringa in un numero per un controllo maggiore

  if (typeof year === "number" && !isNaN(yearToNum)) {
    return arr.findIndex((movie) => parseInt(movie.Year) === yearToNum);
  } else {
    return -1;
  }
};

const indexFound = getMovieByYear(movies, "2023");
console.log(indexFound !== -1 ? movies[indexFound] : "non abbiamo trovato un film per quell'anno");
