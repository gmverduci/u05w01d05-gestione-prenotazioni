class Pet {
  constructor(_species, _breed, _petName, _ownerName) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  checkOwner(x, y) {
    return x.ownerName === y.ownerName;
  }
}

let pets = [];

function loadPetsFromStorage() {
  let storedPets = localStorage.getItem("pets");
  if (storedPets) {
    pets = JSON.parse(storedPets);
    printPets();
  }
}

function savePetsToStorage() {
  localStorage.setItem("pets", JSON.stringify(pets));
}

function printPets() {
  let petList = document.getElementById("pet");
  petList.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    let row = document.createElement("tr");

    let checkboxCol = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "pet-checkbox";
    checkbox.value = i;
    checkboxCol.appendChild(checkbox);
    row.appendChild(checkboxCol);

    let petNameCol = document.createElement("td");
    petNameCol.innerText = `${pets[i].petName}`;
    row.appendChild(petNameCol);

    let petSpeciesCol = document.createElement("td");
    petSpeciesCol.innerText = `${pets[i].species}`;
    row.appendChild(petSpeciesCol);

    let petBreedCol = document.createElement("td");
    petBreedCol.innerText = `${pets[i].breed}`;
    row.appendChild(petBreedCol);

    petList.appendChild(row);
  }
}

const submitBtn = document.getElementById("submit-btn");
const speciesSelect = document.getElementById("species");
const breedSelect = document.getElementById("breed");
const petNameInput = document.getElementById("pet-name");
const ownerNameInput = document.getElementById("owner-name");
const checkOwnerBtn = document.getElementById("check-owner-btn");
const checkboxes = document.querySelectorAll('input[name="pet-checkbox"]');

const dogBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Poodle",
];
const catBreeds = ["Siamese", "Maine Coon", "Persian", "Bengal", "Sphynx"];
const parrotBreeds = [
  "African Grey",
  "Cockatiel",
  "Macaw",
  "Lovebird",
  "Conure",
];
const fishBreeds = ["Goldfish", "Betta Fish", "Angelfish", "Guppy", "Tetra"];

loadPetsFromStorage();

speciesSelect.addEventListener("change", function () {
  if (speciesSelect.value !== "") {
    breedSelect.removeAttribute("disabled");

    switch (speciesSelect.value) {
      case "Dog":
        let emptyOption = document.createElement("option");
        emptyOption.text = "Select breed";
        breedSelect.innerHTML = "";
        breedSelect.appendChild(emptyOption);

        for (let i = 0; i < dogBreeds.length; i++) {
          let option = document.createElement("option");
          option.text = dogBreeds[i];
          option.value = dogBreeds[i];
          breedSelect.appendChild(option);
        }
        break;

      case "Cat":
        let emptyOptionCat = document.createElement("option");
        emptyOptionCat.text = "Select breed";
        breedSelect.innerHTML = "";
        breedSelect.appendChild(emptyOptionCat);

        for (let i = 0; i < catBreeds.length; i++) {
          let optionCat = document.createElement("option");
          optionCat.text = catBreeds[i];
          optionCat.value = catBreeds[i];
          breedSelect.appendChild(optionCat);
        }
        break;

      case "Parrot":
        let emptyOptionParrot = document.createElement("option");
        emptyOptionParrot.text = "Select breed";
        breedSelect.innerHTML = "";
        breedSelect.appendChild(emptyOptionParrot);

        for (let i = 0; i < parrotBreeds.length; i++) {
          let optionParrot = document.createElement("option");
          optionParrot.text = parrotBreeds[i];
          optionParrot.value = parrotBreeds[i];
          breedSelect.appendChild(optionParrot);
        }
        break;

      case "Fish":
        let emptyOptionFish = document.createElement("option");
        emptyOptionFish.text = "Select breed";
        breedSelect.innerHTML = "";
        breedSelect.appendChild(emptyOptionFish);

        for (let i = 0; i < fishBreeds.length; i++) {
          let optionFish = document.createElement("option");
          optionFish.text = fishBreeds[i];
          optionFish.value = fishBreeds[i];
          breedSelect.appendChild(optionFish);
        }
        break;
    }
  } else {
    breedSelect.setAttribute("disabled", true);
  }
});

breedSelect.addEventListener("change", function () {
  if (breedSelect.value !== "") {
    petNameInput.removeAttribute("disabled");
  } else {
    petNameInput.setAttribute("disabled", true);
  }
});

petNameInput.addEventListener("input", function () {
  if (petNameInput.value.trim() !== "") {
    ownerNameInput.removeAttribute("disabled");
  } else {
    ownerNameInput.setAttribute("disabled", true);
  }
});

ownerNameInput.addEventListener("input", function () {
  if (ownerNameInput.value.trim() !== "") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let species = speciesSelect.value;
  let breed = breedSelect.value;
  let petName = petNameInput.value;
  let ownerName = ownerNameInput.value;

  let newPet = new Pet(species, breed, petName, ownerName);
  pets.push(newPet);

  savePetsToStorage();

  printPets();

  speciesSelect.value = "";
  breedSelect.value = "";
  petNameInput.value = "";
  ownerNameInput.value = "";

  submitBtn.setAttribute("disabled", true);
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCheckboxes = document.querySelectorAll(
      'input[name="pet-checkbox"]:checked'
    );

    if (checkedCheckboxes.length >= 2) {
      checkOwnerBtn.removeAttribute("disabled");
    } else {
      checkOwnerBtn.setAttribute("disabled", true);
    }
  });
});

checkOwnerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkSelectedOwners();
});

const checkSelectedOwners = () => {
  let checkedCheckboxes = document.querySelectorAll(
    'input[name="pet-checkbox"]:checked'
  );

  if (checkedCheckboxes.length < 2) {
    alert("Select at least 2 pets.");
    return;
  }

  let selectedPets = Array.from(checkedCheckboxes).map((checkbox) => {
    let petIndex = parseInt(checkbox.value);
    return pets[petIndex];
  });

  let ownersMatch = selectedPets.every((pet, index, array) => {
    if (index < array.length - 1) {
      return pet.ownerName === array[index + 1].ownerName;
    }
    return true;
  });

  if (ownersMatch) {
    alert("These pets have the same owner.");
  } else {
    alert("These pets have different owners.");
  }
};

const clearAllBtn = document.getElementById("clear-all");

clearAllBtn.addEventListener("click", () => {
  pets = [];
  savePetsToStorage();
  printPets();
  checkOwnerBtn.setAttribute("disabled", true);
  clearAllBtn.setAttribute("disabled", true);
  alert("Pet list cleared!");
});
