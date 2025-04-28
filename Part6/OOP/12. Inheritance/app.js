//Inheritance
/** 
 * Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This enables code reuse and the creation of hierarchical relationships between classes. In JavaScript, inheritance can be achieved through prototype-based inheritance (before ES6) or using ES6 classes (with the extends keyword).
 */

/*
//Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Unkown Sound";
    }
}

//Subclass inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the superclass (Animal)
    }

    makeSound() {
        return "Woof!";
    }
}

const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.makeSound());

const dog = new Dog("Buddy");
console.log(dog.makeSound());
console.log(dog);
*/
