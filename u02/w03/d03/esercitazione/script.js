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
  card.classList.add("card", "mb-4", "h-100");
  card.innerHTML = `
      <img src="${book.img}" class="card-img-top" alt="${book.title}" />
      <div class="card-body d-flex flex-column justify-content-between p-2">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">€ ${book.price}</p>
        <div class="container-fluid pb-3"><button id="b-${book.asin}" class="btn btn-light btn-outline-primary mt-auto align-self-center">Acquista</button>
        <button id="d-${book.asin}" class="btn btn-light btn-outline-danger mt-auto align-self-center">Scarta</button></div>
      </div>
    `;

  return card;
}

// function populateColumns() {
//   for (let i = 1; i <= 4; i++) {
//     let col = document.getElementById(`col-${i}`);
//     for (let x = i - 1; x < library.length; x += 4) {
//       let book = library[x];
//       let card = createCard(book);
//       col.appendChild(card);

//       let btnAcquista = document.getElementById(`b-${book.asin}`);
//       btnAcquista.addEventListener("click", function () {
//         addToCart(book.asin);
//         console.log(cart);
//       });

//       let btnScarta = document.getElementById(`d-${book.asin}`);
//       btnScarta.addEventListener("click", function () {
//         removeCard(`card-${book.asin}`);
//       });
//     }
//   }
// }

function populateColumns() {
  let container = document.getElementById("books-container");

  for (let i = 0; i < library.length; i += 4) {
    let row = document.createElement("div");
    row.classList.add("row", "mt-4");

    for (let j = 0; j < 4 && i + j < library.length; j++) {
      let col = document.createElement("div");
      col.classList.add(
        "col-md-3",
        "g-2",
        "align-items-stretch",
        "d-flex",
        "flex-column",
        "flex-wrap",
        "justify-content-start"
      );

      let book = library[i + j];
      let card = createCard(book);

      col.appendChild(card);
      row.appendChild(col);
    }

    container.appendChild(row);
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
