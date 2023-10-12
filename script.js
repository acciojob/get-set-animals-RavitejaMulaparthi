class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:
const myCat = new Cat("Domestic Cat");
console.log(`Species: ${myCat.species}`);
myCat.makeSound(); // This will call the makeSound method from the Animal class
myCat.purr();      // This will call the purr method specific to the Cat class

const myDog = new Dog("Golden Retriever");
console.log(`Species: ${myDog.species}`);
myDog.makeSound(); // This will call the makeSound method from the Animal class
myDog.bark();      // This will call the bark method specific to the Dog class
