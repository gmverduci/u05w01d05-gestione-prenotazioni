/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const h1Change = document.querySelector("h1");

const changeTitle = function (nuovoTitolo) {
  h1Change.innerText = nuovoTitolo;
};

changeTitle("Non ho fantasia");

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (nuovaClasseH1) {
  h1Change.setAttribute("class", nuovaClasseH1);
};

addClassToTitle("myHeading");

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (cambioP) {
  const pDiv = document.querySelectorAll("div p");
  for (let i = 0; i < pDiv.length; i++) {
    pDiv[i].innerHTML = cambioP;
  }
};

changePcontent("Ho cambiato il contenuto di p");

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function (aSoreta) {
  const aCambia = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < aCambia.length; i++) {
    aCambia[i].setAttribute("href", aSoreta);
  }
};

changeUrls("https://www.google.com");

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (moreLi, liText) {
  const lista2 = document.getElementById("secondList");
  const nuovoLi = document.createElement(moreLi);
  nuovoLi.innerText = liText;
  lista2.appendChild(nuovoLi);
};

addToTheSecond("li", "4th");

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (nuovoP) {
  const nuovoDivP = document.createElement(nuovoP);
  const primoDiv = document.querySelector("body > div:first-child");
  primoDiv.appendChild(nuovoDivP);
};

addParagraph("p");

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function (sparisci) {
  const lista1 = document.getElementById(sparisci);
  lista1.setAttribute("style", "display: none");
};

hideFirstUl("firstList");

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const allLists = document.querySelectorAll("ul");
  for (let i = 0; i < allLists.length; i++) {
    allLists[i].setAttribute("style", "background-color: green");
  }
};

paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const h1Originario = document.querySelector("h1");
  h1Originario.addEventListener("click", function () {
    const h1Prima = h1Originario.textContent;
    const h1Dopo = h1Prima.slice(0, -1);
    h1Originario.textContent = h1Dopo;
  });
};

makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const linkIniziale = document.querySelector("footer a");

  linkIniziale.addEventListener("click", function () {
    alert(linkIniziale.href);
  });
};

revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function (contenutoRiga1, contenutoRiga2, contenutoRiga3, contenutoRiga4) {
  const tableArea = document.getElementById("tableArea");
  const tabella = document.createElement("table");
  const intestazione = [contenutoRiga1, contenutoRiga2, contenutoRiga3, contenutoRiga4];
  const creaIntestazione = tabella.insertRow();
  tableArea.appendChild(tabella);

  for (let i = 0; i < intestazione.length; i++) {
    const titolo = document.createElement("th");
    titolo.textContent = intestazione[i];
    creaIntestazione.appendChild(titolo);
  }
}

generateTable("Immagine", "Nome Prodotto", "Quantità", "Prezzo");

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
