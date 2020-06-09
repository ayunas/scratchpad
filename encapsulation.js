// class Cat {
//     #hunger = 10;

//     feed = () => {
//         this.#hunger--;
//     }

//     getHunger = () => {
//         return this.#hunger;
//     }

// }

// const kitty = new Cat();
// console.log(kitty.getHunger());
// kitty.feed();
// console.log(kitty.getHunger());


// class Cat {
//     hunger = 10;

//     constructor() {
//         this.hunger;
//     }

// }

// const kitten = new Cat();
// kitten.hunger = 7;
// console.log(kitten.hunger);



class Cat {
    #hunger = 10; //#private variable

    constructor() {
        this.#hunger;
    }

    feed(qty) {
        this.#hunger = this.#hunger - qty;
    }

    getHunger() { //public method
        return this.#hunger;
    }

}

const kitten = new Cat();
kitten.feed(3);
console.log(kitten.hunger);




