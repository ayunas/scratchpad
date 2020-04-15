
class Amir {
    constructor() {
        this.name = 'amir';
        this.age = 38;
    }
}


const a = new Amir();


console.log(a.name,a['age']);

const am = {name : 'amir', age : 38};

console.log(am.name,am['age']);

console.log(JSON.stringify(am) == JSON.stringify(a));





