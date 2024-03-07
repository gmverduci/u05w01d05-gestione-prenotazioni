const apiKey = "6ZvFfcsRr0xHnsabyyDZHBDt1IxLbkWoVH3YmZtdop1APjeTKSo80zqg";
const baseUrl = "https://api.pexels.com/v1/search?query=";

const searchField = document.createElement("input");
searchField.type = "text";
searchField.placeholder = "Search for images...";
searchField.className = "form-control";
searchField.setAttribute("id", "searchQuery");

const searchButton = document.createElement("button");
searchButton.type = "button";
searchButton.className = "btn btn-primary";
searchButton.textContent = "Search";
searchButton.addEventListener("click", () => {
 fetchImages(searchField.value);
});

document.querySelector(".jumbotron .container").appendChild(searchField);
document.querySelector(".jumbotron .container").appendChild(searchButton);

window.addEventListener("load", () => {
 fetchImages("nature");
});

searchField.addEventListener("keydown", (event) => {
 if (event.key === "Enter") {
    fetchImages(searchField.value);
 }
});

async function fetchImages(query) {
 try {
    const response = await fetch(baseUrl + query, {
      headers: {
        Authorization: apiKey,
      },
    });
    const data = await response.json();
    displayImages(data.photos);
 } catch (error) {
    console.error("Error fetching images:", error);
 }
}

function displayImages(images) {
 const container = document.getElementById("imageContainer");
 container.innerHTML = "";

 images.forEach((image) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    const cardElement = document.createElement("div");
    cardElement.className = "card mb-4 shadow-sm";
    card.appendChild(cardElement);

    const img = document.createElement("img");
    img.src = image.src.medium;
    img.dataset.fullsizeUrl = image.src.original; 
    img.className = "bd-placeholder-img card-img-top";
    cardElement.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = image.photographer;
    cardBody.appendChild(title);

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent =
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
    cardBody.appendChild(text);

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "d-flex justify-content-evenly align-items-center";

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = "btn btn-outline-primary";
    viewButton.textContent = "View";
    buttonGroup.appendChild(viewButton);

    const hideButton = document.createElement("button");
    hideButton.type = "button";
    hideButton.className = "btn btn-outline-danger";
    hideButton.textContent = "Hide";
    buttonGroup.appendChild(hideButton);

    cardBody.appendChild(buttonGroup);

    cardElement.appendChild(cardBody);

    container.appendChild(card);
 });
}

document.getElementById("loadImagesButton").addEventListener("click", () => {
 fetchImages("family"); 
});

document.getElementById("loadSecondaryImagesButton").addEventListener("click", () => {
 fetchImages("sport"); 
});

document.querySelector(".album").addEventListener("click", (event) => {
 if (event.target.textContent === "Hide") {
    event.target.closest(".card").style.display = "none";
 }
});

document.querySelector(".album").addEventListener("click", (event) => {
 if (event.target.textContent === "View") {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = event.target.closest(".card").querySelector("img").dataset.fullsizeUrl; 
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
 }
});
