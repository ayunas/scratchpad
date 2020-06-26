class Vehicle {  //Abstract

    constructor() {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract Class Vehicle cannot be instantiated");
        }

        if (this.brake == undefined) {
            throw new Error("you must implement break() in " + this.constructor.name);
        }

        if (this.drive == undefined) {
            throw new Error("you must implement drive() in " + this.constructor.name);
        }
    }

    _brake() { //resembles the abstract methods that need to be implemented in the Sub class
        throw new Error("Abstract method invoked. invoke break() in the Sub class");
    }

    _drive() { //resembles the abstract methods that need to be implemented in the Sub class
        throw new Error("Abstract method invoked. invoke drive() in the Sub class");
    }

}

class Car extends Vehicle {

    constructor() {
        super();
    }

    // brake() {
    //     console.log("car break()");
    // }

    drive() {
        console.log("car drive()")
    }

}

const car = new Car();









 // break() {
    //     //if the break() in the sub-class doesn't exist, we need to throw a new error.
    //     console.log('this.break() in Vehicle', this.break);
    //     // if (!this.constructor.break) {
    //     //     console.log(this.constructor.name);
    //     //     throw new Error(`The break method must be implemented in sub class ${this.constructor.name}`);
    //     // }
    // }

   //How do we check if a method is defined on the sub class?
        // https://stackoverflow.com/questions/55971662/how-to-check-if-child-class-has-overridden-parent-method-function
        // https://ilikekillnerds.com/2015/06/abstract-classes-in-javascript/
        
        // console.log(Object.getOwnPropertyNames(this.constructor));
        // console.log(Object.getPrototypeOf(this))

        // if (this.constructor.break == undefined) {
        //     throw new Error(`The break method must be implemented in sub class ${this.constructor.name}`);
        // }


