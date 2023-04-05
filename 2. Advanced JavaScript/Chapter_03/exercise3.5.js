people = {
    friends: []
};

variable1 = {
    firstname: "Asa",
    lastname: "Lux",
    id: 123
};

variable2 = {
    firstname: "Musa",
    lastname: "Mansa",
    id: 456
};

variable3 = {
    firstname: "Tim",
    lastname: "Tom",
    id: 987
};

people.friends.push(variable1);
people.friends.push(variable2);
people.friends.push(variable3);

console.log(people);