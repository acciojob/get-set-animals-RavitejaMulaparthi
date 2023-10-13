class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this.species;
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
