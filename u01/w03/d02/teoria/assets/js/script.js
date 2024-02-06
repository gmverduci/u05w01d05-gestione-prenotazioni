// METODI DEGLI ARRAY

const arrayNomi = ["Mario", "Aldo", "Nicola", "Anna", "Maria"];

document.getElementById("array1").innerText = arrayNomi;

let eliminato = arrayNomi.pop();

document.getElementById(
  "eliminato"
).innerText = `Elemento eliminato = ${eliminato}`;


let array10 = [1, 2, 3, 4, 5];
let array20 = [6, 7, 8];
array10.push(array20);
console.log(array10);
console.log(array10[5]);
console.log(array10[5][2]);




const superenalotto = [];

const generatoreSuperenalotto = () => {
    while (superenalotto.length < 6) {
        let random = Math.floor(Math.random() * 60 + 1);
        if (!superenalotto.includes(random)) {
            superenalotto.push(random);
        }
    }
}

generatoreSuperenalotto();
console.log(superenalotto);
