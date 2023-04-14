class Animal {
	#species;
	#sound;
	constructor(species, sound)
	{
		this.#species = species;
		this.#sound = sound;
	}
	get getAnimal()
	{
		return this.#species + " makes a " + this.#sound + " sound";	
	}
	
	get getSpecies(){ return this.#species;}
	get getSound(){ return this.#sound;}
}

Animal.prototype.legs = function(legs){
	console.log("I am a",this.getSpecies,"I have", legs,"legs");
};

let a = new Animal("tiger", "rooooars!");
let b = new Animal("dog", "bark bark!");

console.log(a.getAnimal);
console.log(b.getAnimal);

a.legs(4);

