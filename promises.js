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
        console.log(res, 'res async arrow iife');
    } catch(err) {console.log(err, 'res async arrow iife')}
})()

console.log('after the promise');

const promise2 = new Promise((res,rej) => {
    setTimeout(() => res('resolved'),1000)
})

promise2.then(res => {console.log(res); return 'one more gain'}).then(res => {console.log(res); return 'two more gain..'}).then(res => console.log(res)).catch(err => console.log(err));




