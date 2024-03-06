let library;
const cart = [];

// const columns = [
//   document.getElementById("col-1"),
//   document.getElementById("col-2"),
//   document.getElementById("col-3"),
//   document.getElementById("col-4"),
// ];

window.addEventListener("load", init);

function init() {
  getLibrary();
}

async function getLibrary() {
  await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      library = data;
      console.log(library);
      populateColumns();
    })
    .catch((err) => {
      console.log("Errore nel recupero dati: ", err);
    });
}

function createCard(book) {
  let card = document.createElement("div");
  card.setAttribute("id", `card-${book.asin}`);
  card.classList.add("card", "mb-4");
  card.innerHTML = `
      <img src="${book.img}" class="card-img-top" alt="${book.title}" />
      <div class="card-body d-flex flex-column p-2">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">€ ${book.price}</p>
        <div class="container-fluid pb-3"><button id="b-${book.asin}" class="btn btn-light btn-outline-primary mt-auto align-self-center">Acquista</button>
        <button id="d-${book.asin}" class="btn btn-light btn-outline-danger mt-auto align-self-center">Scarta</button></div>
      </div>
    `;

  return card;
}

function populateColumns() {
  for (let i = 1; i <= 4; i++) {
    let col = document.getElementById(`col-${i}`);
    for (let x = i - 1; x < library.length; x += 4) {
      let book = library[x];
      let card = createCard(book);
      col.appendChild(card);

      let btnAcquista = document.getElementById(`b-${book.asin}`);
      btnAcquista.addEventListener("click", function () {
        addToCart(book.asin);
        console.log(cart);
      });

      let btnScarta = document.getElementById(`d-${book.asin}`);
      btnScarta.addEventListener("click", function () {
        removeCard(`card-${book.asin}`);
      });
    }
  }
}

function addToCart(bookId) {
  let book = library.find((book) => book.asin === bookId);
  cart.push(book);
}

function removeCard(cardId) {
  let card = document.getElementById(cardId);
  card.style.display = "none";
}
