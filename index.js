class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  class Mammal extends Animal {
    giveBirth() {
      console.log(`${this.name} is giving birth`);
    }
  }
  
  class Bird extends Animal {
    fly() {
      console.log(`${this.name} is flying`);
    }
  }
  
  class Dog extends Mammal {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Cat extends Mammal {
    makeSound() {
      console.log("Meow!");
    }
  }
  
  class Parrot extends Bird {
    makeSound() {
      console.log("peal call");
    }
  }

  class butterfly extends anthropoda {
    makeSound() {
        console.log ("clicking");
    }
  }

  class frog extends amphibia {
    makeSound() {
        console.log("croak");

    }
  }
  
  class tortoise extends reptile {
    makeSound() {
        console.log ("purr");

    }
  }

  