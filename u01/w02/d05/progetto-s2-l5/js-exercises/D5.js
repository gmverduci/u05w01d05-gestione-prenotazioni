/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

function stampaArray() {
  for (i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
  return;
}

console.log("ESERCIZIO 1");
stampaArray();

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function ordineAlfabetico() {
  pets.sort();
  for (i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
  return;
}

console.log("ESERCIZIO 2");
ordineAlfabetico();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function ordineReverse() {
  pets.sort();
  pets.reverse();
  for (i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
  return;
}

console.log("ESERCIZIO 3");
ordineReverse();

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


function primoUltimo() {
  pets.push(pets.shift());
    return;
}

console.log("ESERCIZIO 4");
primoUltimo();
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const doppiette = ["FS", "TR", "YJ", "GA", "DX", "KH"];

function addTarga() {
  for (i = 0; i < cars.length; i++) {
    cars[i].licensePlate =
      doppiette[Math.floor(Math.random() * doppiette.length)] +
      "" +
      Math.floor(Math.random() * 10) +
      "" +
      Math.floor(Math.random() * 10) +
      "" +
      Math.floor(Math.random() * 10) +
      doppiette[Math.floor(Math.random() * doppiette.length)];
  }
  return;
}

console.log("ESERCIZIO 5");
addTarga();

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

function esercizio6() {
  cars.push({
    brand: "Fiat",
    model: "Uno",
    color: "white",
    trims: ["rapine", "sequestri", "speronamenti"],
  });
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
    console.log(cars[i].trims);
  };
  return;
}

console.log("ESERCIZIO 6");
esercizio6();




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

function estraiTrim() {
  for (i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0]);
  }
  return;
}

console.log("ESERCIZIO 7");
estraiTrim();

for (i = 0; i < cars.length; i++) {
  console.log(justTrims[i]);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function fizzBuzz() {
  for (i = 0; i < cars.length; i++) {
    if (cars[i].color.charAt(0) === "b") console.log("Fizz");
    else console.log("Buzz");
  }
  return;
}

console.log("ESERCIZIO 8");
fizzBuzz();

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

function stampaNumeric() {
  let y = 0;
  while (numericArray[y] !== 32) {
    console.log(numericArray[y]);
    y++;
  }
  return;
}

console.log("ESERCIZIO 9");
stampaNumeric();

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ["g", "n", "u", "z", "d"];
const newArray = [];
const alfabetoInformatico = [
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alfabeticArray() {
  for (let i = 0; i < charactersArray.length; i++) {
    for (let x = 0; x < alfabetoInformatico.length; x++) {
      switch (true) {
        case charactersArray[i] === alfabetoInformatico[x]:
          newArray.push(x);
          break;
      }
    }
  } return;
}

console.log("ESERCIZIO 10");
alfabeticArray();
console.log(newArray);