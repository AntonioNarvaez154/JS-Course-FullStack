//MODIFIERS
//Class modifiers, also known as access modifiers or visibility modifiers are keywords in OOP languages that define the visibility or accessibility of class members (fields, methods, and nested classes) from other parts of the program. They control the level of encapsulation and help enforce encapsulation principles by restricting direct access to certain class members.

//In JavaScript, class modifiers are used in the ocntext of classes and objects, although JavaScript does not have traditional access modifiers like some other object-oriented languages (e.g. Java). However, you can achieve similar effects using different conventions and techniques.


/*
function MyClass(publicField, privateField, protectedField) {
    //Public field
    this.publicField = publicField;

    //Private field (closure)
    const _privateField = privateField;

    //Protected field
    const _protectedField = protectedField;

    //Public method
    this.publicMethod = function() {
        return `Public Field: ${this.publicField}`
    }

    //Private method (closure)
    function _privateMethod() {
        return `Private Method: ${_privateField}`
    }

    //Protected method
    function _protectedMethod() {
        return `Protected Method: ${_protectedField}`
    }

    //Methor to access protected method
    this.accessProtectedMethod = function() {
        return _protectedMethod();
    };
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");
*/

// console.log(myObject.publicField);
// console.log(myObject._privateField);
// console.log(myObject._protectedField);

//console.log(myObject.publicMethod());
// console.log(myObject._privateMethod());
// console.log(myObject._protectedMethod());
//console.log(myObject.accessProtectedMethod());
