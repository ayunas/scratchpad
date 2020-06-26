const {add,multiply} = require('./callbacks');

const x = add(2,3);
console.log(x);

const obj = 
{ 
    html : { children : [
        {
            html : {
            children : ["head","body"]
            }
        }
            ]
    }
}

console.log(obj);
