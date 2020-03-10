const promise  = new Promise( (res,rej) => {

    const x = Math.round(Math.random());

    // x === 1 ? res('successful promise') : rej('unsuccessful promise');

    if (x === 1) {
        setTimeout(() => res('success'),3000);
    } else {
        setTimeout(() => rej('failure'),1000);
    }
    
})

async function isOne () {
    try {   
        const res = await promise;
        console.log(res, 'classic function isOne');
    } catch(err) {console.log(err, 'classic function isOne')}
}
isOne()

promise.then(res => console.log(res, '.then res')).catch(err => console.log(err, '.then res'));

(async () => {
    try {
        const res = await promise;
        console.log(res, 'res async iife');
    } catch(err) {console.log(err, 'res async iife')}
})()

console.log('after the promise');

