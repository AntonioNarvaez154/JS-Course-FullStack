
//Classes are one of the features introduced in the ES6 version of JavaScript.
//A class is a blueprint for the object. You can create an object from the class.

//You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these decriptions, you build the house.

//Since many houses can be mane from the same description, we can create many objects from a class.

/*
//Class declaration
class Person {
    constructor(firstName, lastName, age) {
        //Instance Members
        this.firstName = firstName
        this.lastName = lastName
        this.age = age

        this.printUserInfo = function () {
            return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
        };
    }
    //Prototype Members
    greet(){ 
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Programmer extends Person {
    constructor(firstName, lastName, age, pl, experience) {
        super(firstName, lastName, age)
        this.pl = pl 
        this.experience = experience 
    }
}

const tony = new Programmer("Tony", "WebDev", 22, "JavaScript", 2)
console.log(tony)
*/

// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class and provide property of spell
// 5. Create instance of "Mega" class

/*
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return `Hello, I am ${this.name} and I am at level ${this.level}`;
    }
}

const hero1 = new Hero("IronMan", 10);
console.log(hero1);


class Mega extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }
}

const mega1 = new Mega("Deadpool", 20, "Teleportation");
console.log(mega1);
*/
