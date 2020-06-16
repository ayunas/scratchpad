class Statical {
    static a = 'static a';
    static b = 'static b';
    #c = "private c";

    // constructor() {
    //     if (this.constructor == NoBluePrint) {
    //         throw new Error("this class is not allowed to be instantiated.");
    //     }
    // }

    static main() { //only static methods can access static properties of the class in JS
        // console.log("static method main(): ", this.a,this.b); //static vars are not on the instance. only on the class
        console.log(this);
        // console.log("are a and b accessible from a static method??? let's see: ", a,b);
        console.log("are Statical.a and Statical.b accessible from a static method??? let's see: ", Statical.a,Statical.b);

        // console.log("#c in main() : ", this.#c);

    }

    instanceMethod() { //instance methods cannot access static properties of the class in JS
        console.log("instance method test() this.a, this.b: ", this.a, this.b);
        // console.log("static a and static b, without 'this' : ", a,b); //cannot access static variables.  they are only stored on the class themselves, or via a static method.
        console.log("Statical.a, Statical.b from instanceMethod() : ", Statical.a, Statical.b);
        console.log("#a in instanceMethod() : ", this.#c);
    }
}

const stats = new Statical();
console.log("stats.a: ", stats.a); //we can't access static properties from an instance.
console.log("Statical.a: ", Statical.a); //static properties are only accessible via the class itself
stats.instanceMethod();
// stats.main(); //cannot access a static method from an instance in JS
Statical.main();












// class Dog {
//     static hunger = 10;
//     static energy = 20;

//     constructor() {
//         this.hunger = Dog.hunger;
//         this.energy = Dog.energy;
//     }

// }

// const doggy = new Dog();
// const mut = new Dog();

// console.log(mut.hunger, doggy.hunger);








