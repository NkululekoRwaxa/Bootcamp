// create Person class
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi, ", this.firstname);
    }
    compliment(item, naam) {
        console.log("That's a wonderful ", item, ", ", naam);
    }
}

let p = new Person("Nkulu", "Kakhulu");
let f = new Person("Nana", "Ivy");

p.greet();
f.greet();
p.compliment("hat", p.firstname);
f.compliment("skirt", f.firstname);