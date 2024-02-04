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

if(a >= b && a >= c && a >= d) {
  console.log("Maggiore = " + a);
} else if (b >= a && b >= c && b >= d) {
  console.log("Maggiore = " + b);
} else if (c >= a && c >= b && c >= d) {
  console.log("Maggiore = " + c);
} else {
  console.log("Maggiore = " + d);
}
if(a <= b && a <= c && a <= d) {
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
        console.log('La tua età è di ' + deltaETA + ' anni. Ti mancano ' + delta100 + ' anni prima di compierne 100!');
    }
    else {console.log('Hai già scavallato, auguri!')}
}


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




console.log('Esercizio 4: metodo e proprietà - Il conta cifre. Scrivi un programma che dato un numero conti da quante cifre è formato.');

let numero = 245;
let numberToString = numero.toString();
console.log(numberToString.length);
