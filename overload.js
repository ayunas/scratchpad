// function runMe(a,b,c,d,e) {
//     console.log(a,b,c,d,e);
//     console.log("runMe with 5 parameters: ", arguments);
// }

// function runMe() {
//     console.log("runMe with no parameters: ", arguments);
// }

class Run {


    runMe = (...args) => {
      args.forEach(a => console.log(`runMe(${args.length})`,a));
    }



}

const run = new Run();

run.runMe(1,2,3,4,5);