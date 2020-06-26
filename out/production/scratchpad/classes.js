function SuperHero(name,ability,speech) {
    const that = {}
    that.name = name;
    that.ability = ability;
    that.speech = function() {
        console.log(`${this.name} says : ${speech}`);
    }

    return that;
}

const superman = SuperHero('superman','flying',"it's a bird. it's a plane. it's superman");
console.log(superman.speech());


function Foo() {
    this.name = 'amir';
    console.log(this.name);
    return this;
}

// const obj = Foo();
// console.log(obj);

class jsClass {
    a = 'property a';
}

const js = new jsClass();
console.log(typeof js);





