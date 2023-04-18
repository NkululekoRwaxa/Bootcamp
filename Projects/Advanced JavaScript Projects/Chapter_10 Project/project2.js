// Interactive voting system

class Person {
    constructor(naam) {
        this.naam = naam;
        this.vote = 0;
    }
}

class People {
    constructor() {
        this.myArray = [];
        this.names = [];
        this.elements = 0;
    }
    addPerson(person) {
        this.elements++;
        let table = document.getElementById("output");
        let row = document.createElement("tr");
        let td = document.createElement("td");

        if (this.names.indexOf(person.naam) < 0) {
            this.myArray.push(person);
            this.names.push(person.naam);

            td.setAttribute("id", this.elements);
            td.innerHTML = this.elements + ". " + person.naam + " " + person.vote;
        } else {
            let index = this.names.indexOf(person.naam);
            this.myArray[index].vote++;

            document.getElementById(index + 1).innerText = (index + 1) + ". " + person.naam + " " + this.myArray[index].vote;
        }

        row.appendChild(td);
        table.appendChild(row);
    }
}

function addFriend() {
    let inputName = document.getElementById("addFriend").value;
    let newPerson = new Person(inputName);

    people.addPerson(newPerson);
}

var people = new People();

let friend1 = new Person("Name A");
let friend2 = new Person("Name B");
let friend3 = new Person("Name C");

people.addPerson(friend1);
people.addPerson(friend2);
people.addPerson(friend3);

document.getElementById("button").addEventListener("click", addFriend);