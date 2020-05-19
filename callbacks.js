


function hof(f1,f2,x,y) {
    //this function takes the output of the two input functions, and uses that to generate another function.
    const f1Val = f1(x,y);
    const f2Val = f2(x,y);

    return (x,y) => f1Val + f2Val; 
    //this function the output of f1 and f2, and adds it with any arguments passed into it.
    }


const add = (x,y) => x + y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;
const subtract = (x,y) => x - y;

const addinger = hof(divide,subtract,1,2);
console.log(addinger(2,3));

