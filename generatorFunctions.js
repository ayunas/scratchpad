function* generatorFunction() {
    yield 'One';
    yield 'Two';
    yield 'Three';
    return 'Hello Generator';
}

const x = generatorFunction();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

const y = generatorFunction();
for (const v of y) {
    console.log(v);
}

const z = generatorFunction();
console.log(z.next());
z.return('close but no cigar');
console.log(z.next());


function* extendGen() {
    yield* generatorFunction();
    yield 1;
    yield 2;
    yield 3;
    return 'end of the extend generator function';
}

const genA = extendGen()

for (const val of genA) {
    console.log(val);
}

const genB = extendGen();

do {
    console.log(genB.next())
} 
while (!genB.next().done);


// while (!genB.next().done) {
//     console.log(genB.next())
// }

function* incrementer() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const counter = incrementer();

for (let i=0; i<20; i++)  {
    console.log(counter.next());
}

function* fibonacci() {
    let prev = 0;
    let next = 1;

    yield prev;
    yield next;

    while (true) {
        const newVal = prev + next;
        yield newVal;
        prev = next;
        next = newVal;
    }
};

const fibs = fibonacci();

for (let i=0; i<20; i++) {
    console.log(fibs.next());
}

function* feedGenerator(val) {
    while(true) {
        val = yield val * 10;
    }
}

const feedy = feedGenerator(0);
// console.log(feedy.next());

for (let i = 0; i < 8; i++) {
    console.log(feedy.next(i));
}

const getUsers = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    return json;
}

getUsers()
    .then(res => console.log(res))
    .catch(err => console.log(err.response));

    




