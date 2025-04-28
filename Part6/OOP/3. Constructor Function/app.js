

//Constructor functions in JavaScript are regular functions ued with the new keyword to create and initizalize objects with shared properties and methods. The act as blueprints for creating multiple instances of objects with the same structure and behavior.

//NEW KEYWORD:
// 1. Create a empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

/*
function CreatePeople(firstName, lastName, pl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pl = pl;

    this.info = function() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`);
    };
}

const john = new CreatePeople("John", "Doe", "JavaScript");
const tony = new CreatePeople("Tony", "WebDev", "C#");

john.info();
tony.info();
*/

/*
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getInfo = function() {
        return `${this.title} by ${this.author} - (${this.year})`;
    };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log(book1.getInfo());
console.log(book2.getInfo());
*/

// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Acces parameter values ot the call object
// 3. Create a method name (info), which will just print the info
// 4. Create a few instances
// 5. Access each property

/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.info = function() {
        return `
            Name: ${this.name}, 
            Age: ${this.age}, 
            Gender: ${this.gender}`;
    };
};

tony = new Person("Tony", 22, "Male");
john = new Person("John", 30, "Male");
ana = new Person("Ana", 25, "Female");

console.log(tony.info());
console.log(john.info());
console.log(ana.info());
*/

// *************** EXERCISE 2
// In this exercise, you will create a constructor function called Car that represents a car with specific properties such as make, model, year, and color. Additionally, you will define two methods, start and stop, to simulate starting and stopping the car.

// -> Define the Car constructor function that takes four parameters: make, model, year, and color.
// -> Inside the constructor, use this to assign the parameters to the corresponding properties of the object being created.
// -> Define a method called start as a property of the object. The start method should return a string message like "Starting the Toyota Camry..." where "Toyota" is the make and "Camry" is the model of the car.
// -> Define another method called stop as a property of the object. The stop method should return a string message like "Stopping the Honda CR-V." where "Honda" is the make and "CR-V" is the model of the car.
// -> Create two car instances (car1 and car2) using the Car constructor with different properties.
// -> Test the methods by calling car1.start() and car2.stop(). Observe the output and make sure the messages display the correct make and model of the cars.

/*
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.start = function() {
        return `Starting the ${this.make} ${this.model}...`;
    };

    this.stop = function() {
        return `Stopping the ${this.make} ${this.model}.`;
    };
};

car1 = new Car("Toyota", "Camry", 2020, "Blue");
car2 = new Car("Honda", "CR-V", 2021, "Red");

console.log(car1.start());
console.log(car2.stop());
*/
