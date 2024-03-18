var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
        this.chiamataAttiva = false;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
        console.log("Ricarica di ".concat(ammontare, "\u20AC effettuata. Credito attuale: ").concat(this.credito, "\u20AC"));
        updateCreditoCorrente();
        updateStartCallButtonState();
    };
    User.prototype.chiamata = function (minuti) {
        if (this.credito > 0) {
            var costoMinuto = 0.20;
            var costoChiamata = costoMinuto * minuti;
            if (this.credito >= costoChiamata) {
                this.credito -= costoChiamata;
                this.numeroChiamate += minuti;
                console.log("Chiamata di ".concat(formatTime(minuti), " effettuata. Credito residuo: ").concat(this.credito));
            }
            else {
                console.log("Credito insufficiente per effettuare la chiamata. Effettua una ricarica.");
            }
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata. Effettua una ricarica.");
        }
        updateCreditoCorrente();
        updateStartCallButtonState();
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var utente = new User("Mario", "Rossi");
var startCallButton = document.getElementById('start-call');
var endCallButton = document.getElementById('end-call');
var ricaricaButton = document.getElementById('ricarica');
var checkCreditoButton = document.getElementById('check-credito');
var azzerachiamateButton = document.getElementById('azzerachiamate');
if (startCallButton) {
    startCallButton.addEventListener('click', function () {
        if (!utente.chiamataAttiva && utente.credito > 0) {
            utente.chiamataAttiva = true;
            startTimer();
        }
        else {
            console.log("Chiamata già in corso o credito insufficiente.");
        }
    });
}
if (endCallButton) {
    endCallButton.addEventListener('click', function () {
        if (utente.chiamataAttiva) {
            stopTimerAndCalculateCost();
            utente.chiamataAttiva = false;
            timerSeconds = 0;
            timerMinutes = 0;
        }
        else {
            console.log("Nessuna chiamata in corso.");
        }
    });
}
if (ricaricaButton) {
    ricaricaButton.addEventListener('click', function () {
        var ammontareRicaricaInput = document.getElementById('ammontareRicarica');
        if (ammontareRicaricaInput) {
            var ammontareRicarica = parseFloat(ammontareRicaricaInput.value);
            utente.ricarica(ammontareRicarica);
        }
    });
}
if (checkCreditoButton) {
    checkCreditoButton.addEventListener('click', function () {
        var credito = utente.chiama404();
        console.log("Credito disponibile: ".concat(credito, "\u20AC"));
    });
}
if (azzerachiamateButton) {
    azzerachiamateButton.addEventListener('click', function () {
        utente.azzeraChiamate();
        console.log("Chiamate azzerate.");
    });
}
var timer;
var timerSeconds = 0;
var timerMinutes = 0;
function startTimer() {
    timer = setInterval(function () {
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
    var costoChiamata = 0.20 * (timerMinutes + timerSeconds / 60);
    utente.chiamata(timerMinutes + timerSeconds / 60);
    console.log("Il costo della chiamata \u00E8 di ".concat(costoChiamata.toFixed(2), "\u20AC"));
    updateCreditoCorrente();
    updateStartCallButtonState();
}
function updateTimerDisplay() {
    var timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerText = "Timer: ".concat(timerMinutes, ":").concat(timerSeconds < 10 ? '0' : '').concat(timerSeconds);
    }
}
function updateCreditoCorrente() {
    var creditoCorrenteElement = document.getElementById('creditoCorrente');
    if (creditoCorrenteElement) {
        creditoCorrenteElement.innerText = "Credito: ".concat(utente.credito.toFixed(2), "\u20AC");
    }
}
function updateStartCallButtonState() {
    var startCallButton = document.getElementById('start-call');
    if (startCallButton) {
        startCallButton.disabled = utente.credito === 0;
    }
}
function formatTime(minutes) {
    var mins = Math.floor(minutes);
    var secs = Math.round((minutes - mins) * 60);
    return "".concat(mins, ":").concat(secs < 10 ? '0' : '').concat(secs);
}
