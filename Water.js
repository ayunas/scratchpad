class Water {
    static reservoir = 100; //gallons

    constructor(size=5) {
        Water.waterSupply -= size;
    }

    getSupply() {
        return Water.reservoir;
    }
}

const jug1 = new Water(10);
const jug2 = new Water(8);
const jug3 = new Water();

const supply1 = jug1.getSupply();
const supply2 = jug2.getSupply();
const supply3 = jug3.getSupply();

console.log(supply1,supply2,supply3);


// class BluePrint {
//     varA = "this property will be on every instance of this class";
// }

// const instance = new BluePrint();
// console.log(instance.varA);



// class Account {
// 	static reserve = 1000000000; //$1 billion usd
//     owner; //account holder name
    
//     constructor(name) {
//         this.owner = name;
//     }
	
// }

// const account1 = new Account("amir");
// const account2 = new Account("rosa");
// const account3 = new Account("emilios");

// console.log(account1.reserve);
// console.log(account2.reserve);
// console.log(account3.reserve);