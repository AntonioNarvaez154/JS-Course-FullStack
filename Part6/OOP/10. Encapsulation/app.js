//Encapsulation
/**
 * Encapsulation is the conecpto of bundling data (properties) and methods (functions) together within an object, allowing the object to controll access to it's internal data and behavior. This helps to hide implementation details and expose only necessary interfaces to interact with the object. In JavaScript, you can achieve encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces.
*/

/*
function Counter() {
    let _count = 0; // Private variable
    
    //Public method that can access and modify the private variable
    this.increment = function() {
        _count++;
    }

    this.decrement = function () {
        _count--;
    }

    this.getCount = function () {
        return _count;
    }
}

const counter = new Counter();
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
*/