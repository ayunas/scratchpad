const set = new Set()
set.add(10);
set.add(20);
set.add(20);
set.add(40);

console.log(set);

for (let v of set) {
    console.log(v);
}

const obj = {k : 1, k2 : 2, k3 : 3};

for (let k in obj) {
    console.log(k);
    console.log(obj[k])
}

// for (let v of obj) {
//     console.log(v);
// }

const arr = [10,22,33,44,55]
for (let k in arr) {
    console.log(k);
}

for (let v of arr) {
    console.log(v)
}


