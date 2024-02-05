/* CMC: Esercizio 1: condizioni con ausilio di operatori logici
Maggiore e minore
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

Esempio:

Input: a = 3, b = -1, c = 4, d = -2
Output: maggiore = 4, minore = 2 */

let a = 3;
let b = -1;
let c = 4;
let d = -2;

if (a >= b && a >= c && a >= d) {
  console.log("Maggiore = " + a);
} else if (b >= a && b >= c && b >= d) {
  console.log("Maggiore = " + b);
} else if (c >= a && c >= b && c >= d) {
  console.log("Maggiore = " + c);
} else {
  console.log("Maggiore = " + d);
}
if (a <= b && a <= c && a <= d) {
  console.log("Minore = " + a);
} else if (b <= a && b <= c && b <= d) {
  console.log("Minore = " + b);
} else if (c <= a && c <= b && c <= d) {
  console.log("Minore = " + d);
} else {
  console.log("Minore = " + d);
}

/*Esercizio 2: stringhe e numeri
Quanti anni ha?
Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona
quanti anni sono necessari per raggiungere i 100
Esempio:

Input: anno corrente = 2021, anno di nascita = 1996
Output: età = 25, anni mancanti = 75 */

const anno = new Date();
let year = anno.getFullYear();

calcoloAnni = (nascita) => {
  if (nascita > 1924) {
    let deltaETA = year - nascita;
    let delta100 = 100 - deltaETA;
    console.log(
      "La tua età è di " +
        deltaETA +
        " anni. Ti mancano " +
        delta100 +
        " anni prima di compierne 100!"
    );
  } else {
    console.log("Hai già scavallato, auguri!");
  }
};

calcoloAnni(1987);

/*Esercizio 3: Ciclo for
Progetta un algoritmo in Javascript che stampi tutte le coppie di numeri naturali la cui somma è un numero intero a scelta.

Esempio

Input: numero 7
Output: 
- 0-7
- 1-6
- 2-5
- 3-4
- 4-3
- 5-2
- 6-1
- 7-0 */

let sum = 30;
let decSum = sum;
for (let i = 0; i <= sum; i++) {
  console.log(decSum, i);
  decSum--;
}

/*Esercizio 4: metodo e proprietà
Il conta cifre
Scrivi un programma che dato un numero conti da quante cifre è formato.

Esempio

Input: numero: 245
Output: numero cifre: 3  */

console.log(
  "Esercizio 4: metodo e proprietà - Il conta cifre. Scrivi un programma che dato un numero conti da quante cifre è formato."
);

let numero = 245;
let numberToString = numero.toString();
console.log(numberToString.length);

/* Verifica della Maggiore Età:
Scrivi un programma che chieda all'utente di inserire la propria età e stampi un messaggio diverso a seconda che l'utente sia maggiorenne o minorenne. */

/*Calcolo del Voto:
Scrivi un programma che richieda all'utente di inserire il suo voto e stampi un messaggio diverso a seconda del range in cui cade il voto (es. A, B, C, D, F).*/

/*Confronto di Stringhe:
Scrivi un programma che chieda all'utente di inserire due stringhe. Il programma dovrebbe verificare se le due stringhe sono uguali e stampare un messaggio appropriato.*/

//string to array --> for loop if array1[] = array2[] (prima ancora, come check, array1.length === array2.length?)

let string1 = "Confrontiamo queste due stringhe";
let string2 = "Confrontiamo queste due stringhe";

let checkString = "";

confrontaStringhe = (input1, input2) => {
  for (let i = 0; i < input1.length; i++) {
    if (input1.length === input2.length && input1[i] === input2[i]) {
      return (checkString = "Le due stringhe sono uguali!");
    } else return (checkString = "Le due stringhe non sono uguali!");
  }
};

confrontaStringhe(string1, string2);
console.log("Risultato confrontaStringhe: " + checkString);

/*Gioco dei Dadi:
Crea un programma che simuli il lancio di due dadi. Se la somma dei due dadi è pari, stampa un messaggio che indica la vittoria del giocatore, altrimenti stampa un messaggio che indica la sconfitta.*/

console.log(
  "Gioco dei Dadi: Crea un programma che simuli il lancio di due dadi. Se la somma dei due dadi è pari, stampa un messaggio che indica la vittoria del giocatore, altrimenti stampa un messaggio che indica la sconfitta."
);

let dado1;
let dado2;

lanciatoreDadi = () => {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);
  let lancioDadi = dado1 + dado2;
    if (lancioDadi % 2 === 0) {
      console.log(
        "Dado 1 è " +
          dado1 +
          ", mentre Dado 2 è " +
          dado2 +
          ". La somma è " +
          lancioDadi +
          ": hai vinto!"
      );
    } else
      console.log(
        "Dado 1 è " +
          dado1 +
          ", mentre Dado 2 è " +
          dado2 +
          ". La somma è " +
          lancioDadi +
          ": hai perso!"
      );
  
};

lanciatoreDadi(dado1, dado2);
console.log("Gioco dei Dadi: Crea un programma che simuli il lancio di due dadi. Se la somma dei due dadi è pari, stampa un messaggio che indica la vittoria del giocatore, altrimenti stampa un messaggio che indica la sconfitta."
);

const dadi = [];

lanciatoreDadi2 = (numeroDadi) => {

  const sommaDadi = () => dadi.push(Math.floor(Math.random() * 6 + 1));
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);
  let lancioDadi = dado1 + dado2;
    if (lancioDadi % 2 === 0) {
      console.log(
        "Dado 1 è " +
          dado1 +
          ", mentre Dado 2 è " +
          dado2 +
          ". La somma è " +
          lancioDadi +
          ": hai vinto!"
      );
    } else
      console.log(
        "Dado 1 è " +
          dado1 +
          ", mentre Dado 2 è " +
          dado2 +
          ". La somma è " +
          lancioDadi +
          ": hai perso!"
      );
  
};





/*Controllo di Autenticazione:
Scrivi un programma che richieda all'utente di inserire un nome utente e una password. Se il nome utente è corretto e la password è "password123", stampa un messaggio di accesso consentito; altrimenti, stampa un messaggio di accesso negato.*/

/*Verifica Pari o Dispari:
Chiedi all'utente di inserire un numero. Verifica se il numero è pari o dispari e stampa un messaggio appropriato.*/

/*Calcolo del Prezzo Scontato:
Scrivi un programma che chieda all'utente di inserire il prezzo di un prodotto e il tipo di sconto applicato (in percentuale). Calcola e stampa il prezzo scontato.*/

/*Validazione dell'Input:
Richiedi all'utente di inserire un numero. Verifica se l'input è un numero intero e se è compreso tra 1 e 10. Stampa un messaggio appropriato in base alla validità dell'input.*/

/*Conversione di Unità di Misura:
Scrivi un programma che converte la temperatura da Celsius a Fahrenheit o viceversa, a seconda della scelta dell'utente. Chiedi all'utente di inserire la temperatura e la scala di misura desiderata.*/

/*Gioco delle Parole:
Chiedi all'utente di inserire una parola. Verifica se la parola inizia con una vocale e stampa un messaggio appropriato. */
