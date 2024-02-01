// FUNZIONI

// Le funzioni possono essere FUNZIONALI o OPERATIVE:
// FUNZIONALI: restituisce un risultato;
// OPERATIVE: fa qualcosa;

//Es. funzione funzionale:
function scrivi() {
    document.getElementById('titolo').innerText = 'Hello World!'
}

scrivi();


//INPUT funzioni : PARAMETRI


function consoleLog() {
    return 'ciao';
}

console.log(consoleLog());
// restituisce in console 'ciao'


fermati = false;

function stop() {
    if (fermati) return;
    console.log('non mi sono fermata');
}

stop();


// posso inserire il valore ritornato da una funzione in una variabile:

let numero;

function somma1() {
    return 5 + 2;
}

numero = somma1();
console.log(numero);
//in console: 7



// PARAMETRI
// attribuiscono alla funzione la possibilità di manipolare dei valore e di utilizzarli per l'esecuzione di istruzioni

function somma2(num1, num2) { // qui si chiamano PARAMETRI
    return num1 + num2;
}

console.log(somma2(4, 5)); // quando vengono utilizzati si chiamano ARGOMENTI

function somma3(num1, num2) { // qui si chiamano PARAMETRI
    if (num1 < num2) return; // per evitare che dia un risultato negativo
    return num1 + num2;
}



