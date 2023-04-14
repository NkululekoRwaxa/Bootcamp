let dog = {
    dogName: "JS",
    dogWeight: 2.4,
    dogColor: "Brown",
    dogBreed: "Chihuahua"
};

class Dog {
    constructor(dogName, dogWeight, dogColor, dogBreed) {
        this.dogName = dogName;
        this.dogWeight = dogWeight;
        this.dogColor = dogColor;
        this.dogBreed = dogBreed;
    }

    toString() {
        return this.dogName + " is a " + this.dogColor + " " + this.dogBreed + " that weighs " + this.dogWeight + " kg"
    }
}

let newDog = new Dog("Bova", 3.5, "White", "Pit Bull");
console.log(newDog.toString());

// Private attributes, setters and getters
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }

//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// call get or set without ()
// let p = new Person("Mary", "Lowe");
// console.log(p.firstname);

// Inheritance

class Vehicle {
    constructor(color, currentSpeed, maximumSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maximumSpeed = maximumSpeed;
    }

    move() {
        console.log("moving at: ", this.currentSpeed);
    }

    accelerate(amount) {
        if (amount < this.maximumSpeed) {
            this.currentSpeed += amount;
        }
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maximumSpeed, fuel) {
        super(color, currentSpeed, maximumSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}
// Prototype
Motorcycle.prototype.introduce = function() {
    console.log("I am a motocycle with color", this.color);
}

let mc = new Motorcycle("Black", 0, 250, "Petrol");
mc.introduce();