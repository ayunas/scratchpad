// https://www.codingame.com/playgrounds/2980/practical-introduction-to-functional-programming-with-js/functors-and-monads

const duplicate = x => [x,x];

const arr = [1,2,3,4,5];

const dups = arr.map(duplicate);

console.log(dups);



