
class JSClass {

    static namey = 'john';
    age = 8;
    height = 2;

    constructor() {
        this.name = 'amir';
        this.age = 38;
        this.height = 72;
    }


}

const amir = new JSClass();

console.log(amir.name);
console.log(JSClass.namey);

