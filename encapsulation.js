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
    
    constructor() {
        // this.#hunger;
        // this.#hunger = 10;
    }

    static hunger = 10; //static property, available to ALL instances

    feed = (qty) => {
        // this.#hunger = this.#hunger - qty;
        console.log(this.hunger);
    }

    getHunger() { //public method
        return hunger;
    }
}

const kitten = new Cat();
kitten.feed(3);
console.log(kitten);





