//SWITCH: lo usiamo per verificare una condizione nei casi in cui avremmo molti else if.

let a = 12;
let b = 2;
let c = 20;

switch (true) {
  case a > b && b > c:
    console.log(a, b, c);
    break;
  case a > b && c > a:
    console.log(c, a, b);
    break;
  case b > a && a > c:
    console.log(b, a, c);
    break;
  case c > b && a > c:
    console.log(a, c, b);
    break;
  case c > a && b > c:
    console.log(b, c, a);
    break;
  default:
    console.log(c, b, a);
    break;
}

// WHILE

let contaWhile = 1;

while (contaWhile <= 10) {
  console.log("Iterazione n." + contaWhile);
  contaWhile++; // Qui possiamo utilizzare varie operazioni matematica per incrementare o decrementare (* ++ -- ecc.)
}
//DO-WHILE mette la condizione While alla fine, quindi esegue sicuramente almeno 1 iterazione prima di fermarsi.

// CICLO FOR

for (let i = 1; i <= 10; i++) {
  console.log("Iterazione for " + i);
}

a = 100;
b = 0;
for (b = 1; b <= 10; b++) {
  console.log(a * b);
}

//Il FOR si usa tipicamente per operazioni di DESTRUTTURAZIONE:

const studenti = [
  "Pavlo",
  "Vito",
  "Alessio",
  "Anna Maria",
  "Clarissa",
  "Matteo",
];

for (let i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
};

const utenti = [
  {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25,
    email: 'mario@rossi.com'
  },
  {
    nome: 'Aldo',
    cognome: 'Baglio',
    eta: 23,
    email: 'aldo@baglio.com'
  },
  {
    nome: 'Maria',
    cognome: 'Verdi',
    eta: 20,
    email: 'maria@verdi.com'
  },
  {
    nome: 'Stefania',
    cognome: 'Giglio',
    eta: 44,
    email: 'stefania@giglio.com'
  },
];


for(let i = 0; i < utenti.length; i++) {
  console.log(utenti[i]);
};


const numeri = [11, 21, 3, 44, 72, 62]
let somma = 0;


for (let i = 0; i < numeri.length; i++) {
  somma += numeri[i]; // somma = somma + numeri[i]
    switch (true) {
      case somma >= 50:
        document.getElementById('somma').innerHTML = ' valore superiore a 50';
        break;
    }
  document.getElementById("somma").innerText = somma;


  //if (somma >= 50) {
  //document.getElementById('somma').innerHTML = ' valore superiore a 50';
  //    break
  //}
}