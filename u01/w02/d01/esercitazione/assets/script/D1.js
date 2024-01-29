/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Principali datatype:
- Stringa:
- Numero:
- Boolean: 
- null:
- undefined:
*/

let z = "Principali datatype - ";

let a = " Stringa: ";
let a2 =
  "Dati indicati sempre tra apici che vengono trattati come testo. Quindi anche indicando un numero tra gli apici, qualora si eseguisse un'operazione di somma il risultato non sarebbe la somma tra i due numeri ma una concatenazione tra la stringa e il numero che volevamo sommare. ------";

let b = " Numero: ";
let b2 =
  "Valore numerico classico che può essere utilizzato per operazione di calcolo matematico. Si indica senza apici al contrario delle stringhe. Visto che in Javascript è un linguaggio a tipizzazione debole, potremo indicare direttamente un numero intero o decimale. ------";

let c = " Boolean: ";
let c2 =
  "Un dato è di tipo booleano se può dare come risultato solo vero o falso, quindi ha esclusivamente valore binario. E' utile per la verifica o l'inserimento di una condizione. ------";

let d = " Null: ";
let d2 =
  "è un valore nullo, segnala cioè l'assenza di un oggetto. Al contrario di 0, che in informatica è il primo dei numeri positivi, indica una mancanza di identificazione e nella logica booleana rappresenta una condizione false. E' utile per identificare problemi di funzionamento degli script. ------";

let e = " undefined: ";
let e2 =
  "indica che non è stato assegnato un valore a una variabile. Se ad esempio proviamo a usare una variabile non precedentemente definita otterremo un avviso di undefined.";

let Risposta1 = z + a + a2 + b + b2 + c + c2 + d + d2 + e + e2;
console.log(Risposta1);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Marcello";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Verduci";

/* const mySurname = 'Verduci';
mySurname = 'Martino'; */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 != name2);

console.log(name1.toLowerCase() === name2.toLowerCase());
