//A factory funtcion is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

/*
function createPerson(firstName, lastName, pl) {
    return {
        firstName: firstName,
        lastName: lastName,
        pl: pl,
        intro: function() {
            console.log(`Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`);
        },
    };
}

const john = createPerson("John", "Doe", "JavaScript");

john.intro();
*/

//Create a factory function that generates different typas of vehicles. Each vehicle object should have properties like type, brand, model and year.

/*
function createVehicle(type, brand, model, year) {
    return {
        type: type,
        brand: brand,
        model: model,
        year: year,
        getDetails: function() {
            console.log(`${this.year} ${this.brand} ${this.model} (${this.type})`);
        },
    };
};

const mazda = createVehicle("Car", "Mazda", "CX-5", 2020);
const yamaha = createVehicle("Motorcycle", "Yamaha", "YZF-R3", 2021);
const boeing = createVehicle("Airplane", "Boeing", "747", 2018);
const honda = createVehicle("Car", "Honda", "Civic", 2022);

mazda.getDetails();
yamaha.getDetails();
boeing.getDetails();
honda.getDetails();
*/