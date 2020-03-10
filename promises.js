const promise  = new Promise( (res,rej) => {

    const x = Math.round(Math.random());

    // x === 1 ? res('successful promise') : rej('unsuccessful promise');

    if (x === 1) {
        setTimeout(() => res('success'),3000);
    } else {
        setTimeout(() => rej('failure'),1000);
    }
    
})


// async function test() {
//     try {   
//         const res = await promise;
//         console.log(res);
//     } catch(err) {console.log(err)}
    
// }
// test()

// promise.then(res => console.log(res)).catch(err => console.log(err));

console.log('after the promise');

