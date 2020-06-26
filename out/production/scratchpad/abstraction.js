//Abstract Class – Machine
// 	-name
// 	-work( )
// 	-cost( )


// Vehicle
// 	Truck
// 	Motorcycle
// 	Snow mobile

class HomoSapien {

    constructor() {
        if (this.constructor == HomoSapien) { //class becomes abstract
            throw new Error("Unable to instantiate an Abstract Class");
        }
    }

    act() {
        throw new Error("Abstract Method has no implementation");
    } 

    move() {
        throw new Error("Abstract Method has no implementation");
    }
}


class Human extends HomoSapien {

    constructor(name,gender) {
        super();
        this.name = name;
        this.gender = gender;
    }

    act() {
        console.log(`${this.name} is an action taker`);
    }

    move() {
        console.log(`${this.name} keeps on moving and grooving`);
    }
}

const person = new Human("Amir","male");

person.act();
person.move();





