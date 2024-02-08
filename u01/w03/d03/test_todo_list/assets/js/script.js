// Questo è l'array che raccoglierà gli oggetti della lista todo:
let todoItems = [];

// Questa funzione creerà i nuovi oggetti basati sul testo inserito nel campo di input e lo pusherà nell'array todoItems:
function addTodo(text) {
  const todo = {
    text,
    checked: false, // Questo servirà per selezionare i vari todo come completati
    id: Date.now(), // Volevo che ogni oggetto avesse un ID univoco, il Date.now() dovrebbe funzionare (a meno che uno non riesca a inserire due item in un millisecondo)
  };

  todoItems.push(todo);
  renderTodo(todo);
}

// Seleziono l'elemento form
const form = document.getElementById("form");

// Creo un event listener attivato da submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita refresh del browser al submit
  const input = document.getElementById("todoInput");
  const text = input.value.trim(); // trim() elimina spazi vuoti prima e dopo la stringa dei nuovi todo; passiamo la stringa alla variabile text
  if (text !== "") {
    // se la stringa inserita non è vuota
    addTodo(text); // la passiamo a addTodo() che la inserirà come text nell'oggetto della todo
    input.value = ""; // una volta raccolta la stringa azzeriamo il campo input
    input.focus(); // e gli ridiamo focus
  }
});

// Dal console.log vedo che gli oggetti vengono correttamente creati nell'array. Ora bisogna fare in modo che i nuovi todo vengano anche renderizzati a schermo

function renderTodo(todo) {
  // renderTodo() serve a scrivere i nuovi todo nella lista
  const list = document.getElementById("todoList");

  let isChecked; // questa variabile conterrà lo stato di ogni todo ('done' se completato)
  if (todo.checked) {
    isChecked = "done";
  } else {
    isChecked = "";
  }

  const node = document.createElement("li"); // creo elemento li che viene assegnato a node
  node.setAttribute("class", `todoItem ${isChecked}`); // gli diamo la classe todoItem con eventuale aggiunta di 'done'
  node.setAttribute("data-key", todo.id); // a ogni nuovo elemento assegno lo stesso id del todo oggetto
  node.innerHTML = `<input id="${todo.id}" class="checkbox" type="checkbox"/><span>${todo.text}</span><button class="deleteTodo"></button>`; // INSERIRE DELETE ICON ALL'INTERNO DEL BUTTON

  list.appendChild(node);

};

// chiamo la funzione renderTodo() alla fine di addTodo(), così che ogni volta che inserisco un nuovo todo venga stampato a schermo

// Ora bisogna poter marcare i vari todo come completati/done

const itemKey = [];
const list = document.getElementById('todoList')
list.addEventListener('click', function(event) {
    let checkbox = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i]) {
            itemKey.push(checkbox.id)
        }
    }
})