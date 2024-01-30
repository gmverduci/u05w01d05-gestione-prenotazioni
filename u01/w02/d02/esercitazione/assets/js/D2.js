/*let traccia1 =
  "ESERCIZIO 1 - Scrivi un algoritmo per trovare il più grande tra due numeri interi.";
document.getElementById("traccia1").innerHTML = traccia1;

numero1 = window.prompt("Scrivi un numero intero", "0");
numero2 = window.prompt("Scrivine un altro", "0");*/

let numero1 = 3;
let numero2 = 5;

console.log(numero1, numero2);

if (numero1 > numero2) {
  document.getElementById("risposta1").innerHTML = "Il più grande è " + numero1;
} else if (numero2 > numero1) {
  document.getElementById("risposta1").innerHTML = "Il più grande è " + numero2;
} else {
  document.getElementById("risposta1").innerHTML = "Sono uguali!"
}

/* ESERCIZIO 2 - Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
 */

let numeroEsercizio2 = numero1;
let risposta2 = "not equal";
if (numeroEsercizio2 != 5) {
  console.log(risposta2);
} else {
  console.log('equal to 5')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroEsercizio3 = numero2;
let risposta3 = "divisibile per 5";
let risposta31 = "non divisibile per 5";
if ((numeroEsercizio3 % 5) === 0) {
  console.log(risposta3);
} else {
  console.log(risposta31);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1Esercizio4 = numero1;
let numero2Esercizio4 = numero2;
let risposta4 = "Uno dei due numeri è 8";
let risposta41 = "La differenza tra i due numeri è 8";
let risposta42 = "La somma dei due numeri è 8";
let risposta43 = "Non fanno 8 manco se li ammazzi";

if (numero1Esercizio4 === 8 || numero2Esercizio4 === 8) {
  console.log(risposta4);
} else if (
  ((numero1Esercizio4 - numero2Esercizio4) === 8 &&
    (numero1Esercizio4 - numero2Esercizio4) > 0) ||
  ((numero2Esercizio4 - numero1Esercizio4) === 8 &&
    (numero2Esercizio4 - numero1Esercizio4) > 0)
) {
  console.log(risposta41);
} else if ((numero1Esercizio4 += numero2Esercizio4) === 8) {
  console.log(risposta42);
} else {
  console.log(risposta43);
}


/*console.log(((numero1Esercizio4 - numero2Esercizio4) === 8) &&
((numero1Esercizio4 - numero2Esercizio4) > 0));
console.log(((numero2Esercizio4 - numero1Esercizio4) === 8) &&
((numero2Esercizio4 - numero1Esercizio4)) > 0);*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = numero1 * numero2;
let spedizioneGratuita = "Complimenti, hai diritto alla spedizione gratuita!";
let spedizione = 10;
let spedizione10 = "Il totale da pagare è " + (totalShoppingCart + spedizione);

if (totalShoppingCart >= 50) {
  console.log(spedizioneGratuita);
} else {
  console.log(spedizione10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = 0.8;
totalShoppingCart20 = totalShoppingCart * blackFriday;
console.log(totalShoppingCart20);
let spedizione20 = "Il totale da pagare è " + (totalShoppingCart20 + spedizione);

if (totalShoppingCart20 > 50) {
  console.log(spedizioneGratuita);
} else {
  console.log(spedizione20);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 8;
let b = 12;
let c = 3;


if ((a < c) && (b < c)) {
  console.log(a, b, c);
} else if ((a < c) && (c < b)) {
  console.log(b, a, c);
} else if ((b < a) && (a < c)) {
  console.log(b, a, c);
} else if ((b < c) && (c < a)) {
  console.log(b, c, a);
} else if ((c < b) && (b < a)) {
  console.log(c, b, a);
} else {
  console.log(c, a, b);
}

if (a < b && b < c) {
  console.log(a, b, c);
}  else if (a < c && c < b) {
  console.log(a, c, b);
} else if (b < a && a < c) {
  console.log(b, a, c);
} else if (b < c && c < a) {
  console.log(b, c, a);
} else if (c < a && a < b) {
  console.log(c, a, b);
} else {
  console.log(c, b, a);
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15/=
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
