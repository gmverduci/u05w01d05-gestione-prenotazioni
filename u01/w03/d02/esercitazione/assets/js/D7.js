/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

let risultato1 = "";

const concatenaStringhe = (stringa1, splice1, stringa2, splice2) => {
  let nuovaStringa = [];
  const primaStringa = stringa1.split("");
  const secondaStringa = stringa2.split("");
  const taglioStringa1 = primaStringa.splice(0, splice1).join("");
  const taglioStringa2 = secondaStringa.splice(splice2).join("");
  nuovaStringa = taglioStringa1.concat(taglioStringa2);
  return (risultato1 = nuovaStringa.toUpperCase());
};

concatenaStringhe("forse", 2, "non ne ho la minima idea", -3);
console.log(`Esercizio 1: ${risultato1}`);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const numeri10Random = [];

for (let i = 0; i < 10; i++) {
  let addRandom = Math.floor(Math.random() * 101);
  const doppioni = numeri10Random.some((elemento) => elemento === addRandom);
  if (!doppioni) {
    numeri10Random.push(addRandom);
  }
}

console.log(numeri10Random);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const trovaPari10 = (arrayNumeri) => {
  return arrayNumeri.filter((elemento) => elemento > 10 && elemento % 2 === 0);
};

console.log(trovaPari10(numeri10Random));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaArray = (arrayDaSommare) => {
  let somma = 0;
  arrayDaSommare.forEach((elemento) => {
    somma += elemento;
  });
  return somma;
};

console.log(sommaArray(trovaPari10(numeri10Random)));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const sommaReduce = trovaPari10(numeri10Random).reduce(
  (tot, corr) => tot + corr,
  0
);
console.log(sommaReduce);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const nMap = (array, n) => {
  const arrayMappato = array.map((elemento) => elemento + n);
  return arrayMappato;
};

console.log(nMap(numeri10Random, 10));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

let stringa1 = "BRT SDA GLS";
let stringa2 = "0965622134";
const arrayStringhe = [stringa1, stringa2];

const stringheMap = (stringheDaMappare) => {
  const lunghezzaStringhe = stringheDaMappare.map(
    (elemento) => elemento.length + 1
  );
  return lunghezzaStringhe;
};

console.log(stringheMap(arrayStringhe));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const array99 = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    array99.push(i);
  }
}

console.log(array99);

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
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
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
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
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
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const trovaFilmPiuVecchio = (film) => {
  let filmPiuVecchio = film[Math.floor(Math.random() * film.length)];
  film.forEach((element) => {
    if (Number(element.Year) < Number(filmPiuVecchio.Year)) {
      filmPiuVecchio = element;
    }
  });
  return filmPiuVecchio;
};

const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log(`${filmPiuVecchio.Title} del ${filmPiuVecchio.Year}`);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const contaFilm = () => {
  console.log(movies.length);
};

contaFilm();

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const trovaTitoli = () => {
  const titoliFilm = movies.map((element) => {
    return element.Title;
  });
  return titoliFilm;
};

console.log(trovaTitoli(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let sommaYears;
const sommaAnni = () => {
  return movies.reduce((sommaYears, element) => {
    return sommaYears += Number(element.Year);
  }, 0);
};

console.log(sommaAnni());

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function trovaFilm(elencoFilm, ID) {
  return elencoFilm.find((element) => element.imdbID === ID);
}

console.log(trovaFilm(movies, "tt4154756"));

const elenco = document.getElementById("elenco");

movies.forEach((element) => {
  let option = document.createElement("option");
  option.setAttribute("value", element.imdbID);
  option.innerText = element.Title;
  elenco.appendChild(option);
});

document.getElementById("scegli").addEventListener("click", function () {
  let imdbID = elenco.value;
  const filmScelto = movies.find((element) => {
    return element.imdbID === imdbID;
  });
  document.getElementById("titolo").innerText = filmScelto.Title;
  document.getElementById(
    "anno"
  ).innerText = `Anno di produzione: ${filmScelto.Year}`;
  document.getElementById(
    "locandina"
  ).innerHTML = `<img src="${filmScelto.Poster}" alt="Locandina ${filmScelto.Title}" />`;
  //  document.getElementById("trailer").innerHTML = filmScelto.Trailer; qui bisogna aggiungere Trailer ai vari oggetti dell'array movies
});

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
