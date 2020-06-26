// procedural

console.log("this is a program to count from 1 to 5");

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//DON"T REPEAT YOURSELF.

for(let i=0; i<5; i++) {
  console.log(i+1);
}

console.log("now, I'm going to count from 6 - 10");

for(let i=5; i<10; i++) {
  console.log(i+1);
}


// functional
function count(msg,start,count,looper) { 
    console.log(msg);
    looper(start,count);
}
  
  
  const loop = (start,count) => {
    for(let i=start; i<=count; i++) {
      console.log(i);
    }
  }
  
  count("this is a program to count from 10 to 15",10,15,loop);
  
  count("now i'm going to count from 6 to 10",16,20,loop);
  
//object oriented



