// Array per memorizzare i numeri estratti
const numeriEstratti = [];

// Funzione di inizializzazione
const init = (saccoNumeri) => {
  console.log("Init chiamata");

  const numeriDaEstrarre = [];
  const tomboloneTable = document.getElementById("tombolone");
  const estrazioneTh = document.createElement("th");
  estrazioneTh.classList.add("estrazione");
  estrazioneTh.setAttribute('colspan', '10');

  // Creazione del bottone con una classe
  const btnEstrazione = document.createElement("button");
  btnEstrazione.type = "button";
  btnEstrazione.classList.add("btnEstrazione"); // Aggiungi una classe al bottone
  btnEstrazione.textContent = "ESTRAI NUMERO"; // Aggiungi il testo al bottone
  estrazioneTh.appendChild(btnEstrazione);

  tomboloneTable.appendChild(estrazioneTh);

  let numbers = saccoNumeri;

  // Funzione per popolare l'array numeriDaEstrarre
  const numeriTombolone = (numbers) => {
    console.log("numeriTombolone chiamata");
    for (let i = 1; i < numbers + 1; i++) {
      numeriDaEstrarre.push(i);
    }
    return numeriDaEstrarre;
  };

  // Funzione per estrarre un numero casuale
  const estraiNumeroCasuale = () => {
    console.log("estraiNumeroCasuale chiamata");
    const indiceCasuale = Math.floor(Math.random() * numeriDaEstrarre.length);
    const numeroEstratto = numeriDaEstrarre.splice(indiceCasuale, 1)[0];

    // Aggiungi il numero estratto all'array numeriEstratti
    numeriEstratti.push(numeroEstratto);

    const bussolotto = document.querySelector(".bussolotto");
    bussolotto.textContent = "";

    const immagineNumero = document.createElement("img");
    immagineNumero.src = `assets/img/${numeroEstratto}.png`;
    immagineNumero.alt = `Numero ${numeroEstratto}`;
    bussolotto.appendChild(immagineNumero);

    const testoNumero = document.createElement("span");
    testoNumero.textContent = numeroEstratto;
    bussolotto.appendChild(testoNumero);
    
    // Assegna la classe "estratto" a tutte le caselle del tombolone corrispondenti ai numeri estratti
    numeriEstratti.forEach(numero => {
      const casellaCorrispondente = document.querySelector(
        `#tombolone td.casellaTombolone.casella${numero}`
      );
      if (casellaCorrispondente) {
        casellaCorrispondente.classList.add("estratto");
      }
    });
  };

  // Aggiunta di un listener di eventi al bottone utilizzando la classe
  btnEstrazione.addEventListener("click", estraiNumeroCasuale);

  // Funzione per creare la griglia del tombolone
  const intestazioneTombolone = () => {
    console.log("intestazioneTombolone chiamata");
    const bussolotto = document.createElement("div");
    bussolotto.classList.add("bussolotto");
    bussolotto.setAttribute('id', 'bussolotto');
    estrazioneTh.appendChild(bussolotto);

    const smorfiaDiv = document.createElement("div");
    smorfiaDiv.classList.add("smorfia");

    const grigliaTombolone = () => {
      for (let i = 1; i < 10; i++) {
        const rigaTombolone = document.createElement("tr");
        rigaTombolone.classList.add("rigaTombolone");
        rigaTombolone.setAttribute("id", `riga${i}`);
        estrazioneTh.appendChild(rigaTombolone);
        for (let j = 1; j <= 10; j++) {
          const casellaTombolone = document.createElement("td");
          casellaTombolone.classList.add(
            "casellaTombolone",
            `casella${(i - 1) * 10 + j}`
          );
          casellaTombolone.textContent = `${(i - 1) * 10 + j}`;
          rigaTombolone.appendChild(casellaTombolone);
        }
      }
    };

    grigliaTombolone();

    numeriTombolone(90);

    console.log(numeriDaEstrarre);
  };

  // Chiamata alla funzione per creare il tombolone
  intestazioneTombolone();
};

// Avvio dell'inizializzazione
init(90);
