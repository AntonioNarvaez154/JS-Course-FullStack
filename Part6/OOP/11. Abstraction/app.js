//Abstraction
/**
 * Abstraction is the process of simplifying complex systems by breaking them down into smaller, manageable parts. It allows you to focus on the essential features of an object and hide unnecessary details. In JavaScript, you can use abstract classes to define abstract structures and then implement them in concrete objects. 
*/

/*
class Animal {
    constructor(name){
        this.name = name;
    }

    //Abstract method (to be implemented by subclasses)
    makeSound() {
        throw new Error("Method (makeSound) must be implemented");
    }
}

class Dog extends Animal { 
    constructor(name) {
        super(name)
    }

    //Implementing the abstract method
    makeSound() {
        return "Woff!";
    }
}

//Concrete Subclass
class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        return "Meow!";
    }
}

const dog = new Dog("Rex");
console.log(dog.name);
console.log(dog.makeSound());

const cat = new Cat("Whiskers");
console.log(cat.name);
console.log(cat.makeSound());
*/