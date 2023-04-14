class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        return "Full name: " + this.firstname + " " + this.lastname;
    }
}

let person1 = new Person("Nkulu", "Kahle");
let person2 = new Person("Nana", "Ivy");

console.log(person1.fullname());
console.log(person2.fullname());