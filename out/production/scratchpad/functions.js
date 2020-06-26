const obj = {
    key : "val1",
    func : function() {
        console.log("this.key in regular function");
        console.log(this.key);
        console.log("\n");
    },
    arrow : () => {
        console.log("this.key in arrow function");
        console.log(this.key);
    }
}

obj.func();
obj.arrow();

const Adder = (x,y) => {
    this.x = x;
    this.y = y;
}

const add1 = new Adder()
