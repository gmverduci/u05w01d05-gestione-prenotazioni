const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDgwMjJkN2IxMTAwMTkwZTZkZGEiLCJpYXQiOjE3MDk4ODk1MzgsImV4cCI6MTcxMTA5OTEzOH0.lxPP1pvzX_otJ2Lm1nttNsifxs64JKd_VW8f3QEVdVg";
let productsData = [];

function init() {
  console.log("Initialization started");
  buildPage();
  fetchProducts();
}

function buildPage() {
  document.body.className = "bg-secondary-subtle";

  const app = document.createElement("div");
  app.id = "app";
  document.body.appendChild(app);

  const navbar = document.createElement("nav");
  navbar.className =
    "navbar navbar-expand-lg navbar-light bg-light mb-5 px-3 sticky-top";
  app.appendChild(navbar);

  const navbarBrand = document.createElement("a");
  navbarBrand.className =
    "navbar-brand d-flex justify-content-start align-items-between";
  navbarBrand.href = "#";
  navbarBrand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-controller me-2" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/></svg><h1 class="h4 mb-0">Marcello's Games</h1 class="h4">`;
  navbar.appendChild(navbarBrand);

  navbarBrand.addEventListener("click", async () => {
    await fetchProducts();
    showHomePage(productsData);
  });

  const btnCollpase = document.createElement("button");
  btnCollpase.className = "navbar-toggler";
  btnCollpase.type = "button";
  btnCollpase.setAttribute("data-bs-toggle", "collapse");
  btnCollpase.setAttribute("data-bs-target", "#navbarDropdown");
  navbar.appendChild(btnCollpase);

  const collapseToggle = document.createElement("span");
  collapseToggle.className = "navbar-toggler-icon";
  btnCollpase.appendChild(collapseToggle);

  const navbarNav = document.createElement("div");
  navbarNav.className = "collapse navbar-collapse";
  navbarNav.id = "navbarDropdown";
  navbar.appendChild(navbarNav);

  const navbarNavUl = document.createElement("ul");
  navbarNavUl.className = "navbar-nav";
  navbarNav.appendChild(navbarNavUl);

  const navbarNavLiHome = document.createElement("li");
  navbarNavLiHome.className = "nav-item active";
  navbarNavUl.appendChild(navbarNavLiHome);

  const navbarNavLiHomeA = document.createElement("a");
  navbarNavLiHomeA.className = "nav-link";
  navbarNavLiHomeA.href = "#";
  navbarNavLiHomeA.textContent = "Home";
  navbarNavLiHomeA.addEventListener("click", async () => {
    await fetchProducts();
    showHomePage(productsData);
  });

  navbarNavLiHome.appendChild(navbarNavLiHomeA);

  const navbarNavLiBackOffice = document.createElement("li");
  navbarNavLiBackOffice.className = "nav-item";
  navbarNavUl.appendChild(navbarNavLiBackOffice);

  //   const navbarNavLiBackOfficeA = document.createElement("a");
  //   navbarNavLiBackOfficeA.className = "nav-link";
  //   navbarNavLiBackOfficeA.href = "#";
  //   navbarNavLiBackOfficeA.textContent = "Back-Office";
  //   navbarNavLiBackOfficeA.addEventListener("click", () => showBackOfficePage());
  //   navbarNavLiBackOffice.appendChild(navbarNavLiBackOfficeA);

  const main = document.createElement("main");
  main.className = "container my-3";
  app.appendChild(main);
}

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: apiKey,
      },
    });
    const products = await response.json();
    console.log("Parsed products:", products);
    if (Array.isArray(products)) {
      productsData = products;
      showHomePage(productsData);
    } else {
      console.error("Products data is not an array:", products);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function showHomePage(products) {
  console.log("Products in showHomePage:", products);
  const main = document.getElementById("app").querySelector("main");
  main.innerHTML = "";

  const backendTabContainer = document.createElement("div");
  backendTabContainer.className =
    "d-flex flex-column align-items-end position-fixed top-30 end-0 me-5 mt-1 pe-5";
  backendTabContainer.style.zIndex = "1000";
  main.appendChild(backendTabContainer);

  const backendTabButton = document.createElement("a");
  backendTabButton.className = "btn btn-primary py-3 px-3";
  backendTabButton.setAttribute("data-bs-toggle", "collapse");
  backendTabButton.setAttribute("data-bs-target", "#backendTabContent");
  backendTabButton.setAttribute("aria-controls", "backendTabContent");
  backendTabButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
`;
  backendTabContainer.appendChild(backendTabButton);
  backendTabContainer.addEventListener("click", () => showBackOfficePage());

  const container = document.createElement("div");
  container.className = "container text-center";
  main.appendChild(container);

  //   const catalogueTitle = document.createElement('h1')
  //   catalogueTitle.className = ''
  //   catalogueTitle.textContent = 'Catalogue'
  //   container.appendChild(catalogueTitle);

  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-md-3 row-cols-lg-4";
  container.appendChild(row);

  if (Array.isArray(products)) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className =
        "card mb-3 me-3 d-flex flex-col justify-content between shadow-sm p-0";
      row.appendChild(productCard);

      const img = document.createElement("img");
      img.src = product.imageUrl;
      img.className = "bd-placeholder-img card-img-top p-0";
      img.style.height = "17rem";
      productCard.appendChild(img);

      const cardBody = document.createElement("div");
      cardBody.className =
        "card-body d-flex flex-column justify-content-between";
      productCard.appendChild(cardBody);

      const textContainer = document.createElement("div");
      textContainer.className = "mb-3";
      cardBody.appendChild(textContainer);

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title h2";
      cardTitle.textContent = product.name;
      textContainer.appendChild(cardTitle);

      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerHTML = product.description;
      textContainer.appendChild(cardText);

      const cardPrice = document.createElement("p");
      cardPrice.className = "card-text fs-5";
      cardPrice.innerHTML = `Prezzo: € ${product.price}.00`; /* A dimostrazione della mia enorme forza di volontà ho inserito .00 al posto di un Math.random */
      cardBody.appendChild(cardPrice);

      const cardFooter = document.createElement("div");
      cardFooter.className = "card-footer text-muted";
      cardFooter.textContent = `Brand: ${product.brand}`;
      productCard.appendChild(cardFooter);

      const cardButtons = document.createElement("div");
      cardButtons.className =
        "card-buttons d-flex justify-content-center ps-1 my-2";
      productCard.appendChild(cardButtons);

      const editButton = document.createElement("button");
      editButton.className = "btn btn-warning px-3 me-4";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => showEditProductPage(product));
      cardButtons.appendChild(editButton);

      const detailsButton = document.createElement("button");
      detailsButton.className = "btn btn-info px-4";
      detailsButton.textContent = "Details";
      detailsButton.addEventListener("click", () =>
        showProductDetailsPage(product)
      );
      cardButtons.appendChild(detailsButton);
    });
  } else {
    console.error("Products data is not an array:", products);
  }
}

function showEditProductPage(product) {
  const main = document.getElementById("app").querySelector("main");
  main.innerHTML = "";

  const backendTabContainer = document.createElement("div");
  backendTabContainer.className =
    "d-flex flex-column align-items-end position-fixed top-30 end-0 me-5 mt-1 pe-5";
  backendTabContainer.style.zIndex = "1000";
  main.appendChild(backendTabContainer);

  const backendTabButton = document.createElement("a");
  backendTabButton.className = "btn btn-primary py-3 px-3";
  backendTabButton.setAttribute("data-bs-toggle", "collapse");
  backendTabButton.setAttribute("data-bs-target", "#backendTabContent");
  backendTabButton.setAttribute("aria-controls", "backendTabContent");
  backendTabButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
`;
  backendTabContainer.appendChild(backendTabButton);
  backendTabContainer.addEventListener("click", function () {
    showHomePage(productsData);
  });

  const editProductForm = document.createElement("form");
  editProductForm.id = "editProductForm";
  main.appendChild(editProductForm);

  const fields = ["name", "description", "brand", "imageUrl", "price"];

  const createFormGroup = (field) => {
    const formGroup = document.createElement("div");
    formGroup.className = "mb-3";
    editProductForm.appendChild(formGroup);

    const label = document.createElement("label");
    label.htmlFor = field;
    label.textContent = field.charAt(0).toUpperCase() + field.slice(1);
    formGroup.appendChild(label);

    const input = document.createElement("input");
    input.type = field === "price" ? "number" : "text";
    input.id = field;
    input.name = field;
    input.className = "form-control";
    input.value = product[field];
    formGroup.appendChild(input);

    input.addEventListener("input", () => {
      const anyFieldFilled = Array.from(editProductForm.elements).some(
        (el) => el.value
      );
      saveButton.disabled = !anyFieldFilled;
    });
  };

  fields.forEach(createFormGroup);

  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "btn btn-success me-3";
  saveButton.textContent = "Save";
  saveButton.disabled = true;
  saveButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!confirm("Are you sure you want to update this product?")) {
      return;
    }

    const productData = {};
    for (const element of editProductForm.elements) {
      if (element.name) {
        if (element.name === "price") {
          productData[element.name] = parseInt(element.value, 10);
        } else {
          productData[element.name] = element.value;
        }
      }
    }

    try {
      const response = await fetch(`${apiUrl}${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      editProductForm.reset();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  });
  editProductForm.appendChild(saveButton);

  const resetButton = document.createElement("button");
  resetButton.type = "reset";
  resetButton.className = "btn btn-secondary me-3";
  resetButton.textContent = "Reset";
  editProductForm.appendChild(resetButton);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger";
  deleteButton.textContent = "Delete Product";
  deleteButton.addEventListener("click", async () => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const response = await fetch(`${apiUrl}${product._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      editProductForm.reset();
      const successMessage = `Your product ${product.name} (id: ${product._id}) was successfully deleted!`;
      showModal(successMessage);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  });
  editProductForm.appendChild(deleteButton);

  const showModal = (message) => {
    const modal = document.createElement("div");
    modal.id = "deleteModal";
    modal.className = "modal fade show";
    modal.style.display = "block";
    modal.innerHTML = `
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title fs-5">Success!</h5>
           </div>
           <div class="modal-body">
             <p>${message}</p>
           </div>
           <div class="modal-footer">
             <button type="button" id="modal-close-btn" class="btn btn-primary" onclick="closeModal()">Back to Home</button>
           </div>
         </div>
       </div>`;
    document.body.appendChild(modal);

    window.closeModal = async () => {
      modal.style.display = "none";
      document.body.removeChild(modal);
      await fetchProducts();
      showHomePage(productsData);
    };
  };
}

function showProductDetailsPage(product) {
  const main = document.getElementById("app").querySelector("main");
  main.innerHTML = "";

  const backendTabContainer = document.createElement("div");
  backendTabContainer.className =
    "d-flex flex-column align-items-end position-fixed top-30 end-0 me-5 mt-1 pe-5";
  backendTabContainer.style.zIndex = "1000";
  main.appendChild(backendTabContainer);

  const backendTabButton = document.createElement("a");
  backendTabButton.className = "btn btn-primary py-3 px-3";
  backendTabButton.setAttribute("data-bs-toggle", "collapse");
  backendTabButton.setAttribute("data-bs-target", "#backendTabContent");
  backendTabButton.setAttribute("aria-controls", "backendTabContent");
  backendTabButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
`;
  backendTabContainer.appendChild(backendTabButton);
  backendTabContainer.addEventListener("click", function () {
    showHomePage(productsData);
  });

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "row d-flex align-items-center";
  main.appendChild(detailsContainer);

  const imageContainer = document.createElement("div");
  imageContainer.className = "col-md-6";
  detailsContainer.appendChild(imageContainer);

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.className = "img-fluid";
  imageContainer.appendChild(productImage);

  const detailsContainerRight = document.createElement("div");
  detailsContainerRight.className = "col-md-6";
  detailsContainer.appendChild(detailsContainerRight);

  const productName = document.createElement("h2");
  productName.textContent = product.name;
  detailsContainerRight.appendChild(productName);

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  detailsContainerRight.appendChild(productDescription);

  const productBrand = document.createElement("p");
  productBrand.textContent = `Brand: ${product.brand}`;
  detailsContainerRight.appendChild(productBrand);

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${product.price}`;
  detailsContainerRight.appendChild(productPrice);
}

function showBackOfficePage() {
  const main = document.getElementById("app").querySelector("main");
  main.innerHTML = "";

  const backendTabContainer = document.createElement("div");
  backendTabContainer.className =
    "d-flex flex-column align-items-end position-fixed top-30 end-0 me-5 mt-1 pe-5";
  backendTabContainer.style.zIndex = "1000";
  main.appendChild(backendTabContainer);

  const backendTabButton = document.createElement("a");
  backendTabButton.className = "btn btn-primary py-3 px-3";
  backendTabButton.setAttribute("data-bs-toggle", "collapse");
  backendTabButton.setAttribute("data-bs-target", "#backendTabContent");
  backendTabButton.setAttribute("aria-controls", "backendTabContent");
  backendTabButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
`;
  backendTabContainer.appendChild(backendTabButton);
  backendTabContainer.addEventListener("click", function () {
    showHomePage(productsData);
  });

  const backOfficeTitle = document.createElement("h2");
  backOfficeTitle.textContent = "Back-Office";
  backOfficeTitle.className = "mb-3";
  main.appendChild(backOfficeTitle);

  const addProductForm = document.createElement("form");
  addProductForm.id = "productForm";
  main.appendChild(addProductForm);
  addProductForm.style.width = "60%";

  const formGroups = ["name", "description", "brand", "imageUrl", "price"].map(
    (field) => {
      const formGroup = document.createElement("div");
      formGroup.className = "mb-3";
      addProductForm.appendChild(formGroup);

      const label = document.createElement("label");
      label.htmlFor = field;
      label.textContent = field.charAt(0).toUpperCase() + field.slice(1);
      formGroup.appendChild(label);

      const input = document.createElement("input");
      input.type = field === "price" ? "number" : "text";
      input.id = field;
      input.name = field;
      input.className = "form-control";
      input.required = true;
      formGroup.appendChild(input);

      const small = document.createElement("small");
      small.className = "form-text text-danger";
      small.style.display = "none";
      formGroup.appendChild(small);

      input.addEventListener("focusout", () => {
        if (input.value.trim() === "") {
          small.textContent = `Please write ${
            field.charAt(0).toUpperCase() + field.slice(1)
          }`;
          small.style.display = "block";
        } else {
          small.style.display = "none";
        }
      });

      return input;
    }
  );

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Add Product";
  addProductForm.appendChild(submitButton);

  submitButton.disabled = true;

  function checkFormValidity() {
    let allFieldsFilled = true;
    formGroups.forEach((input) => {
      if (input.value.trim() === "") {
        allFieldsFilled = false;
        input.classList.add = "bg-warning";
      } else {
        input.classList.remove = "bg-warning";
      }
    });
    submitButton.disabled = !allFieldsFilled;
  }
  formGroups.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  addProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = document.getElementById("productForm");
    const product = {};

    for (const element of form.elements) {
      if (element.name) {
        product[element.name] = element.value;
      }
    }

    console.log(product);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newProduct = await response.json();
      console.log("New product added:", newProduct);

      for (const element of form.elements) {
        element.value = "";
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  });
}

window.addEventListener("load", init);
