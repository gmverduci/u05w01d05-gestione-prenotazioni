/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function calcolatoreArea(altezza, larghezza) {
  return altezza * larghezza;
}

calcolatoreArea();

const area = calcolatoreArea(5, 7);

console.log("Esercizio 1");
console.log(area);
console.log("-------------------------------------");

document.getElementById("esercizio1").innerText = area;

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2) {
  if (numero1 !== numero2) {
    return numero1 + numero2;
  } else return (numero1 + numero2) * 3;
}

let numeroCasuale1 = Math.floor(Math.random() * 8);
let numeroCasuale2 = Math.floor(Math.random() * 11);

const risultatoCrazySum = crazySum(numeroCasuale1, numeroCasuale2);

document.getElementById("esercizio2").innerText = risultatoCrazySum;

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(diff1, diff2) {
  if (diff1 <= diff2) {
    return diff1 - diff2;
  } else return (diff1 - diff2) * 3;
}

let diffFisso = 19;
let diffCasuale = numeroCasuale1 * numeroCasuale2;
const risultatoCrazyDiff = crazyDiff(diffCasuale, diffFisso);

document.getElementById("esercizio3").innerText = risultatoCrazyDiff;

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || (n === 400)) {
    return 'true';
  }
  else return 'false';
}

const numBoundary = [70, 700, 20, 35, 5, 7, 400, 100];
let paramBoundary = numBoundary[Math.floor(Math.random() * numBoundary.length)];
const risultatoBoundary = boundary(paramBoundary);


document.getElementById("esercizio4").innerText = risultatoBoundary;

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let epic = 'EPICODE';


function epify (string) {
    if (string.indexOf(epic) === 0) {
        return string;
    } 
    else return epic + string; 
}


const sillabe = ['EP', 'ICO', 'DE'];
let paramEpify1 = sillabe[Math.floor(Math.random() * sillabe.length)];
let paramEpify2 = sillabe[Math.floor(Math.random() * sillabe.length)];
let paramEpify3 = sillabe[Math.floor(Math.random() * sillabe.length)];
const risultatoEpify = epify(paramEpify1 + paramEpify2 + paramEpify3);

document.getElementById("esercizio5").innerText = risultatoEpify;



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7 (check37) {
    if (((check37 % 5) === 0) || ((check37 % 7) === 0)) {
        return param37 + multiplo;
    }
    else return 'Non è multiplo né di 5 né di 7';
}

let multiplo = ' è multiplo di 5 o di 7.';
let param37 = numBoundary[Math.floor(Math.random() * numBoundary.length)];
const risultatoCheck37 = check3and7(param37);


document.getElementById("esercizio6").innerText = risultatoCheck37;


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/




function reverseString (agnirts) {
    let nuovaStringa ='';
    let lettereStringa = (agnirts.split(""));
    for (i = lettereStringa.length - 1; i >= 0; i--) {
        nuovaStringa += lettereStringa[i];
        }
    return nuovaStringa;
}


let alorap = 'Fs0124'

const risultatoReverseString = reverseString(alorap);



document.getElementById("esercizio6").innerText = risultatoReverseString;


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


let atagliar = 'infondoalmare';


function cutString (daTagliare = '') {
    let daTagliare1 = daTagliare.slice(1, -1);
    return daTagliare1;
}

const risultatoCutString = cutString(atagliar);

document.getElementById("esercizio9").innerText = risultatoCutString;



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/



function giveMeRandom (paramRand) {
    const arrayNumeri =[];
    for (i = 0; i < paramRand; i++) {
        arrayNumeri.push(Math.floor(Math.random() * i));
    } return arrayNumeri;
}


risultatoGiveMeRandom = giveMeRandom(Math.floor(Math.random() * 10));

document.getElementById("esercizio10").innerText = risultatoGiveMeRandom;


