// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields

class PrivateStatic {
    // coolbeans = "awesome!";  //instance variable.
    static stuck = "always stuck and keep on stuck";
    //class variable.  cant access it from an instance.

    constructor(info="information") {
        this.member = "membership";
        PrivateStatic.stuck = info;
    }
}

console.log(PrivateStatic.stuck);
const ps = new PrivateStatic();
console.log(PrivateStatic.stuck);
console.log(ps.member);
const ps2 = new PrivateStatic("cool info");
console.log(PrivateStatic.stuck);







