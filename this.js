/*
Default (Global) binding rule.
Implicit binding rule.
Explicit binding rule
Constructor calls with new
https://scotch.io/courses/10-need-to-know-javascript-concepts/the-this-keyword
*/

//1. default binding = (global)
console.log("default",this);

function fn() {
    console.log('global binding',this);
}

fn();

new fn()


//2. implicit binding = (object)
const obj = {
    key1 : 'val1',
    key2 : 'val2',
    print : function() {console.log(this.key1,this.key2)}
}

obj.print()

let printer = obj.print;

printer(); //implicit binding - printer does not belong to the obj object.  a plain function call without an owner object.
printer = printer.bind(obj)
printer();



//3. explicit binding = (call,apply,bind)
//call(obj,arg1,arg2,arg3,...) immediately invokes the function in place.
const brocolli = {
    name : 'brocolli',
    type : 'vegetable',
    eat : function() {console.log("munch mucnh munch the " + this.name)}
}

const pizza = {
    name : 'pizza',
    type : 'lunch',
}

brocolli.eat.call(pizza);
brocolli.eat.apply(pizza);

//apply(obj,[...args]) immediately invokes the function in place.  2nd parameter is an array.

const vehicle = {
    type : 'car',
    make : 'lexus',
    model : 'es250',
    year : 1991,
    drive : function(...args) {
        console.log(`I got the ${this.make} ${this.model},  bullet proof glass tints, full tank of gas.`);
        console.log('there is a:');
        args.forEach(a => console.log(a))
        console.log(`in the ${this.make} ${this.model}`);
    }
}

// vehicle.drive();

const vehicle2 = {
    type : 'truck',
    make : 'ford',
    model : 'f150',
    year : 2015
}

// vehicle.drive('baby','soda','camera','iphone','book');

// vehicle.drive.apply(vehicle2,['baby','soda','camera','iphone','book']);


const drive = vehicle.drive.bind(vehicle2,'baby','soda','camera','iphone','book'); //bind() is the only one that doesn't automatically invoke the function
drive()

 //====================
 //4. new binding
 function Shape(type,area) {
     this.type = type;
     this.area = area;
 }

 const rect = new Shape('rectangle',20);

 function Cat(name,sound) {
    this.name = name;
    this.sound = sound;

    this.makeSound = function() {
        console.log(this.name + ' goes ' + this.sound);
    }

    this.whine = function() {
        let count = 0, max = 100;
        const t = setInterval(() => {
            this.makeSound();
            count++;
            count === max && clearInterval();
        },1000);
    }

    this.whiner = function() {
        let count = 0, max = 100;
        const t = setInterval(function() { 
            this.makeSound();//this doesn’t work because inside the setInterval callback we’ve created a new context with global scope, so this no longer points to our kitty instance. In a web browser, this will instead point to the Window object, which doesn’t have a makeSound() method.
            count++;
            count === max && clearInterval();
        })
    }
    // https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/

 }

 const kitty = new Cat('furball', 'meowww');
 kitty.makeSound();

kitty.whine()
// kitty.whiner();


class Thisy {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    checkVals() {
        
    }
 

}



// function thisy() {
//     console.log("function", this);
//     console.dir("console.dir", this);

// }

// const thisArrow = () =>  console.log("arrow", this);


// thisy();
// thisArrow();


// function f1() {
//     return this;
// }

// console.log(globalThis === f1());

//arrows vs functions in classes.  
class Thisy {

    constructor(name) {
      this.name = name;
      this.showName = this.showName.bind(this);
    }
  
    showName() {
      console.log(this.name);
    }
  
    arrowShow = () => console.log(this.name)
  
  }
  
  const t = new Thisy('thisy');
  
  t.showName();
  
  t.arrowShow();
  
  
  const showIt = t.showName;
  
  showIt();
  
  const arrowIt = t.arrowShow;
  
  arrowIt();