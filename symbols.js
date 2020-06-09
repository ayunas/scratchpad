// const _radius = Symbol();

// class Circle {
//     constructor(radius) {
//         // this._radius = radius;
//         this[_radius] = radius;
//     }
// }

// const c = new Circle(10);
// console.log(c);

// const [key] = Object.getOwnPropertySymbols(c);
// console.log(key);

// // let id = Symbol("id");
// // console.log(typeof id);

// const id = Symbol("id");

// const user = {name : 'amir', [id] : 20};

// console.log(Object.entries(user));
//================================================
function User(name,age,gender) {
    let ageSymbol = Symbol("age");

    this.name = name;
    this[ageSymbol] = age;
    this.gender = gender;
}

const amir = new User('amir',38,'male');

console.log(Object.entries(amir));
















