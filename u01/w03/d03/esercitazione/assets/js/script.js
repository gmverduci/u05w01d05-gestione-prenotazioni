const task = document.getElementById("task");
const btnAdd = document.getElementById("inserisci");
const lista = document.getElementById("lista");

let tasks = [];

window.addEventListener("load", init);

function init() {
  if (localStorage.getItem("tasks")) {
    tasks = localStorage
      .getItem("tasks")
      .split(";")
      .map((taskStringa) => {
        if (typeof taskStringa === "string") {
          const taskData = taskStringa.split("|");
          return {
            testo: taskData[0],
            id: parseInt(taskData[1]),
            checked: taskData[2] === "true",
          };
        } else {
          return taskStringa;
        }
      });
    scriviLista();
  }
}

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();

  if (task.value == "") {
    alert("Inserire un task!");
    return;
  }
  aggiungi();
  scriviLista();
  cancellaForm();
});

const aggiungi = () => {
  const singleTask = {
    testo: task.value,
    id: Date.now(),
    checked: false,
  };
  tasks.push(singleTask);
  localStorage.setItem(
    "tasks",
    tasks
      .map((task) => task.testo + "|" + task.id + "|" + task.checked)
      .join(";")
  );
};

function scriviLista() {
  lista.innerHTML = "";
  tasks.forEach((element, index) => {
    lista.innerHTML += `<li id="${element.id}">${element.testo}&nbsp;<button type="button" onclick="elimina(${index});">X</button></li>`;
  });
}

function cancellaForm() {
  task.value = "";
}

const elimina = (indice) => {
  tasks.splice(indice, 1);
  localStorage.setItem(
    "tasks",
    tasks
      .map((task) => task.testo + "|" + task.id + "|" + task.checked)
      .join(";")
  );
  scriviLista();
};
