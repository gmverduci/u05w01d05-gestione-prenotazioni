interface Smartphone {
  credito: number;
  numeroChiamate: number;
  ricarica(ammontare: number): void;
  chiamata(minuti: number): void;
  chiama404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;
  chiamataAttiva: boolean;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.credito = 0;
    this.numeroChiamate = 0;
    this.chiamataAttiva = false;
  }

  ricarica(ammontare: number): void {
    this.credito += ammontare;
    console.log(`Ricarica di ${ammontare}€ effettuata. Credito attuale: ${this.credito}€`);
    updateCreditoCorrente();
    updateStartCallButtonState();
  }

  chiamata(minuti: number): void {
    if (this.credito > 0) {
      const costoMinuto = 0.20;
      const costoChiamata = costoMinuto * minuti;

      if (this.credito >= costoChiamata) {
        this.credito -= costoChiamata;
        this.numeroChiamate += minuti;
        console.log(`Chiamata di ${formatTime(minuti)} effettuata. Credito residuo: ${this.credito}`);
      } else {
        console.log("Credito insufficiente per effettuare la chiamata. Effettua una ricarica.");
      }
    } else {
      console.log("Credito insufficiente per effettuare la chiamata. Effettua una ricarica.");
    }
    updateCreditoCorrente();
    updateStartCallButtonState();
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const utente = new User("Mario", "Rossi");

const startCallButton = document.getElementById('start-call') as HTMLButtonElement;
const endCallButton = document.getElementById('end-call') as HTMLButtonElement;
const ricaricaButton = document.getElementById('ricarica') as HTMLButtonElement;
const checkCreditoButton = document.getElementById('check-credito') as HTMLButtonElement;
const azzerachiamateButton = document.getElementById('azzerachiamate') as HTMLButtonElement;

if (startCallButton) {
  startCallButton.addEventListener('click', () => {
    if (!utente.chiamataAttiva && utente.credito > 0) {
      utente.chiamataAttiva = true;
      startTimer();
    } else {
      console.log("Chiamata già in corso o credito insufficiente.");
    }
  });
}

if (endCallButton) {
  endCallButton.addEventListener('click', () => {
    if (utente.chiamataAttiva) {
      stopTimerAndCalculateCost();
      utente.chiamataAttiva = false;
      timerSeconds = 0;
      timerMinutes = 0;
    } else {
      console.log("Nessuna chiamata in corso.");
    }
  });
}

if (ricaricaButton) {
  ricaricaButton.addEventListener('click', () => {
    const ammontareRicaricaInput = document.getElementById('ammontareRicarica') as HTMLInputElement;
    if (ammontareRicaricaInput) {
      const ammontareRicarica = parseFloat(ammontareRicaricaInput.value);
      utente.ricarica(ammontareRicarica);
    }
  });
}

if (checkCreditoButton) {
  checkCreditoButton.addEventListener('click', () => {
    const credito = utente.chiama404();
    console.log(`Credito disponibile: ${credito}€`);
  });
}

if (azzerachiamateButton) {
  azzerachiamateButton.addEventListener('click', () => {
    utente.azzeraChiamate();
    console.log("Chiamate azzerate.");
  });
}

let timer: number;
let timerSeconds: number = 0;
let timerMinutes: number = 0;

function startTimer() {
  timer = setInterval(() => {
    timerSeconds++;
    if (timerSeconds === 60) {
      timerSeconds = 0;
      timerMinutes++;
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimerAndCalculateCost() {
  clearInterval(timer);
  updateTimerDisplay();
  const costoChiamata = 0.20 * (timerMinutes + timerSeconds / 60);
  utente.chiamata(timerMinutes + timerSeconds / 60);
  console.log(`Il costo della chiamata è di ${costoChiamata.toFixed(2)}€`);
  updateCreditoCorrente();
  updateStartCallButtonState();
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    timerElement.innerText = `Timer: ${timerMinutes}:${timerSeconds < 10 ? '0' : ''}${timerSeconds}`;
  }
}

function updateCreditoCorrente() {
  const creditoCorrenteElement = document.getElementById('creditoCorrente');
  if (creditoCorrenteElement) {
    creditoCorrenteElement.innerText = `Credito: ${utente.credito.toFixed(2)}€`;
  }
}

function updateStartCallButtonState() {
  const startCallButton = document.getElementById('start-call') as HTMLButtonElement;
  if (startCallButton) {
    startCallButton.disabled = utente.credito === 0;
  }
}

function formatTime(minutes: number): string {
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
